import { quanLyKhoaHocService } from "../../services/QuanLyKhoaHocService"
import { SET_DANH_SACH_KHOA_HOC, SET_THONG_TIN_KHOA_HOC } from "./types/QuanLyKhoaHocType";
import {history} from "../../App"

export const  layDanhSachKhoaHocAction = (tenKhoaHoc='') => {
    return async (dispatch) => {
        try {
            const result = await quanLyKhoaHocService.layDanhSachKhoaHoc(tenKhoaHoc);

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
    return async (dispatch) => {
        try{
            let result = await quanLyKhoaHocService.themKhoaHocUploadHinh(formData);
            alert('Thêm khóa học thành công')
            console.log('result', result.data)
        }catch(errors){
            console.log(errors.response?.data)
        }
    }
}

export const capNhatKhoaHocUploadAction = (formData) => {
    return async (dispatch) => {
        try{
            let result = await quanLyKhoaHocService.capNhatKhoaHocUpload(formData);
            alert('Cập nhật khóa học thành công')
            console.log('result', result.data)
        }catch(errors){
            console.log(errors.response?.data)
        }
    }
}



export const layThongTinKhoaHocAction = (maKhoaHoc) => {
    return async (dispatch) => {
        try {
            const result = await quanLyKhoaHocService.layThongTinKhoaHoc(maKhoaHoc);
            
         console.log( result.data)

            dispatch({
                type:SET_THONG_TIN_KHOA_HOC,
                thongTinKhoaHoc: result.data
            })

        } catch (errors) {
            console.log('errors', errors)
        }   
    }
}

export const xoaKhoaHocAction = (maKhoaHoc) => {
    return async (dispatch) => {
        try {
            const result = await quanLyKhoaHocService.xoaKhoaHoc(maKhoaHoc);
            console.log('result', result.data.content)
            alert('Xóa thành công khóa học !')
            dispatch(layDanhSachKhoaHocAction())
        } catch (errors) {
            console.log('errors', errors.response?.data)
        }
    }
}

