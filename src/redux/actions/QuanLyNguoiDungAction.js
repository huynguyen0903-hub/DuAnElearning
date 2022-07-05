import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService";
import { SET_DANH_SACH_NGUOI_DUNG, SET_THONG_TIN_NGUOI_DUNG } from "./types/QuanLyNguoiDungType";

export const layDanhSachNguoiDungAction = (tuKhoa = "") => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.layDanhSachNguoiDung(tuKhoa);

      dispatch({
        type: SET_DANH_SACH_NGUOI_DUNG,
        arrUser: result.data,
      });
    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
  };
};

export const themNguoiDungAction = (nd) => {
  console.log(nd);
  return async (dispatch) => {
    try {
      let result = await quanLyNguoiDungService.themNguoiDung(nd);
      alert("Thêm người dùng thành công");
      console.log("result", result.data);
    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
  };
};
export const capNhatThongTinNguoiDungAction = (nd) => {
  return async (dispatch) => {
    try {
      let result = await quanLyNguoiDungService.capNhatThongTinNguoiDung(nd);
      alert('Cập nhật người dùng thành công')
      console.log('result', result.data)  
    } catch (errors) {
      console.log(errors.response?.data);
    }
  };
};

export const timKiemNguoiDungAction = (tuKhoa) => {
  return async (dispatch) => {
    try {
      let result = await quanLyNguoiDungService.timKiemNguoiDung(tuKhoa)
      console.log( result.data)
      dispatch({
        type: SET_THONG_TIN_NGUOI_DUNG,
        thongTinNguoiDung: result.data,
      });
    } catch (errors) {
      console.log(errors)
    }
  }
}

export const xoaNguoiDungAction = (TaiKhoan) => {
  return async(dispatch)=> {
    try {
      const result = await quanLyNguoiDungService.xoaNguoiDung(TaiKhoan);
      console.log('result', result.data)
      alert('Xóa thành công người dùng !')
      dispatch(layDanhSachNguoiDungAction())
    } catch (errors) {
      console.log('errors', errors.response?.data)
    }
  }
}