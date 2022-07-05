import {
  SET_DANH_SACH_NGUOI_DUNG,
  SET_THONG_TIN_NGUOI_DUNG,
} from "../actions/types/QuanLyNguoiDungType";

const stateDefault = {
  arrUser: [
    {
      taiKhoan: "123",
      hoTen: "leleloinuoc",
      email: "asdfasdf@gmail.com",
      soDT: "123123",
      matKhau: "123123",
      maLoaiNguoiDung: "GV",
      tenLoaiNguoiDung: "Giáo vụ",
    },
  ],
  arrUserDefault: [],
  thongTinNguoiDung: {},
};

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_DANH_SACH_NGUOI_DUNG: {
      state.arrUser = action.arrUser;
      state.arrUserDefault = state.arrUser;
      return { ...state };
    }
    case SET_THONG_TIN_NGUOI_DUNG: {
      state.thongTinNguoiDung = action.thongTinNguoiDung;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
