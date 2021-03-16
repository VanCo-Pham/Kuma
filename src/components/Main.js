import React from 'react';
import mainHuman from '../images/main-human.png';
import mainShadow from '../images/main-shadow.png';
import mainYellow from '../images/main-yellow.png';
import mainText from '../images/main-text.png';

function Main() {
	return (
		<div className="main">
			<div className="main-images" />
			<img className="main-yellow" src={mainYellow} alt="" />
			<img className="main-human" src={mainHuman} alt="" />
			<img className="main-shadow" src={mainShadow} alt="" />
			<div className="main-text">
				<img src={mainText} alt="" data-aos="zoom-in-down" data-aos-delay="700" />
				<h3 data-aos="zoom-in-up" data-aos-delay="900">
					株式会社くまひさは「使って楽しい」システムを
				</h3>
				<h3 data-aos="zoom-in-up" data-aos-delay="1100">
					提案・開発する会社です。
				</h3>
			</div>
		</div>
	);
}

export default Main;
