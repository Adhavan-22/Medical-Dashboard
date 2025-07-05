import React from 'react';
import { useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';

const AMCTracker = () => {
  const devices = useSelector((state) => state.device.devices);
  const expiredDevices = devices.filter((device) => device.amcStatus === 'Expired');

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'type', headerName: 'Type', width: 130 },
    { field: 'facility', headerName: 'Facility', width: 150 },
    { field: 'status', headerName: 'Status', width: 130 },
    { field: 'lastService', headerName: 'Last Service Date', width: 160 },
    { field: 'amcStatus', headerName: 'AMC/CMC', width: 130 },
  ];

  return (
    <Box
      sx={{
        width: '90%',
        maxWidth: 1000,
        mt: 6,
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h6" align="center" gutterBottom>
        Expired AMC/CMC Devices
      </Typography>

      <DataGrid
        rows={expiredDevices}
        columns={columns}
        autoHeight
        pageSize={5}
        rowsPerPageOptions={[5, 10]}
        getRowId={(row) => row.id}
        sx={{
          '& .MuiDataGrid-row': {
            backgroundColor: '#fff5f5',
          },
        }}
      />
    </Box>
  );
};

export default AMCTracker;
