import React from 'react';
import logo from '../images/logo.png';
import menuIcon from '../images/header-menu-icon.png';

function Header() {
	return (
		<header id="topbar">
			<div className="header-logo">
				<img src={logo} alt="" />
			</div>
			<div className="header-items">
				<div className="header-item" data-aos="zoom-in">
					会社概要
				</div>
				<div className="header-item" data-aos="zoom-in" data-aos-delay="500">
					サービス内容
				</div>
				<div className="header-item" data-aos="zoom-in" data-aos-delay="600">
					LLC KUMAについて
				</div>
				<div className="header-item" data-aos="zoom-in" data-aos-delay="700">
					アクセス
				</div>
				<div className="header-item" data-aos="zoom-in" data-aos-delay="800">
					お問い合わせ
				</div>
			</div>
			<div className="header-menu" data-aos="zoom-in" data-aos-delay="900">
				<img src={menuIcon} alt="" />
				<p>MENU</p>
			</div>
		</header>
	);
}

export default Header;
