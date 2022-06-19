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
  import { useDispatch, useSelector } from 'react-redux';
  import { layThongTinKhoaHocAction, themKhoaHocUploadHinhAction } from "../../../../redux/actions/QuanLyKhoaHocAction";
  const Edit = (props) => {



    const [componentSize, setComponentSize] = useState("default");
    const {thongTinKhoaHoc} = useSelector(state => state.QuanLyKhoaHocReducer);
    console.log('thongTinKhoaHoc', thongTinKhoaHoc)
    const [imgSrc, setImgSrc] = useState(""); 
    const dispatch = useDispatch();

    useEffect(() => {
      let {id} = props.match.params;

      dispatch(layThongTinKhoaHocAction(id));
    }, [])
    

    const formik = useFormik({
      initialValues: {
        maKhoaHoc: "",
        biDanh: "",
        tenKhoaHoc: "",
        moTa: "",
        luotXem: "",
        maNhom: "",
        ngayTao: "",
        soLuongHocVien: "",
        maDanhMucKhoahoc: "",
        tenDanhMucKhoaHoc: "",
        hinhAnh: {},
      },
      onSubmit: (values) => {
        console.log("values", values);
  
        //Tạo đối tượng formdata
        let formData = new FormData();
  
        for (let key in values) {
          if (key !== "hinhAnh") {
            formData.append(key, values[key]);
          } else {
            formData.append("File", values.hinhAnh, values.hinhAnh.name);
          }
        }
  
        //Gọi api gửi các gia trị formdata về backend xử lý
        dispatch(themKhoaHocUploadHinhAction(formData));
      },
    });
  
    const handleChangeDatePicker = (value) => {
      let ngayTao = moment(value).format("DD/MM/YYYY");
      formik.setFieldValue("ngayTao", ngayTao);
    };
    const handleChangeInputNumber = (name) => {
      return (value) => {
        formik.setFieldValue(name, value);
      };
    };
  
    const handleChangeFile = (e) => {
      //Lấy file ra từ e
      let file = e.target.files[0];
      if (
        file.type === "image/jpeg" ||
        file.type === "image/jpg" ||
        file.type === "image/gif" ||
        file.type === "image/png"
      ) {
        //tạo đôi tượng để đọc file
  
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
          console.log(e.target.result);
          setImgSrc(e.target.result);
        };
        //đem dữ liệu file lưu vào formik
        formik.setFieldValue("hinhAnh", file);
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
        <Form.Item label="Mã khóa học">
          <Input
            style={{ width: 160 }}
            name="maKhoaHoc"
            onChange={formik.handleChange}
          />
        </Form.Item>
        <Form.Item label="Bí danh">
          <Input
            style={{ width: 360 }}
            name="biDanh"
            onChange={formik.handleChange}
          />
        </Form.Item>
        <Form.Item label="Tên khóa học">
          <Input
            style={{ width: 360 }}
            name="tenKhoaHoc"
            onChange={formik.handleChange}
          />
        </Form.Item>
        <Form.Item label="Mô tả">
          <Input.TextArea name="moTa" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Lượt xem">
          <InputNumber onChange={handleChangeInputNumber("luotXem")} />
        </Form.Item>
        <Form.Item label="Mã nhóm">
          <Input
            style={{ width: 160 }}
            name="maNhom"
            onChange={formik.handleChange}
          />
        </Form.Item>
        <Form.Item label="Ngày tạo">
          <DatePicker format={"DD/MM/YYYY"} onChange={handleChangeDatePicker} />
        </Form.Item>
        <Form.Item label="Số lượng học viên">
          <InputNumber onChange={handleChangeInputNumber("soLuongHocVien")} />
        </Form.Item>
        <Form.Item label="Mã danh mục khóa học">
          <Input
            style={{ width: 360 }}
            name="maDanhMucKhoaHoc"
            onChange={formik.handleChange}
          />
        </Form.Item>
  
        <Form.Item label="Tên danh mục khóa học">
          <Input style={{ width: 360 }} name="tenDanhMucKhoaHoc" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Hình ảnh">
          <input
            type="file"
            onChange={handleChangeFile}
            accept="image/png, image/jpeg, image/gif, image/png"
          />
          <br />
          <img style={{ width: 150, height: 150 }} src={imgSrc} alt="..." />
        </Form.Item>
        <Form.Item label="Tác vụ">
          <button type="submit" className="bg-blue-300 text-white p-2">
            Thêm khóa học
          </button>
        </Form.Item>
      </Form>
      </>
    );
  };
  
  export default Edit;
  