import React from 'react';
import './Footer.scss';

function Footer(props) {
    return (
        <div className="wrapper7" id="footercatalog">
        <div className="footer">
          <img src="https://nguyencong17.github.io/HeaphoneStore/assets/image/Heaphone/footer.png" alt="" id="note"/>
          <div className="opacity">
          </div>
          <div className="footer__logo">
            <img src="https://nguyencong17.github.io/HeaphoneStore/assets/image/logo.png" alt=""/>
          </div>
          <div className="footer--slogan">
            <h2>ĐĂNG KÍ ĐỂ NHẬN THÔNG BÁO</h2>
          </div>
          <form action="#" className="search ">
            <input type="text" name="search" placeholder="Địa Chỉ Email" id="" className="input"/>
            <button className="submit btn-rouded">ĐĂNG KÍ</button>
          </form>
          <div className="bylogin">
            <i className="fab fa-twitter"></i>
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-google"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
    
      </div>
    );
}

export default Footer;