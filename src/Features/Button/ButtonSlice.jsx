import { createSlice } from '@reduxjs/toolkit';



const buttonsSlice = createSlice({
  name: 'buttons',
  initialState: {},
  reducers: {
    updateClickCount: (state, action) => {
      const { buttonName } = action.payload;
      state[buttonName] = (state[buttonName] || 0) + 1;
    },
  },
});

export const { updateClickCount } = buttonsSlice.actions;

export default buttonsSlice.reducer;