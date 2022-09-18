import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import AssetDetail from '../../../../components/AssetDetail';
import useIsMounted from '../../../../hooks/useIsMounted';
import AssetAPI from '../../../../libs/api/AssetAPI';
import LoaderCircle from '../../../../components/LoaderCircle';

const ViewAssetPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const isMounted = useIsMounted();
  const [assetData, setAssetData] = useState();

  useEffect(() => {
    if (!isMounted()) return;
    if (!router.isReady) return;

    (async () => {
      const data = await AssetAPI.fetchAsset(id);
      setAssetData(data);
    })();
  }, [isMounted, router, id]);

  return (
    <>
      {!assetData && <LoaderCircle />}
      {assetData && <AssetDetail disableContactactForm asset={assetData}/>}
    </>
  );
};

export default ViewAssetPage;
