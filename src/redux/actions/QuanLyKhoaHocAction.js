import { quanLyKhoaHocService } from "../../services/QuanLyKhoaHocService"
import { SET_DANH_SACH_KHOA_HOC, SET_THONG_TIN_KHOA_HOC } from "./types/QuanLyKhoaHocType";


export const  layDanhSachKhoaHocAction = () => {
    return async (dispatch) => {
        try {
            const result = await quanLyKhoaHocService.layDanhSachKhoaHoc();

            dispatch({
                type: SET_DANH_SACH_KHOA_HOC,
                arrCourse: result.data
            })
        } catch (errors) {
            console.log('errors', errors.response?.data)
        }   
    }
}

export const themKhoaHocUploadHinhAction = (formData) => {
    console.log('first')
    return async (dispatch) => {
        try{
            let result = await quanLyKhoaHocService.themKhoaHocUploadHinh(formData);
            alert('Thêm khóa học thành công')
            console.log('result', result.data.content)
        }catch(errors){
            console.log(errors.response?.data)
        }
    }
}

export const layThongTinKhoaHocAction = (maKhoaHoc) => {
    return async (dispatch) => {
        try {
            const result = await quanLyKhoaHocService.layThongTinKhoaHoc(maKhoaHoc);

           console.log(result.data.content)
           dispatch({
            type:SET_THONG_TIN_KHOA_HOC,
            thongTinKhoaHoc: result.data.content
           })
        } catch (errors) {
            console.log('errors', errors)
        }   
    }
}