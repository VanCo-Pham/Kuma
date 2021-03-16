import React from 'react';
import article1Human from '../images/contain-1-human.png';
import chat from '../images/chatbox.png';
import secction2Icon from '../images/contain-section2-icon.png';

import contain1Pic1 from '../images/contain-1-pic1.png';
import contain1Pic2 from '../images/contain-1-pic2.png';
import contain1Pic3 from '../images/contain-1-pic3.png';
import article2Human from '../images/contain-2-human.png';
import article3Human from '../images/contain-3-human.png';
import contain3Pic from '../images/contain-3-pic.png';

function Contain() {
	return (
		<section className="contain">
			<article className="contain-article" data-aos="flip-down">
				<div className="contain-article-header">
					<h2>信頼の認証</h2>
				</div>
				<div className="contain-article-main">
					<img className="contain-article-main-first" src={contain1Pic1} alt="" />
					<div className="contain-article-header-chat article1">
						<img className="contain-article-human" src={article1Human} alt="" />
						<div className="chatbox">
							<img className="contain-article-chat" src={chat} alt="" />
							<p>あやしくないよ！真面目にふざけているだけなんです！ほんとにあやしくないよ！</p>
						</div>
					</div>
				</div>
				<div className="contain-article-mid">
					<img src={contain1Pic2} alt="" />
					<img src={contain1Pic3} alt="" />
				</div>
				<div className="contain-article-footer">
					吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記
				</div>
			</article>

			<article className="contain-article" data-aos="flip-down" data-aos-delay="500">
				<div className="contain-article-header">
					<h2>くまニュース</h2>
				</div>
				<div className="contain-article-main">
					<ul className="contain-article2">
						<li className="contain-article2-item">
							<img className="contain-article2-item-icon" src={secction2Icon} alt="" />
							<div className="contain-article2-item-text">
								<span>2019.12.31 mon</span>
								<span>吾輩は猫である。名前はまだ無い。どこ...</span>
							</div>
						</li>
						<li className="contain-article2-item">
							<img className="contain-article2-item-icon" src={secction2Icon} alt="" />
							<div className="contain-article2-item-text">
								<span>2019.12.31 mon</span>
								<span>吾輩は猫である。名前はまだ無い。どこ...</span>
							</div>
						</li>
						<li className="contain-article2-item">
							<img className="contain-article2-item-icon" src={secction2Icon} alt="" />
							<div className="contain-article2-item-text">
								<span>2019.12.31 mon</span>
								<span>吾輩は猫である。名前はまだ無い。どこ...</span>
							</div>
						</li>
						<li className="contain-article2-item">
							<img className="contain-article2-item-icon" src={secction2Icon} alt="" />
							<div className="contain-article2-item-text">
								<span>2019.12.31 mon</span>
								<span>吾輩は猫である。名前はまだ無い。どこ...</span>
							</div>
						</li>
						<li className="contain-article2-item">
							<img className="contain-article2-item-icon" src={secction2Icon} alt="" />
							<div className="contain-article2-item-text">
								<span>2019.12.31 mon</span>
								<span>吾輩は猫である。名前はまだ無い。どこ...</span>
							</div>
						</li>
					</ul>

					<div className="contain-article-header-chat article1">
						<img className="contain-article-human" src={article2Human} alt="" />
						<div className="chatbox">
							<img className="contain-article-chat" src={chat} alt="" />
							<p>吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。</p>
						</div>
					</div>
				</div>

				<div className="contain-article2-footer">もっと見る</div>
			</article>
			<article className="contain-article" data-aos="flip-down" data-aos-delay="1000">
				<div className="contain-article-header">
					<h2>Facebook</h2>
				</div>
				<div className="contain-article-main">
					<img className="contain-article3-pic" src={contain3Pic} alt="" />
					<div className="contain-article-header-chat article1">
						<img className="contain-article-human" src={article3Human} alt="" />
						<div className="chatbox">
							<img className="contain-article-chat" src={chat} alt="" />
							<p>吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。 #1</p>
						</div>
					</div>
				</div>
			</article>
		</section>
	);
}

export default Contain;
