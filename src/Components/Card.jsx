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
        <Card className="shadow-sm p-3 mb-5 bg-white rounded">
            <CardImg src={props.item.src.default} alt={props.item.alt} style={{height: "30rem"}}/>
            <CardBody>
                <CardTitle><h3>{props.item.title}</h3></CardTitle>
            </CardBody>
        </Card>
    );
}