/* IMPORTING MODULES */
import React from "react";
import Slider from "react-slick";

/* IMPORTING CSS */
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles.css";
// import '../../
const images = [{
    id: 1,
    title: "Stop the amazon massacre",
    src: "../../public/logo192.png",
    alt: "photo1",
},
{
    id: 2,
    title: "Restore the rain forest in Brazil",
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
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,

    };
    return (
        <>
            <div className="tag">
                <h1>Image Gallery</h1>
            </div>
            <div className="imgslider">
                <Slider {...settings}>
                    <div>
                        <img src={"logo192.png"} />
                        <h1>Stop the amazon massacre</h1>
                    </div>
                    <div>
                        <img src={require("./png-transparent-multicolored-balloons-illustration-balloon-balloon-free-balloons-easter-egg-desktop-wallpaper-party-thumbnail.png").default} />
                        <h1>Stop the amazon massacre</h1>
                    </div>
                    <div>
                        <img src={"logo192.png"} />
                        <h1>Stop the amazon massacre</h1>
                    </div>

                    {images.map((item) => {
                        <div key={item.id}>
                            <img src={item.src} alt={item.alt}></img>
                            <h1>{item.title}</h1>
                        </div>
                    })}

                </Slider>
            </div>
        </>
    );
}

