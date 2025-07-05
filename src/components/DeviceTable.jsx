import React from 'react';
import { useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography, Button } from '@mui/material';

export default function DeviceTable() {
  const devices = useSelector((state) => state.device.devices);

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'type', headerName: 'Type', width: 130 },
    { field: 'facility', headerName: 'Facility', width: 150 },
    { field: 'status', headerName: 'Status', width: 130 },
    { field: 'battery', headerName: 'Battery %', width: 130 },
    { field: 'lastService', headerName: 'Last Service Date', width: 160 },
    { field: 'amcStatus', headerName: 'AMC/CMC', width: 130 },
  ];

  const exportToCSV = () => {
    if (!devices.length) {
      alert("No device data to export.");
      return;
    }

    const headers = Object.keys(devices[0]);
    const csvRows = [
      headers.join(','), // header row
      ...devices.map(device =>
        headers.map(header => JSON.stringify(device[header] || '')).join(',')
      ),
    ];

    const csvContent = csvRows.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'devices_report.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box
      sx={{
        width: '90%',
        maxWidth: 1000,
        mt: 5,
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h6" gutterBottom align="center">
        Device Inventory Table
      </Typography>

      <Button variant="outlined" onClick={exportToCSV} sx={{ mb: 2 }}>
        Export Devices as CSV
      </Button>

      <DataGrid
        rows={devices}
        columns={columns}
        autoHeight
        pageSize={5}
        rowsPerPageOptions={[5, 10]}
        getRowId={(row) => row.id}
        getRowClassName={(params) =>
          params.row.amcStatus === 'Expired' ? 'expired' : ''
        }
        sx={{
          '& .expired': {
            backgroundColor: '#ffe6e6',
            color: '#b30000',
            fontWeight: 'bold',
          },
        }}
      />
    </Box>
  );
}
