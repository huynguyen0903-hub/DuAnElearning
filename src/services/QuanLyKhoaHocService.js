import { baseService } from "./baseService";
import {GROUPID} from '../ulti/setting'
export class QuanLyKhoaHocService extends baseService{

    constructor(){
        super();
    }

    themKhoaHocUploadHinh = (formData) => {
        return this.post(`/api/QuanLyKhoaHoc/ThemKhoaHocUploadHinh`,formData);
    }

    layDanhSachKhoaHoc = (tenKhoaHoc='') => {
        if(tenKhoaHoc.trim() !=''){
            return this.get(`/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${GROUPID}&tenKhoaHoc=${tenKhoaHoc}`)
        }
        return this.get(`/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${GROUPID}`);
    }

    layThongTinKhoaHoc = (maKhoaHoc) => {
        return this.get(`/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`)
    }

    capNhatKhoaHocUpload = (formData) => {
        return this.post(`/api/QuanLyKhoaHoc/CapNhatKhoaHocUpload`,formData)
    }

    xoaKhoaHoc = (maKhoaHoc) => {
        return this.delete(`/api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKhoaHoc}`);
    }
}

export const quanLyKhoaHocService = new QuanLyKhoaHocService();