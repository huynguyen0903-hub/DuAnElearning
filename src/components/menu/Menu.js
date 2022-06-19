import React from "react";
import "../../assets/scss/index.scss";
function Menu() {
  return (
    <>
      <div className="menu">
        <i className="fa-solid fa-bars"></i> <span>Danh Mục</span>
        <i className="fa-solid fa-chevron-down"></i>
      </div>
      <div className="modal__popup">
        <div className="modal__popup__group">
          <div className="group__lable">
            <a href="#" className="course__name">
              Ngoại Ngữ
            </a>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
          <div className="group__content">
            <table className="content__table">
              <tbody>
                <tr className="table__title">
                  <h1>Lập Trình - CNTT</h1>
                </tr>
                <tr className="table__subtitle">
                  <h3>Ngôn ngữ lập trình</h3>
                </tr>
                <tr className="table__item">
                  <td>Lập trình JavaScript</td>
                  <td>Lập trình JavaScript1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="modal__popup__group">
          <div className="group__lable">
            <a href="#" className="course__name">
              Ngoại Ngữ
            </a>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
          <div className="group__content">
            <table className="content__table">
              <tbody>
                <tr className="table__title">
                  <h1>Lập Trình - CNTT</h1>
                </tr>
                <tr className="table__subtitle">
                  <h3>Ngôn ngữ lập trình 2</h3>
                </tr>
                <tr className="table__item">
                  <td>Lập trình JavaScript 2</td>
                  <td>Lập trình JavaScript 3 </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="modal__popup__group">
          <div className="group__lable">
            <a href="#" className="course__name">
              Ngoại Ngữ
            </a>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
          <div className="group__content">
            <table className="content__table">
              <tbody>
                <tr className="table__title">
                  <h1>Lập Trình - CNTT</h1>
                </tr>
                <tr className="table__subtitle">
                  <h3>Ngôn ngữ lập trình 4</h3>
                </tr>
                <tr className="table__item">
                  <td>Lập trình JavaScript 5</td>
                  <td>Lập trình JavaScript 6</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
