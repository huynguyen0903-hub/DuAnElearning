import { configureStore } from "@reduxjs/toolkit";
import { QuanLyKhoaHocReducer } from "./reducers/QuanLyKhoaHocReducer";
export const store = configureStore({
  reducer: {
    
    QuanLyKhoaHocReducer
  },
});
