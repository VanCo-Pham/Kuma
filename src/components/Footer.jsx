import React from 'react';
import footerIcon from '../images/footer-icon.png';
import footerLogo from '../images/footer-logo.png';
import footerUpIcon from '../images/footer-upIcon.png';
import { Link } from 'react-scroll';

function Footer() {
	return (
		<footer>
			<div className="scroll-top">
				<Link to="topbar" spy={true} smooth={true}>
					<img src={footerUpIcon} alt="" />
					<h2>SCROLL TOP</h2>
				</Link>
			</div>
			<ul className="footer-steps">
				<li className="footer-step" data-aos="fade-up">
					<img src={footerIcon} alt="" />
					<p>くまひさ会社情報</p>
				</li>
				<li className="footer-step" data-aos="fade-up" data-aos-delay="500">
					<img src={footerIcon} alt="" />
					<p>アクセス</p>
				</li>
				<li className="footer-step" data-aos="fade-up" data-aos-delay="700">
					<img src={footerIcon} alt="" />

					<p>LLCKUMAについて</p>
				</li>
				<li className="footer-step" data-aos="fade-up" data-aos-delay="900">
					<img src={footerIcon} alt="" />

					<p>個人情報保護方針</p>
				</li>
				<li className="footer-step" data-aos="fade-up" data-aos-delay="1100">
					<img src={footerIcon} alt="" />

					<p>個人情報の取扱について</p>
				</li>
				<li className="footer-step" data-aos="fade-up" data-aos-delay="1300">
					<img src={footerIcon} alt="" />

					<p>情</p>
				</li>
			</ul>
			<div className="end">
				<img src={footerLogo} alt="" />
				<p>© 2019 KUMAHISA Co.,Ltd. All rights reserved.</p>
			</div>
		</footer>
	);
}

export default Footer;
