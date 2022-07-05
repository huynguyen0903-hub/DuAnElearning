import React, { useRef, useState } from "react";
import { Button, Form, Input, InputNumber, Radio } from "antd";
import { useFormik } from "formik";
import { themNguoiDungAction } from "../../../../redux/actions/QuanLyNguoiDungAction";
import { useDispatch } from "react-redux";
import { GROUPID } from "../../../../ulti/setting";

const AddNewUser = () => {
  const dispatch = useDispatch();
  const [componentSize, setComponentSize] = useState("default");
  const formik = useFormik({
    initialValues: {
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    email: "",
    soDT: "",
    maLoaiNguoiDung: "",
    },
    onSubmit: (values) => {
      dispatch(themNguoiDungAction(values))
    }
  }
)  // const dataForm = useRef({
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
  // console.log(dataForm);
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
          
          // onChange={({ target }) => {
          //   let { value, name } = target;
          //   dataForm.current[name] = value;
          // }}
        />
      </Form.Item>
      <Form.Item label="Mã nhóm">
        <Input
          name="maNhom"
          style={{ width: 250 }}
          onChange={formik.handleChange}

          // onChange={({ target }) => {
          //   let { value, name } = target;
          //   dataForm.current[name] = value;
          // }}
        />
      </Form.Item>
      <Form.Item label="Email">
        <Input
          name="email"
          style={{ width: 250 }}
          onChange={formik.handleChange}

          // onChange={({ target }) => {
          //   let { value, name } = target;
          //   dataForm.current[name] = value;
          // }}
        />
      </Form.Item>
      <Form.Item label="Số điện thoại">
        <Input
          name="soDT"
          style={{ width: 250 }}
          onChange={formik.handleChange}

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

          // onChange={({ target }) => {
          //   let { value, name } = target;
          //   dataForm.current[name] = value;
          // }}
        />
      </Form.Item>

      <Form.Item label="Tác vụ">
        <button type="submit" className=" p-2">
          Thêm mới
        </button>
      </Form.Item>
    </Form>
  );
};

export default AddNewUser;
