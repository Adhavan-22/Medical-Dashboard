import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  MenuItem,
  InputLabel,
} from '@mui/material';
import { useSelector } from 'react-redux';

const AlertLogForm = () => {
  const devices = useSelector((state) => state.device.devices);

  const [form, setForm] = useState({
    deviceId: '',
    alertNote: '',
    file: null,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setForm({ ...form, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.deviceId || !form.alertNote || !form.file) {
      alert('Please fill in all fields and upload a photo.');
      return;
    }

    console.log('Alert Log:', form);
    alert('Alert logged successfully!');

    setForm({
      deviceId: '',
      alertNote: '',
      file: null,
    });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 500,
        mt: 6,
        mx: 'auto',
        display: 'grid',
        gap: 2,
      }}
    >
      <Typography variant="h6" align="center">
        Log Alert with Photo
      </Typography>

      <TextField
        select
        label="Device ID"
        name="deviceId"
        value={form.deviceId}
        onChange={handleChange}
        required
      >
        {devices.map((device) => (
          <MenuItem key={device.id} value={device.id}>
            {device.id}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        label="Alert Description"
        name="alertNote"
        multiline
        minRows={3}
        value={form.alertNote}
        onChange={handleChange}
        required
      />

      <InputLabel>Upload Photo</InputLabel>
      <input type="file" accept="image/*" onChange={handleFileChange} required />

      <Button type="submit" variant="contained">
        Submit Alert
      </Button>
    </Box>
  );
};

export default AlertLogForm;
