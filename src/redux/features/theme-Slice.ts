import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isDark: false,
};

export const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isDark = !state.isDark;
    },
  },
});

export const { toggle } = theme.actions;
export default theme.reducer;
