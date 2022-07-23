/* IMPORTING ELEMENTS */
import React, { Component } from "react";

/* IMPORTING CSS */
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles.css";

export default function Card(props) {
    return (
        <div key={props.item.id} style={{backgroundColor:"grey", borderRadius:"10px"} } zIndex="10">
        {/* TODO: height="600rem" width="400rem" fix the size of this div and make the div to be somewhat raised */}
            <img src={props.item.src.default} alt={props.item.alt} height="400rem" width="400rem" style={{borderRadius:"10px"}}></img>
            <h1>{props.item.title}</h1>
        </div>
    );
}