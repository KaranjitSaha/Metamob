/* IMPORTING ELEMENTS */
import React, { Component } from "react";
import { Card, CardBody, CardImg, CardTitle } from 'reactstrap'; 

/* IMPORTING CSS */
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles.css";

export default function CardDisplay(props) {
    return (
        // <div key={props.item.id} style={{backgroundColor:"white", borderRadius:"10px", borderStyle:"outset",borderWidth:"3px",marginTop:"3", marginTop: "3rem"}} height="600rem" width="600rem">
        // {/* TODO: height="600rem" width="400rem" fix the size of this div and make the div to be somewhat raised */}
        //     <img src={props.item.src.default} alt={props.item.alt} height="400rem" width="534rem" style={{borderRadius:"10px"}}></img>
        //     <h1>{props.item.title}</h1>
        // </div>
        <Card className="shadow-sm p-3 mb-5 bg-white rounded">
            <CardImg src={props.item.src.default} alt={props.item.alt} style={{height: "30rem"}}/>
            <CardBody>
                <CardTitle><h3>{props.item.title}</h3></CardTitle>
            </CardBody>
        </Card>
    );
}