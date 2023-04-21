import React from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ImageLogin1 from '../images/imagelogin1.svg';
import ImageLogin2 from '../images/imagelogin2.svg';
import ImageLogin3 from '../images/imagelogin3.svg';
import ImageLogin4 from '../images/imagelogin4.svg';
import ImageLogin5 from '../images/imagelogin5.svg';
import ImageLogin6 from '../images/imagelogin6.svg';
import ImageLogin7 from '../images/imagelogin7.svg';
import ImageLogin8 from '../images/imagelogin8.svg';

function Carousel() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 1500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2500,
		pauseOnHover: false,
		fade: true,
	};
	return (
		<div>
			<Slider {...settings} style={{ justifyContent: "center" }}>
				<div>
					<img src={ImageLogin1} alt="Imagen Login" />
				</div>
				<div>
					<img src={ImageLogin2} alt="Imagen Login" />
				</div>
				<div>
					<img src={ImageLogin3} alt="Imagen Login" />
				</div>
				<div>
					<img src={ImageLogin4} alt="Imagen Login" />
				</div>
				<div>
					<img src={ImageLogin5} alt="Imagen Login" />
				</div>
				<div>
					<img src={ImageLogin6} alt="Imagen Login" />
				</div>
				<div>
					<img src={ImageLogin7} alt="Imagen Login" />
				</div>
				<div>
					<img src={ImageLogin8} alt="Imagen Login" />
				</div>
			</Slider>
		</div>
	)
}

export default Carousel