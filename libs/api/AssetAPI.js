const AssetAPI = {
  fetchAssets: async (page = 1, size = 10, min, max, assetType = '') => {
    let tempAssetType = assetType;
    if (assetType?.toUpperCase("ANY")) {
      tempAssetType = ''
    }
    let queryString = '';
    if (min) queryString += `&min=${min}`;
    if (max) queryString += `&max=${max}`;
    if (tempAssetType) queryString += `&assetType=${assetType}`;

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/assets?page=${page}&size=${size}${queryString}`);
    if (!response.ok) return;
    return await response.json();
  },
  fetchAsset: async (assetId) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/assets/${assetId}`);
    if (!response.ok) return;
    return await response.json();
  },
  addAsset: async (asset) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/assets`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(asset),
    });

    if (!response.ok) return;
    const data = await response.json();

    return data;
  },
  updateAsset: async (asset) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/assets/${asset.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(asset),
    });

    if (!response.ok) return;
    const data = await response.json();

    return data;
  },
  deleteAsset: async (assetId) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/assets/${assetId}`, {
      method: 'DELETE',
    });
    if (!response.ok) return false;
    return true;
  },
};

export default AssetAPI;
