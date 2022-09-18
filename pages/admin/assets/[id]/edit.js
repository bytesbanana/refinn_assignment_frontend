import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AssetAPI from '../../../../libs/api/AssetAPI';
import InputAssetForm from '../../../../components/InputAssetForm';
import LoaderCircle from '../../../../components/LoaderCircle';
import useIsMounted from '../../../../hooks/useIsMounted';
import { INPUT_ASSET_MODE } from '../../../../utils/constant';

const EditAssetPage = () => {
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

  const handleSubmitForm = async (formData) => {
    const result = await AssetAPI.updateAsset(formData);

    if (result) {
      router.push('/admin/assets?success=true');
    }
  };
  return (
    <>
      {!assetData && <LoaderCircle />}
      {assetData && (
        <InputAssetForm title={'Update asset information'} onFormSubmit={handleSubmitForm} mode={INPUT_ASSET_MODE.EDIT} initFormData={assetData} />
      )}
    </>
  );
};

export default EditAssetPage;
