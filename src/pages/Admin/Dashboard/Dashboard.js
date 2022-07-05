import React, { Fragment, useEffect } from "react";
import { Button, Table } from "antd";
import { AudioOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  layDanhSachNguoiDungAction,
  timKiemNguoiDungAction,
  xoaNguoiDungAction,
} from "../../../redux/actions/QuanLyNguoiDungAction";
import { NavLink } from "react-router-dom";
const { Search } = Input;

export default function Dashboard(props) {
  const { arrUserDefault } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );
  const dispatch = useDispatch();
  console.log("arrUserDefault", arrUserDefault);
  useEffect(() => {
    dispatch(layDanhSachNguoiDungAction());
  }, []);

  const columns = [
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      value: (text, object) => {
        return <span>(text)</span>;
      },
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.taiKhoan.length - b.taiKhoan.length,
      sortDirections: ["descend"],
    },
    {
      title: "Họ tên",
      dataIndex: "hoTen",
      value: (text, object) => {
        return <span>(text)</span>;
      },
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.hoTen.length - b.hoTen.length,
      sortDirections: ["descend"],
    },
    {
      title: "Email",
      dataIndex: "email",
      value: (text, object) => {
        return <span>(text)</span>;
      },
    },
    {
      title: "Số điện thoại",
      dataIndex: "soDt",
      value: (text, object) => {
        return <span>(text)</span>;
      },
    },
    {
      title: "Mã loại người dùng",
      dataIndex: "maLoaiNguoiDung",
      value: (text, object) => {
        return <span>(text)</span>;
      },
    },
    {
      title: "Hành động",
      dataIndex: "hanhDong",
      render: (text, user) => {
        return (
          <Fragment>
            <NavLink
              key={3}
              className="mr-2"
              text-white
              to={`/admin/dashboard/edituser/${user.taiKhoan}`}
            >
              <EditOutlined style={{ color: "blue" }}></EditOutlined>
            </NavLink>
            <span style={{cursor:'pointer'}} key={4} onClick={()=> {
              if(window.confirm('Bạn có chắc muốn xóa ' + user.hoTen)){
                dispatch(xoaNguoiDungAction(user.taiKhoan))
              }
            }} >
              <DeleteOutlined style={{ color: "red" }}></DeleteOutlined>
            </span>
          </Fragment>
        );
      },
    },
  ];
  const data = arrUserDefault;
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );
  const onSearch = (value) => {
    console.log(value);
    //Gọi api layDanhSachNguoiDung
    dispatch(layDanhSachNguoiDungAction(value));
   
  };
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <div>
      <h3 className="text 4-xl">Quản lý người dùng</h3>
      <Button
        className="mb-3"
        onClick={() => {
          props.history.push("/admin/dashboard/addnewuser");
        }}
      >
        Thêm người dùng
      </Button>
      <Search placeholder="Tìm kiếm" size="large" onSearch={onSearch} />
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
}
