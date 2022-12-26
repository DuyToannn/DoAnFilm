import React from 'react'

import './footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/loi.png';
const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${bg})`}}>
      <div className="footer__content container">
        <div className="footer__content__logo">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <Link to="/">Trang chủ</Link>
            <Link to="/">Liên hệ</Link>
            <Link to="/">Giới thiệu</Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Footer;