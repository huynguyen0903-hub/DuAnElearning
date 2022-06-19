import React, { useState } from "react";
import Menu from "../menu/Menu";
import logo from "../../assets/images/gummy-programming.svg";
import "../../assets/scss/index.scss";
function NavHeader() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="header__container">
      <div className="header__logo">
        <img src={logo} alt="logo" />
        <span className="logo__text">Edumall</span>
      </div>
      <div className="header__menu">
        <Menu />
      </div>
      <div
        style={{
          flexGrow: 1,
        }}
      ></div>
      <div className="header__search">
        <input
          onChange={({ target }) => {
            let { value } = target;
            setInputValue(value);
          }}
          value={inputValue}
          autoComplete="off"
          type="text"
          placeholder="Tìm kiếm khóa học"
        />
        {inputValue === "" ? (
          ""
        ) : (
          <i
            onClick={() => {
              setInputValue("");
            }}
            className="fa-solid fa-x"
          ></i>
        )}
      </div>
      <div className="header_myCourses">
        <i className="fa-solid fa-play"></i>
        Khóa học của tôi
      </div>
      <div className="header__cart">
        <i
          onClick={() => {
            console.log("cart");
          }}
          className="fa-solid fa-cart-shopping"
        ></i>
      </div>
      <div className="header__user">
        <i
          onClick={() => {
            console.log("user");
          }}
          className="fa-solid fa-user"
        ></i>
      </div>
    </div>
  );
}

export default NavHeader;
