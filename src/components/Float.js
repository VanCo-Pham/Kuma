import React from 'react';
import floatHuman from '../images/float-human.png';
import floatChat from '../images/float-chat.png';

// Initial state
var scrollPos = 0;
// adding scroll event
window.addEventListener('scroll', function() {
	// detects new state and compares it with the new one
	if (document.body.getBoundingClientRect().top > scrollPos) {
		// floatMenu.style.display = 'block';
		document.getElementById('float').style.opacity = 0;
	} else {
		document.getElementById('float').style.opacity = 1;
	}
	// saves the new position for iteration.
	scrollPos = document.body.getBoundingClientRect().top;
});
function Float() {
	return (
		<div className="float" id="float">
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
