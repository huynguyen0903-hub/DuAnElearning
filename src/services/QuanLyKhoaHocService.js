import { baseService } from "./baseService";
import {GROUPID} from '../ulti/setting'
export class QuanLyKhoaHocService extends baseService{

    constructor(){
        super();
    }

    themKhoaHocUploadHinh = (formData) => {
        return this.post(`/api/QuanLyKhoaHoc/ThemKhoaHocUploadHinh`,formData);
    }

    layDanhSachKhoaHoc = () => {
        return this.get(`/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${GROUPID}`);
    }

    layThongTinKhoaHoc = (maKhoaHoc) => {
        return this.get(`/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`)
    }
}

export const quanLyKhoaHocService = new QuanLyKhoaHocService();