import { baseService } from "./baseService";
import { GROUPID } from "../ulti/setting";
export class QuanLyNguoiDungService extends baseService {
  constructor() {
    super();
  }

  layDanhSachNguoiDung = (tuKhoa = "") => {
    if (tuKhoa.trim() != ""){
        return this.get(
            `/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}&tuKhoa=${tuKhoa}`
          ); 
    }
    return this.get(
      `/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}`
    );
  };

  themNguoiDung = (nd) => {
    return this.post(`api/QuanLyNguoiDung/ThemNguoiDung`,nd);
  };
  capNhatThongTinNguoiDung = (nd) => {
    return this.put(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,{...nd,"maNhom":GROUPID})
  }
  timKiemNguoiDung = (tuKhoa) => {
    return this.get(`/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${GROUPID}&tuKhoa=${tuKhoa}`)
  }
  xoaNguoiDung = (TaiKhoan) => {
    return this.delete(`/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${TaiKhoan}`)
  }
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();
