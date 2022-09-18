import { useEffect, useRef, useState } from 'react';
import { Box, CircularProgress, Pagination } from '@mui/material';

import SearchForm from '../components/SearchForm';
import AssetCardList from '../components/AssetCardList';
import useIsMounted from '../hooks/useIsMounted';

const LoaderCircle = () => (
  <Box className='w-full h-[calc(100vh-48px)] flex justify-center items-center'>
    <CircularProgress className='' size={100} />
  </Box>
);

export default function HomePage() {
  const assetCardListHolderRef = useRef();
  const [loading, setLoading] = useState(false);
  const isMounted = useIsMounted();
  const [assets, setAssets] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({});

  const fetchAssets = async (page = 1, size = 10, min, max, assetType) => {
    setLoading(true);
    let queryString = '';
    if (min) queryString += `&min=${min}`;
    if (max) queryString += `&max=${max}`;
    if (assetType) queryString += `&assetType=${assetType}`;

    try {
      const response = await fetch(`http://localhost:8080/api/v1/assets?page=${page}&size=${size}${queryString}`);
      if (!response.ok) return;
      const data = await response.json();
      setAssets(data.assets);
      setTotalPage(data.totalPage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isMounted()) return;
    fetchAssets(currentPage);
  }, [isMounted]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // for smoothly scrolling
    });
  };

  const handleSearchAssets = (formData) => {
    setFormData(formData);
    const { displayPerPage, min, max, assetType } = formData;
    fetchAssets(currentPage, displayPerPage, min, max, assetType);
  };

  return (
    <Box>
      <SearchForm
        className='py-4 flex flex-col px-4 rounded-b-md border-solid border-[1px] border-t-0 border-slate-200 drop-shadow-md md:hidden'
        onSearchClick={handleSearchAssets}
      />

      <Box className='flex'>
        <SearchForm
          className='w-[375px] h-100 hidden md:flex md:flex-col md:gap-2 p-4'
          onSearchClick={handleSearchAssets}
        />

        <Box className='inline-flex flex-col items-center gap-2 pb-8 w-full min-h-[100px]' ref={assetCardListHolderRef}>
          {loading && <LoaderCircle />}
          {!loading && <AssetCardList assets={assets} />}

          {totalPage > 0 && (
            <Pagination
              count={totalPage}
              color='primary'
              onChange={(event, newPageNo) => {
                scrollToTop();
                setCurrentPage(newPageNo);
                const { displayPerPage, min, max, assetType } = formData;
                fetchAssets(newPageNo, displayPerPage, min, max, assetType);
              }}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
}
