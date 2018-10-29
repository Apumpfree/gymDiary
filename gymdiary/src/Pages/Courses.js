import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

class Courses extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        };
        return (
        <div className="column">
            <div>
                <h2> Single Item</h2>
                <Slider {...settings}>
                    <div>
                        <h3>test1</h3>
                    </div>
                    <div>
                        <h3>test2</h3>
                    </div>
                    <div>
                        <h3>test3</h3>
                    </div>
                    <div>
                        <h3>test4</h3>
                    </div>
                    <div>
                        <h3>test5</h3>
                    </div>
                    <div>
                        <h3>test6</h3>
                    </div>
                </Slider>
            </div>
        </div>
        );
    }
} 
export default Courses;