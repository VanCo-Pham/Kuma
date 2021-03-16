import React from 'react';
import article1Human from '../images/contain-1-human.png';
import chat from '../images/chatbox.png';

function Test() {
	return (
		<div className="test">
			<article className="test-article">
				<div className="test-article-group1">
					<h2>信頼の認証</h2>
					<img className="header-images" src={article1Human} alt="" />
					<p>
						Maxime repudiandae molestias eos cupiditate doloribus sint fuga excepturi amet labore a?
						<img className="header-chatbox" src={chat} alt="" />
					</p>
					{/* <p>Maxime repudiandae molestias eos cupiditate doloribus sint fuga excepturi amet labore a?</p> */}
				</div>
				<div className="test-article-group2">
					<h2>信頼の認証</h2>
					<img className="header-images" src="" alt="" />
					<img className="header-chatbox" src="" alt="" />
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repudiandae molestias eos
						cupiditate doloribus sint fuga excepturi amet labore a?
					</p>
				</div>
			</article>
		</div>
	);
}

export default Test;
