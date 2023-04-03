import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type MenuProps = {
  selectedItem: string[];
  drawerOpen: boolean;
};

// initial state
const initialState: MenuProps = {
  selectedItem: ["dashboard"],
  drawerOpen: true,
};

// ==============================|| SLICE - MENU ||============================== //

const menu = createSlice({
  name: "menu",
  initialState,
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
