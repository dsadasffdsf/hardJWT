import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Alert, AlertState } from '../../modules/alertModel/IAlert';



const initialState: AlertState = {
  alertList: [],
};

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    addAlert: (state, action: PayloadAction<Alert>) => {
      state.alertList.push({
        message: action.payload.message,
        alertType: action.payload.alertType,
        visible: action.payload.visible ?? true, // Default to true if not provided
      });
    },
    remAlert: (state) => {
      state.alertList.shift();
    },
  },
});

export const { addAlert, remAlert } = alertSlice.actions;
export default alertSlice.reducer;
