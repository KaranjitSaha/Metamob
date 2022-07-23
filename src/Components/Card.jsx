/* IMPORTING ELEMENTS */
import React, { Component } from "react";

/* IMPORTING CSS */
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles.css";

export default function Card(props) {
    return (
        <div key={props.id} >
            <img src={props.src.default} alt={props.alt} ></img>
            <h1>{props.title}</h1>
        </div>
    );
}