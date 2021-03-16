import React from 'react';
import mainHuman from '../images/main-human.png';
import mainYellow from '../images/main-yellow.png';

function Main() {
	return (
		<div className="main">
			<div className="main-images" />
			<img className="main-yellow" src={mainYellow} alt="" />
			<img className="main-human" src={mainHuman} alt="" />
			<div className="main-text">
				<h1>
					使って楽しい<br />システムを
				</h1>
				<h3>株式会社くまひさは「使って楽しい」システムを</h3>
				<h3> 提案・開発する会社です。</h3>
			</div>
		</div>
	);
}

export default Main;
