import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDevice } from '../redux/deviceSlice';
import {
  TextField,
  Button,
  MenuItem,
  Typography,
  Box,
} from '@mui/material';

const InstallationForm = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    id: '',
    type: '',
    facility: '',
    status: 'Online',
    battery: '',
    lastService: '',
    amcStatus: 'Active',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.id || !form.type || !form.facility) {
      alert("Please fill in all required fields.");
      return;
    }

    dispatch(addDevice(form));
    alert("Device added successfully!");

    // Reset the form
    setForm({
      id: '',
      type: '',
      facility: '',
      status: 'Online',
      battery: '',
      lastService: '',
      amcStatus: 'Active',
    });
  };

 return (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
    }}
  >
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 400,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        padding: 3,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: '#ffffff',
      }}
    >
      <Typography variant="h6" align="center">
        Add New Device Installation
      </Typography>

      <TextField label="Device ID" name="id" value={form.id} onChange={handleChange} required />
      <TextField label="Device Type" name="type" value={form.type} onChange={handleChange} required />
      <TextField label="Facility Name" name="facility" value={form.facility} onChange={handleChange} required />

      <TextField
        select
        label="Status"
        name="status"
        value={form.status}
        onChange={handleChange}
      >
        <MenuItem value="Online">Online</MenuItem>
        <MenuItem value="Offline">Offline</MenuItem>
        <MenuItem value="Maintenance">Maintenance</MenuItem>
      </TextField>

      <TextField
        label="Battery Percentage"
        name="battery"
        value={form.battery}
        type="number"
        onChange={handleChange}
      />

      <TextField
        label="Last Service Date"
        name="lastService"
        type="date"
        value={form.lastService}
        InputLabelProps={{ shrink: true }}
        onChange={handleChange}
      />

      <TextField
        select
        label="AMC/CMC Status"
        name="amcStatus"
        value={form.amcStatus}
        onChange={handleChange}
      >
        <MenuItem value="Active">Active</MenuItem>
        <MenuItem value="Expired">Expired</MenuItem>
      </TextField>

      <Button variant="contained" type="submit" fullWidth>
        Submit
      </Button>
    </Box>
  </Box>
);

};

export default InstallationForm;
