import React, { useState } from 'react';
import {
  TablePagination,
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContentText,
  DialogContent,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';

import AssetAPI from '../../../libs/api/AssetAPI';
import useIsMounted from '../../../hooks/useIsMounted';
import Sidebar from '../../../components/admin/Sidebar';
import { useEffect } from 'react';
import Link from 'next/link';

const ManageAssetPage = () => {
  const isMounted = useIsMounted();
  const [loading, setLoading] = useState(true);
  const [paginateAssets, setPaginateAssets] = useState({
    page: 1,
    size: 25,
    total: 0,
    totalPage: 0,
    assets: [],
  });
  const [assetToDelete, setAssetToDelete] = useState();
  const [deletingAsset, setDeletingAsset] = useState(false);

  const fetchAssets = async (page = 1, size = 25) => {
    setLoading(true);
    try {
      const data = await AssetAPI.fetchAssets(page, size);
      setPaginateAssets(data);
      console.log(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isMounted()) return;
    fetchAssets();
  }, [isMounted]);

  const handleDeleteModalSubmit = async (asset) => {
    setDeletingAsset(true);
    try {
      const result = await AssetAPI.deleteAsset(asset.id);
      if (result) {
        fetchAssets();
      }
    } finally {
      setAssetToDelete(null);
      setDeletingAsset(false);
    }
  };

  const handlePageChange = async (_, newPage) => {
    setPaginateAssets((p) => ({ ...p, page: newPage + 1 }));
    fetchAssets(newPage + 1, paginateAssets.size);
  };

  const handleRowsPerPageChange = async (e) => {
    setPaginateAssets((p) => {
      fetchAssets(p.page, +e.target.value);
      return { ...p, size: +e.target.value };
    });
  };

  return (
    <Box className='flex'>
      <Sidebar />
      <Box className='w-full p-4'>
        <Box className='inline-flex justify-end w-full p-1'>
          <Link href={'/admin/assets/add'}>
            <Button variant='contained'>
              <AddIcon />
              Add asset
            </Button>
          </Link>
        </Box>
        {!loading && (
          <TableContainer component={Paper} className='max-h-[calc(100vh-150px)]'>
            <TablePagination
              rowsPerPageOptions={[10, 25, 50, 100]}
              component='div'
              count={paginateAssets?.total || 0}
              rowsPerPage={paginateAssets.size}
              page={paginateAssets.page - 1}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
            />
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell className='font-semibold'>ID</TableCell>
                  <TableCell className='font-semibold'>Title</TableCell>
                  <TableCell className='font-semibold'>Description</TableCell>
                  <TableCell className='font-semibold w-[120px]'>Type</TableCell>
                  <TableCell className='font-semibold w-[120px]'></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginateAssets.assets.map((asset) => (
                  <TableRow key={`${asset.id}`} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component='th' scope='row'>
                      {asset.id}
                    </TableCell>
                    <TableCell>{asset.title}</TableCell>
                    <TableCell>{asset.description ? asset.description : '-'}</TableCell>
                    <TableCell>{asset.assetType}</TableCell>
                    <TableCell className='flex justify-end gap-2'>
                      <Link href={`/admin/assets/${asset.id}`}>
                        <Button className='text-gray-500'>
                          <VisibilityIcon /> View
                        </Button>
                      </Link>
                      <Link href={`/admin/assets/${asset.id}/edit`}>
                        <Button>
                          <EditIcon /> Edit
                        </Button>
                      </Link>
                      <Button
                        className='text-red-400 hover:text-white hover:bg-red-400'
                        onClick={() => setAssetToDelete(asset)}
                      >
                        <DeleteIcon /> Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        <Dialog open={!!assetToDelete}>
          <DialogTitle>Do you really want to delete this asset?</DialogTitle>
          <DialogContent>
            <DialogContentText>It cannot not be reversible.</DialogContentText>
            <Box>
              <Typography>Asset ID: {assetToDelete?.id}</Typography>
              <Typography>Title: {assetToDelete?.title}</Typography>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => handleDeleteModalSubmit(assetToDelete)}
              className='text-white bg-red-500 hover:bg-red-700 disabled:bg-gray-500 disabled:text-white'
              disabled={!!deletingAsset}
            >
              Delete
            </Button>
            <Button onClick={() => setAssetToDelete(null)} autoFocus>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default ManageAssetPage;
