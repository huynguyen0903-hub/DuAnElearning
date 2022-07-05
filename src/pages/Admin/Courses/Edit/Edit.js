import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from "antd";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
  capNhatKhoaHocUploadAction,
  layThongTinKhoaHocAction,
  themKhoaHocUploadHinhAction,
} from "../../../../redux/actions/QuanLyKhoaHocAction";
import { GROUPID } from "../../../../ulti/setting";
const Edit = (props) => {
  const [componentSize, setComponentSize] = useState("default");
  const { thongTinKhoaHoc } = useSelector(
    (state) => state.QuanLyKhoaHocReducer
  );

  console.log("thongTinKhoaHoc", thongTinKhoaHoc);
  const [imgSrc, setImgSrc] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    let { id } = props.match.params;

    dispatch(layThongTinKhoaHocAction(id));
  }, []);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maKhoaHoc: thongTinKhoaHoc.maKhoaHoc,
      tenKhoaHoc: thongTinKhoaHoc.tenKhoaHoc,
      moTa: thongTinKhoaHoc.moTa,
      luotXem: thongTinKhoaHoc.luotXem,
      hinhAnh: null,
      maNhom: thongTinKhoaHoc.maNhom,
      ngayTao: thongTinKhoaHoc.ngayTao,
      // optional chaining
      maDanhMucKhoahoc: thongTinKhoaHoc.danhMucKhoaHoc?.maDanhMucKhoahoc,
      taiKhoanNguoiTao: thongTinKhoaHoc.nguoiTao?.taiKhoan,
    },
    onSubmit: (values) => {
      console.log("values", values);
      //Tạo đối tượng formdata
      let formData = new FormData();

      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          if (values['hinhAnh'] !== null) {
            formData.append("File", values['hinhAnh'], values['hinhAnh'].name);
          }
        }
      }
      dispatch(capNhatKhoaHocUploadAction(formData));
    },
  });

  const handleChangeDatePicker = (value) => {
    let ngayTao = moment(value);
    formik.setFieldValue("ngayTao", ngayTao);
  };
  const handleChangeInputNumber = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeFile = async (e) => {
    //Lấy file ra từ e
    let file = e.target.files[0];
    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/gif" ||
      file.type === "image/png"
    ) {
      //đem dữ liệu file lưu vào formik
      await formik.setFieldValue("hinhAnh", file);
      //tạo đôi tượng để đọc file

      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        // console.log(e.target.result);
        setImgSrc(e.target.result);
      };
    }
  };

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <>
      <Form
        onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <h3>Thêm mới khóa học</h3>
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Tên khóa học">
          <Input
            style={{ width: 360 }}
            name="tenKhoaHoc"
            onChange={formik.handleChange}
            value={formik.values.tenKhoaHoc}
          />
        </Form.Item>
        <Form.Item label="Mô tả">
          <Input.TextArea
            name="moTa"
            onChange={formik.handleChange}
            value={formik.values.moTa}
          />
        </Form.Item>
        <Form.Item label="Lượt xem">
          <InputNumber
            onChange={handleChangeInputNumber("luotXem")}
            value={formik.values.luotXem}
          />
        </Form.Item>
        <Form.Item label="Mã nhóm">
          <Input
            style={{ width: 160 }}
            name="maNhom"
            onChange={formik.handleChange}
            value={formik.values.maNhom}
          />
        </Form.Item>
        <Form.Item label="Ngày tạo">
          <DatePicker
            onChange={handleChangeDatePicker}
            format={"DD/MM/YYYY"}
            value={moment(formik.values.ngayTao, "DD/MM/YYYY")}
          />
        </Form.Item>

        <Form.Item label="Mã danh mục khóa học">
          <Input
            style={{ width: 360 }}
            name="maDanhMucKhoahoc"
            onChange={formik.handleChange}
            value={formik.values.maDanhMucKhoahoc}
          />
        </Form.Item>
        <Form.Item label="Tài khoản người tạo">
          <Input
            style={{ width: 360 }}
            name="taiKhoanNguoiTao"
            onChange={formik.handleChange}
            value={formik.values.taiKhoanNguoiTao}
          />
        </Form.Item>

        <Form.Item label="Hình ảnh">
          <input
            type="file"
            onChange={handleChangeFile}
            accept="image/png, image/jpeg, image/gif, image/png"
          />
          <br />
          <img
            style={{ width: 150, height: 150 }}
            src={imgSrc === "" ? thongTinKhoaHoc.hinhAnh : imgSrc}
            alt="..."
          />
        </Form.Item>
        <Form.Item label="Tác vụ">
          <button type="submit" className=" p-2">
            Cập nhật
          </button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Edit;
