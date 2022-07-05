import { configureStore } from "@reduxjs/toolkit";
import { QuanLyKhoaHocReducer } from "./reducers/QuanLyKhoaHocReducer";
import { QuanLyNguoiDungReducer } from "./reducers/QuanLyNguoiDungReducer";
export const store = configureStore({
  reducer: {
    
    QuanLyKhoaHocReducer,
    QuanLyNguoiDungReducer
  },
});
