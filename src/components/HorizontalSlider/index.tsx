import * as React from 'react';
import Slider from 'react-slick';
import Card from '../Card';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import './style.css';

export default class HorizontalSlider extends React.Component {
    render() {
        const settings = {
            focusOnSelect: true,
            className: 'center',
            centerMode: true,
            infinite: true,
            centerPadding: '24px',
            slidesToShow: 3,
            speed: 500,
            arrows: false,
            initialSlide: 1
        };
        return (
            <div>
                <Slider {...settings}>
                    <Card count={111} />
                    <Card count={222} />
                    <Card count={333} />
                    <Card count={444} />
                    <Card count={555} />
                </Slider>
            </div>
        );
    }
}
