/* IMPORTING ELEMENTS */
import React, { Component } from "react";
import Slider from "react-slick";
import Card from './Card';

/* IMPORTING CSS */
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles.css";

class Carousel extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const settings = {
            infinite: true,
            dots: true,
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 500, // TODO:Increase autoplaySpeed later

        };
        return (
            <>
                <div className="imgslider">
                    <Slider {...settings}>
                        {this.props.images.map(item=><Card item={item}/>)}
                    </Slider>
                </div>
            </>
        );
    }
}

export default Carousel;