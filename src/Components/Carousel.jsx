import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { isTemplateSpan } from "typescript";

const images = [{
    id: 1,
    title: "Stop the amazon massacre",
    src: "../images/IMG_1232.JPG",
    alt:"photo1",
},
{
    id: 2,
    title:"Restore the rain forest in Brazil",
    src: "/home/karanjitsaha/Desktop/Metamob/images/IMG_1232.JPG",
    alt: "Image 2 "
},
// {
//     id: 3,
//     src: "public/logo192.png",
//     alt: "Image 3"
// }
];

export default function Carousel() {
    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,

    };
    return (
        <>
            <div className="tag">
                <h1>Image Gallery</h1>
            </div>
            <div className="imgslider">
                <Slider {...settings}>
                    {images.map((item) => (
                        <div key={item.id}>
                            <img src={item.src} alt={item.alt} />
                            <h1>{item.title}</h1>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}

