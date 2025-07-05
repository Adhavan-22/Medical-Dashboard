import React, { useState } from 'react';
import InstallationForm from './components/InstallationForm';
import DeviceTable from './components/DeviceTable';
import AMCTracker from './components/AMCTracker';
import AlertLogForm from './components/AlertLogForm';
import { Box, Button } from '@mui/material';

function App({ togglemode, mode }) {
  const [role, setRole] = useState('Admin'); // Default role

  return (
    <Box sx={{ maxWidth: 1000, margin: '0 auto', padding: '2rem' }}>
      {/* Theme Toggle Button */}
      <Button
        variant="outlined"
        onClick={togglemode}
        sx={{
          position: 'absolute',
          top: 20,
          right: 20,
        }}
      >
        Switch to {mode === 'light' ? 'Dark' : 'Light'} Mode
      </Button>

      <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>
        Medical Device Admin Dashboard
      </h1>

      <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
        <label>Select Role: </label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="Admin">Admin</option>
          <option value="Technician">Technician</option>
        </select>
      </div>

      {role === 'Admin' && (
        <>
          <InstallationForm />
          <DeviceTable />
          <AMCTracker />
          <AlertLogForm />
        </>
      )}

      {role === 'Technician' && (
        <>
          <InstallationForm />
          <AlertLogForm />
        </>
      )}
    </Box>
  );
}

export default App;
