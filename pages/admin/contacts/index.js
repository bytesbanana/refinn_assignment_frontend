import {
  Badge,
  Box,
  Button,
  Card,
  Chip,
  Dialog,
  DialogTitle,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  Modal,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import Sidebar from '../../../components/admin/Sidebar';
import useIsMounted from '../../../hooks/useIsMounted';
import ContactsAPI from '../../../libs/api/ContactsAPI';
import { CONTACT_STATUSES, CONTACT_STATUS_COLOR } from '../../../utils/constant';

const ContactList = () => {
  const isMounted = useIsMounted();
  const [loading, setLoading] = useState(true);
  const [paginateContacts, setPaginateContacts] = useState({
    page: 1,
    size: 25,
    total: 0,
    totalPage: 0,
    contacts: [],
  });
  const [contactToManage, setContactToManage] = useState(null);

  const fetchContacts = async (page = 1, size = 25) => {
    setLoading(true);
    try {
      const data = await ContactsAPI.fetchContacts(page, size);
      setPaginateContacts(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isMounted()) return;
    fetchContacts();
  }, [isMounted]);

  const handlePageChange = async (_, newPage) => {
    setPaginateContacts((p) => ({ ...p, page: newPage + 1 }));
    fetchContacts(newPage + 1, paginateContacts?.size);
  };

  const handleRowsPerPageChange = async (e) => {
    setPaginateContacts((p) => {
      fetchContacts(p.page, +e.target.value);
      return { ...p, size: +e.target.value };
    });
  };

  const handleUpdateContact = async (contact) => {
    const result = await ContactsAPI.updateContact({
      ...contact,
      assetId: contact?.asset?.id,
    });
    if (result) {
      fetchContacts(paginateContacts.page, paginateContacts.size)
      setContactToManage(null);
    }
  };

  return (
    <Box className='flex'>
      <Sidebar />
      <Box className='w-full p-4'>
        {!loading && (
          <TableContainer component={Paper} className='max-h-[calc(100vh-150px)]'>
            <TablePagination
              rowsPerPageOptions={[10, 25, 50, 100]}
              component='div'
              count={paginateContacts?.total || 0}
              rowsPerPage={paginateContacts?.size}
              page={paginateContacts?.page - 1}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
            />
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell className='font-semibold'>ID</TableCell>
                  <TableCell className='font-semibold'>Name</TableCell>
                  <TableCell className='font-semibold'>Tel no.</TableCell>
                  <TableCell className='font-semibold w-[120px]'>Line ID</TableCell>
                  <TableCell className='font-semibold w-[120px]'>Status</TableCell>
                  <TableCell className='font-semibold w-[120px]'></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginateContacts.contacts.map((contact) => (
                  <TableRow key={`${contact.id}`} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component='th' scope='row'>
                      {contact.id}
                    </TableCell>
                    <TableCell>{contact.name}</TableCell>
                    <TableCell>{contact.telNo}</TableCell>
                    <TableCell>{contact.lineId || '-'}</TableCell>
                    <TableCell className='font-semibold w-[120px]'>
                      <Chip label={contact.status} color={CONTACT_STATUS_COLOR[contact.status]} size='small' />
                    </TableCell>
                    <TableCell className='flex justify-end gap-2'>
                      <Button variant='contained' onClick={() => setContactToManage(contact)}>
                        Manage
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        <Modal open={!!contactToManage} onClose={() => {}}>
          <Box
            className='w-[30%] max-w-[300px] absolute top-[40%] left-[50%] border-solid select-none'
            style={{ transform: 'translate(-50%, -50%)' }}
          >
            <Card className='p-4'>
              <Typography variant='h1' className='text-xl font-semibold'>
                Manage contact
              </Typography>

              <Divider />
              <Box className='flex flex-col gap-2 py-2'>
                <Typography className='inline-flex gap-2 text-slate-400'>
                  ID:
                  <span className='text-black'>{contactToManage?.id}</span>
                </Typography>
                <Typography className='inline-flex gap-2 text-slate-400'>
                  name:
                  <span className='text-black'>{contactToManage?.name}</span>
                </Typography>
                <Typography className='inline-flex gap-2 text-slate-400'>
                  {`Tel no: ${contactToManage?.telNo}`}
                  <span className='text-black'>{contactToManage?.telNo}</span>
                </Typography>
                <Typography className='inline-flex gap-2 text-slate-400'>
                  Line ID:
                  <span className='text-black'>{contactToManage?.lineId || '-'}</span>
                </Typography>
                <Box className='inline-flex items-center gap-2'>
                  <Typography className='inline-flex gap-2 text-slate-400'>{`Status: `}</Typography>
                  <FormControl className='flex-1'>
                    <Select
                      onChange={(e) =>
                        setContactToManage((p) => ({
                          ...p,
                          status: e.target.value,
                        }))
                      }
                      size='small'
                      value={contactToManage?.status}
                    >
                      {Object.keys(CONTACT_STATUSES).map((key) => (
                        <MenuItem key={key} value={key}>
                          {CONTACT_STATUSES[key]}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
                <Typography className='inline-flex gap-2 text-slate-400'>
                  Callback time:
                  <span className='text-black'>
                    {contactToManage?.callBackTime
                      ? dayjs(contactToManage?.callBackTime).format('DD/MM/YYY hh:mm')
                      : '-'}
                  </span>
                </Typography>
                <Typography className='inline-flex gap-2 text-slate-400'>
                  Submitted when:
                  <span className='text-black'>
                    {contactToManage?.createdAt ? dayjs(contactToManage?.createdAt).format('DD/MM/YYY hh:mm') : '-'}
                  </span>
                </Typography>
                <Typography className='inline-flex gap-2 text-slate-400'>
                  Last updated:
                  <span className='text-black'>
                    {contactToManage?.lastModifiedAt
                      ? dayjs(contactToManage?.lastModifiedAt).format('DD/MM/YYYY hh:mm')
                      : '-'}
                  </span>
                </Typography>
                <Link href={`/admin/assets/${contactToManage?.asset?.id}`} target='_blank'>
                  <Button className='w-fit'>
                    <OpenInNewIcon /> Watch asset detail
                  </Button>
                </Link>
                <Box className='inline-flex justify-end gap-2'>
                  <Button variant='contained' onClick={() => handleUpdateContact(contactToManage)}>
                    Update
                  </Button>
                  <Button
                    className='text-red-400 hover:bg-red-100 hover:text-red-700'
                    onClick={() => setContactToManage(null)}
                  >
                    Cancel
                  </Button>
                </Box>
              </Box>
            </Card>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default ContactList;
