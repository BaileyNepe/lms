import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const menu = createSlice({
  name: "menu",
  initialState: {
    selectedItem: ["dashboard"],
    drawerOpen: true,
  },
  reducers: {
    activeItem(state, action: PayloadAction<string[]>) {
      state.selectedItem = action.payload;
    },

    openDrawer(state, action: PayloadAction<boolean>) {
      state.drawerOpen = action.payload;
    },
  },
});

export default menu.reducer;

export const { activeItem, openDrawer } = menu.actions;
