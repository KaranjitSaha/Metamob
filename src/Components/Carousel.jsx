/* IMPORTING MODULES */
import React, { Component } from "react";
import Slider from "react-slick";

/* IMPORTING CSS */
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles.css";

/* IMPORTING DATA FILES  */



function Card(item) {
    return <div key={item.id} >
        <img src={item.src.default} alt={item.alt} ></img>
        <h1>{item.title}</h1>
    </div>
}

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
                        {this.props.images.map(Card)}
                    </Slider>
                </div>
            </>
        );
    }
}

export default Carousel;