import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react';
import NFTList from '../components/NFTList';

export default function Home() {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();
  return (
    <div>
      {address ? (
        <>
          <button onClick={disconnectWallet}>Disconnect Wallet</button>
          <p>Your address: {address}</p>
          <NFTList/>
        </>
      ) : (
        <button onClick={connectWithMetamask}>Connect with Metamask</button>
      )}
    </div>
  );
}
