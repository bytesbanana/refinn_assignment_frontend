import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import AssetDetail from '../../components/AssetDetail';
import LoaderCircle from '../../components/LoaderCircle';
import useIsMounted from '../../hooks/useIsMounted';
import AssetAPI from '../../libs/api/AssetAPI';

const AssetDetailsPage = () => {
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
      {assetData && <AssetDetail asset={assetData} />}
    </>
  );
};

export default AssetDetailsPage;
