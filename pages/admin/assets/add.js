import React from 'react';
import { useRouter } from 'next/router';
import AssetAPI from '../../../libs/api/AssetAPI';
import InputAssetForm from '../../../components/InputAssetForm';

const AddAssetPage = () => {
  const router = useRouter();

  const handleSubmitForm = async (formData) => {
    const result = await AssetAPI.addAsset(formData);

    if (result) {
      router.push('/admin/assets?success=true');
    }
  };
  return <InputAssetForm onFormSubmit={handleSubmitForm} />;
};

export default AddAssetPage;
