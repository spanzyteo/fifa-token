import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import {
  Transaction,
  SystemProgram,
  clusterApiUrl,
  PublicKey,
  LAMPORTS_PER_SOL,
  Connection,
} from '@solana/web3.js';
import {
  getAssociatedTokenAddressSync,
  getAssociatedTokenAddress,
  createTransferCheckedInstruction,
  getAccount,
  createAssociatedTokenAccountInstruction,
} from '@solana/spl-token';

class Web3 {
  connection = new Connection(clusterApiUrl('mainnet-beta', 'confirmed'));
  rate = 1000;
  mint = new PublicKey('HoYwNNATiJR7ZkiRQEVEiFU2DH3GDHVMNUjyKfszT93W');
  tokenVault = new PublicKey('7y91AjKYLPbFU1c9VxSuP4m7Tu7B31yuzayHGeiQWVkE');
  solVault = new PublicKey('7y91AjKYLPbFU1c9VxSuP4m7Tu7B31yuzayHGeiQWVkE');

  swap = async (amount) => {
    const { sendTransaction, publicKey, conn } = useWallet();
    const { connection } = useConnection();
    this.connection = connection;
    let swapTransaction = new Transaction();
    let transferAmount = amount * this.rate;
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
      this.tokenVaultATA,
      this.mint,
      userATA,
      this.tokenVault,
      transferAmount * 10 ** 9,
      9
    );
    const solToVaultIx = SystemProgram.transfer({
      fromPubkey: publicKey,
      toPubkey: this.solVault,
      lamports: amount * LAMPORTS_PER_SOL,
    });
    swapTransaction.add(transferFIFAIx, solToVaultIx);
    swapTransaction.recentBlockhash = (
      await this.connection.getLatestBlockhash()
    ).blockhash;
    const txSig = sendTransaction(swapTransaction, this.connection);
    await this.connection.confirmTransaction({
      signature: txSig,
    });
  };
}
