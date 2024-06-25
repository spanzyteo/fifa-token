import React, { useCallback } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import '../wallet.css';
const ConnectWalletButton = () => {
  const { wallet, connect, disconnect, connected, publicKey } = useWallet();

  return (
    <>
      <WalletMultiButton />
    </>
  );
};

export default ConnectWalletButton;
