import { SET_DANH_SACH_KHOA_HOC, SET_THONG_TIN_KHOA_HOC } from "../actions/types/QuanLyKhoaHocType"

const stateDefault = {
    arrCourse:[
        {
            "maKhoaHoc": "ITEC 2117",
            "biDanh": "lap-trinh-du-lieu-sql",
            "tenKhoaHoc": "Lập Trình Dữ Liệu SQL",
            "moTa": "SQL là gì? SQL là viết tắt của Structured Query Language, nghĩa là ngôn ngữ truy vấn dữ liệu. Có thể coi ngôn ngữ SQL là ngôn ngữ chung mà bất cứ hệ thống cơ sở dữ liệu quan hệ (RDBMS) nào cũng phải đáp ứng, điển hình như: Oracle Database, SQL Server, MySQL…\n\nBất kì công ty nào lớn cũng cần xây dựng một hệ thống để lưu trữ cơ sở dữ liệu. Mọi thứ trong cơ sở dữ liệu này sẽ được quy ra thành nhiều bảng, có mối quan hệ với nhau. SQL giúp quản lý hiệu quả và truy vấn thông tin nhanh hơn, giúp bảo trì thông tin dễ dàng hơn.",
            "luotXem": 100,
            "hinhAnh": "https://elearning0706.cybersoft.edu.vn/hinhanh/lap-trinh-du-lieu-sql.JPG",
            "maNhom": "GP01",
            "ngayTao": "19/08/2021",
            "soLuongHocVien": 0,
            "nguoiTao": {
              "taiKhoan": "dpnguyen",
              "hoTen": "le quang anh ",
              "maLoaiNguoiDung": "GV",
              "tenLoaiNguoiDung": "Giáo vụ"
            },
            "danhMucKhoaHoc": {
              "maDanhMucKhoahoc": "BackEnd",
              "tenDanhMucKhoaHoc": "Lập trình Backend"
            }
          }

    ],
    arrCourseDefault:{},

    thongTinKhoaHoc:{}
}

export const QuanLyKhoaHocReducer = (state =stateDefault,action) => {
    switch(action.type) {
        case SET_DANH_SACH_KHOA_HOC: {
            state.arrCourse = action.arrCourse;
            return {...state}
        }
        case SET_THONG_TIN_KHOA_HOC: {
          state.thongTinKhoaHoc = action.thongTinKhoaHoc;
          return {...state}
        }

        default : return {...state}
    }
}