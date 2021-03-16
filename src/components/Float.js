import React from 'react';
import floatHuman from '../images/float-human.png';
import floatChat from '../images/float-chat.png';

function Float() {
	return (
		<div className="float">
			<div className="float-container">
				<span className="float-text">
					<img src={floatChat} alt="" />
					<p>
						お気軽に<br /> お問い合わせ <br />ください！
					</p>
				</span>
				<img src={floatHuman} alt="" />
				<h3>お問い合わせ</h3>
			</div>
		</div>
	);
}

export default Float;
