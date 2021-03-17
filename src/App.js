import './styles/main.css';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Contain from './components/Contain';
import Footer from './components/Footer';
import Float from './components/Float';
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
	useEffect(() => {
		Aos.init({ disable: 'mobile', duration: 2000 });
	}, []);
	return (
		<div className="App">
			<Header />
			<Main />
			<About />
			<Contain />
			<Footer />
			<Float />
		</div>
	);
}

export default App;
