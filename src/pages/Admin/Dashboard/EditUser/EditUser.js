import React, { useRef, useState, useEffect } from "react";
import { Button, Form, Input, InputNumber, Radio } from "antd";
import { useFormik } from "formik";
import {
  capNhatThongTinNguoiDungAction,
  layDanhSachNguoiDungAction,
  themNguoiDungAction,
  timKiemNguoiDungAction,
} from "../../../../redux/actions/QuanLyNguoiDungAction";
import { useDispatch, useSelector } from "react-redux";
import { GROUPID } from "../../../../ulti/setting";

const EditUser = (props) => {
  const dispatch = useDispatch();
  const [componentSize, setComponentSize] = useState("default");
  const { thongTinNguoiDung } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );
  console.log("thongTinNguoiDung", thongTinNguoiDung);
  useEffect(() => {
    let { id } = props.match.params;

    dispatch(timKiemNguoiDungAction(id));
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      taiKhoan: thongTinNguoiDung[0]?.taiKhoan,
      matKhau: thongTinNguoiDung[0]?.matKhau,
      hoTen: thongTinNguoiDung[0]?.hoTen,
      email: thongTinNguoiDung[0]?.email,
      soDt: thongTinNguoiDung[0]?.soDt,
      maLoaiNguoiDung: thongTinNguoiDung[0]?.maLoaiNguoiDung,
      
    },
    onSubmit: (values) => {
      console.log("values", values);

      dispatch(capNhatThongTinNguoiDungAction(values));
    },
  });
  console.log(typeof thongTinNguoiDung)
  // const dataForm = useRef({
  //   taiKhoan: "",
  //   matKhau: "",
  //   hoTen: "",
  //   email: "",
  //   soDT: "",
  //   maLoaiNguoiDung: "",
  // });
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  // const handleSubmit = () => {
  //   console.log(dataForm.current);
  //   dispatch(themNguoiDungAction(dataForm.current));
  // };
  return (
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
      <h3 className="text-center">Thêm mới nguời dùng</h3>
      <br />
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Tài khoản">
        <Input
          name="taiKhoan"
          style={{ width: 250 }}
          onChange={formik.handleChange}
          value={formik.values.taiKhoan}
          // onChange={({ target }) => {
          //   let { value, name } = target;
          //   dataForm.current[name] = value;
          // }}
        />
      </Form.Item>
      <Form.Item label="Mật khẩu">
        <Input
          name="matKhau"
          style={{ width: 250 }}
          onChange={formik.handleChange}
          value={formik.values.matKhau}
          // onChange={({ target }) => {
          //   let { value, name } = target;
          //   dataForm.current[name] = value;
          // }}
        />
      </Form.Item>
      <Form.Item label="Họ tên">
        <Input
          name="hoTen"
          style={{ width: 250 }}
          onChange={formik.handleChange}
          value={formik.values.hoTen}
          // onChange={({ target }) => {
          //   let { value, name } = target;
          //   dataForm.current[name] = value;
          // }}
        />
      </Form.Item>
      {/* <Form.Item label="Mã nhóm">
        <Input
          name="maNhom"
          style={{ width: 250 }}
          onChange={formik.handleChange}
          value={formik.values.maNhom}
          // onChange={({ target }) => {
          //   let { value, name } = target;
          //   dataForm.current[name] = value;
          // }}
        />
      </Form.Item> */}
      <Form.Item label="Email">
        <Input
          name="email"
          style={{ width: 250 }}
          onChange={formik.handleChange}
          value={formik.values.email}
          // onChange={({ target }) => {
          //   let { value, name } = target;
          //   dataForm.current[name] = value;
          // }}
        />
      </Form.Item>
      <Form.Item label="Số điện thoại">
        <Input
          name="soDt"
          style={{ width: 250 }}    onChange={formik.handleChange}
          value={formik.values.soDt}
          // onChange={({ target }) => {
          //   let { value, name } = target;
          //   dataForm.current[name] = value;
          // }}
        />
      </Form.Item>
      <Form.Item label="Mã loại người dùng">
        <Input
          name="maLoaiNguoiDung"
          style={{ width: 250 }}
          onChange={formik.handleChange}
          value={formik.values.maLoaiNguoiDung}
          // onChange={({ target }) => {
          //   let { value, name } = target;
          //   dataForm.current[name] = value;
          // }}
        />
      </Form.Item>

      <Form.Item label="Tác vụ">
        <button type="submit" className=" p-2">
          Cập nhật
        </button>
      </Form.Item>
    </Form>
  );
};

export default EditUser;
