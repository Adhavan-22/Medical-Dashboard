import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  devices: JSON.parse(localStorage.getItem('devices')) || [],
};

const deviceSlice = createSlice({
  name: 'device',
  initialState,
  reducers: {
    addDevice: (state, action) => {
      state.devices.push(action.payload);
      localStorage.setItem('devices', JSON.stringify(state.devices));
    },
  },
});

export const { addDevice } = deviceSlice.actions;
export default deviceSlice.reducer;
