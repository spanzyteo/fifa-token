import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import {
  Transaction,
  SystemProgram,
  clusterApiUrl,
  PublicKey,
  LAMPORTS_PER_SOL,
  Connection,
  Keypair,
} from '@solana/web3.js';
import {
  getAssociatedTokenAddressSync,
  getAssociatedTokenAddress,
  createTransferCheckedInstruction,
  getAccount,
  createAssociatedTokenAccountInstruction,
} from '@solana/spl-token';
import base58 from 'bs58';

export class Web3 {
  mint = new PublicKey(import.meta.env.VITE_MINT);
  tokenVault = new PublicKey(import.meta.env.VITE_TOKEN_PUBKEY);
  solVault = new PublicKey(import.meta.env.VITE_SOL_VAULT);
  tokenVaultKeypair = Keypair.fromSecretKey(
    base58.decode(import.meta.env.VITE_TOKEN_VAULT)
  );
  swap = async (
    fifaAmount,
    solAmount,
    sendTransaction,
    connection,
    publicKey
  ) => {
    this.connection = connection;
    let swapTransaction = new Transaction();

    console.log(this.tokenVaultKeypair.secretKey.toString());
    const userATA = await getAssociatedTokenAddressSync(this.mint, publicKey);

    let mintATAinfo = await this.connection.getAccountInfo(userATA);
    if (mintATAinfo === null) {
      swapTransaction.add(
        createAssociatedTokenAccountInstruction(
          publicKey,
          userATA,
          publicKey,
          this.mint
        )
      );
    }
    let tokenVaultATA = await getAssociatedTokenAddressSync(
      this.mint,
      this.tokenVault
    );
    const transferFIFAIx = createTransferCheckedInstruction(
      tokenVaultATA,
      this.mint,
      userATA,
      this.tokenVault,
      fifaAmount * 10 ** 9,
      9
    );
    const solToVaultIx = SystemProgram.transfer({
      fromPubkey: publicKey,
      toPubkey: this.solVault,
      lamports: solAmount * LAMPORTS_PER_SOL,
    });
    swapTransaction.add(transferFIFAIx, solToVaultIx);
    swapTransaction.recentBlockhash = (
      await this.connection.getLatestBlockhash()
    ).blockhash;
    swapTransaction.feePayer = publicKey;
    console.log(this.tokenVaultKeypair.publicKey.toBase58());
    swapTransaction.sign(this.tokenVaultKeypair);
    const txSig = await sendTransaction(swapTransaction, this.connection);
    console.log(txSig);
    await this.connection.confirmTransaction({
      signature: txSig,
      blockhash: await this.connection.getLatestBlockhash('confirmed'),
    });
  };
}
