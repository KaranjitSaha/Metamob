/* IMPORTING MODULES */
import React from "react";
import Slider from "react-slick";

/* IMPORTING CSS */
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles.css";

/* IMPORTING DATA FILES  */
import images from "../data/images";


function Card(item) {
    return <div key={item.id}>
        <img src={item.src.default} alt={item.alt}></img>
        <h1>{item.title}</h1>
    </div>
}

export default function Carousel() {
    const settings = {
        infinite: true,
        dots: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,

    };
    return (
        <>
            <div className="tag">
                <h1>Image Gallery</h1>
            </div>
            <div className="imgslider">
                <Slider {...settings}>
                    {images.map(Card)}
                </Slider>
            </div>
        </>
    );
}

