import React from 'react';
import aboutIcon from '../images/about-icon.png';
import card1shadow from '../images/card-1-shadow.png';
import card1human from '../images/card-1-human.png';
import card2shadow from '../images/card-2-shadow.png';
import card2human from '../images/card-2-human.png';
import card3shadow from '../images/card-3-shadow.png';
import card3human from '../images/card-3-human.png';
import card4shadow from '../images/card-4-shadow.png';
import card4human from '../images/card-4-human.png';
import card5shadow from '../images/card-5-shadow.png';
import card5human from '../images/card-5-human.png';
import card6shadow from '../images/card-6-shadow.png';
import card6human from '../images/card-6-human.png';
function About() {
	return (
		<div className="about">
			<span className="about-icon" data-aos="fade-up">
				<img src={aboutIcon} alt="" />
				<h2>私たちが得意とすること</h2>
				<img src={aboutIcon} alt="" />
			</span>
			<div className="about-grid">
				<div className="about-grid-card card-1" data-aos="zoom-in">
					<div className="about-grid-card-image card11" data-aos="zoom-in" data-aos-delay="500">
						<img src={card1shadow} alt="" className="about-shadow card1s" />
						<img src={card1human} alt="" className="about-human card1h" />
					</div>
					<div className="about-grid-card-content card12">
						<p data-aos="fade-up" data-aos-delay="500">
							Website creation
						</p>
						<h1 data-aos="fade-right" data-aos-delay="600">
							Webサイト制作
						</h1>
						<p data-aos="zoom-in" data-aos-delay="700">
							吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記 #1
						</p>
					</div>
				</div>

				<div className="about-grid-card card-2" data-aos="zoom-in">
					<div className="about-grid-card-image card21" data-aos="zoom-in" data-aos-delay="500">
						<img src={card2shadow} alt="" className="about-shadow card2s" />
						<img src={card2human} alt="" className="about-human card2h" />
					</div>
					<div className="about-grid-card-content card22">
						<p data-aos="fade-up" data-aos-delay="500">
							Web system development
						</p>
						<h1 data-aos="fade-right" data-aos-delay="600">
							Webシステム開発
						</h1>
						<p data-aos="zoom-in" data-aos-delay="700">
							吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記 #2
						</p>
					</div>
				</div>

				<div className="about-grid-card card-3" data-aos="zoom-in">
					<div className="about-grid-card-content card31">
						<p data-aos="fade-up" data-aos-delay="500">
							Website Management support
						</p>
						<h1 data-aos="fade-right" data-aos-delay="600">
							Webサイト運営サポート
						</h1>
						<p data-aos="zoom-in" data-aos-delay="700">
							吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記 #3
						</p>
					</div>
					<div className="about-grid-card-image card32" data-aos="zoom-in" data-aos-delay="500">
						<img src={card3shadow} alt="" className="about-shadow card3s" />
						<img src={card3human} alt="" className="about-human card3h" />
					</div>
				</div>

				<div className="about-grid-card card-4" data-aos="zoom-in">
					<div className="about-grid-card-content card41">
						<p data-aos="fade-up" data-aos-delay="500">
							Web Seminar
						</p>
						<h1 data-aos="fade-right" data-aos-delay="600">
							Webセミナー
						</h1>
						<p data-aos="zoom-in" data-aos-delay="700">
							吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記 #4
						</p>
					</div>
					<div className="about-grid-card-image card42" data-aos="zoom-in" data-aos-delay="500">
						<img src={card4shadow} alt="" className="about-shadow card4s" />
						<img src={card4human} alt="" className="about-human card4h " />
					</div>
				</div>

				<div className="about-grid-card card-5" data-aos="zoom-in">
					<div className="about-grid-card-image card51" data-aos="zoom-in" data-aos-delay="500">
						<img src={card5shadow} alt="" className="about-shadow card5s" />
						<img src={card5human} alt="" className="about-human card5h" />
					</div>
					<div className="about-grid-card-content card52">
						<p data-aos="fade-up" data-aos-delay="500">
							System development
						</p>
						<h1 data-aos="fade-right" data-aos-delay="600">
							大規模システム
						</h1>
						<p data-aos="zoom-in" data-aos-delay="700">
							吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記 #5
						</p>
					</div>
				</div>

				<div className="about-grid-card card-6" data-aos="zoom-in">
					<div className="about-grid-card-image card61" data-aos="zoom-in" data-aos-delay="500">
						<img src={card6shadow} alt="" className="about-shadow card6s" />
						<img src={card6human} alt="" className="about-human card6h" />
					</div>
					<div className="about-grid-card-content card62">
						<p data-aos="fade-up" data-aos-delay="500">
							Offshore
						</p>
						<h1 data-aos="fade-right" data-aos-delay="600">
							オフショア開発
						</h1>
						<p data-aos="zoom-in" data-aos-delay="700">
							吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記 #6
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
