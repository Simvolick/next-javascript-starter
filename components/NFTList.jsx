import { ThirdwebNftMedia, useNFTCollection, useNFT } from "@thirdweb-dev/react";

const contract = '0xa6794dec66df7d8b69752956df1b28ca93f77cd7'

export default function NFTCollectionRender() {
  const contract = useNFTCollection({contract});
  const { data: nft, isLoading } = useNFT(contract, 0);

  return (
    <div>
      {!isLoading && nft ? (
        <ThirdwebNftMedia metadata={nft.metadata} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}