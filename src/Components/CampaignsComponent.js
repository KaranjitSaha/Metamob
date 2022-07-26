import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';
import Card from './Card';
import images from '../data/images';

function Table(props) {
    return (

        <div className="row">
            {props.arr.map((image, index) => <TableRow item={image} index={index} />)}
        </div>

    );
}

function TableRow(props) {
    return (
        <div className='col-12 col-md-6' height="700rem" width="400rem">
            <Card item={props.item}/>
        </div>
    );
}

class Campaigns extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-2">
                        <Button className="btn"><span className="fa fa-fire"></span></Button>
                        <Button className="btn"><span className="fa fa-clock-o"></span></Button>
                    </div>
                    <div className="col-12 col-sm-3">
                        <Input type="text" id="title" placeholder="Title" style={{ margin: "5px" }} />
                    </div>
                    <div className="col-12 col-sm-2">
                        <Input type="select" id="select" name="select" style={{ margin: "5px", padding: "7px" }}>
                            <option>All</option>
                            <option>Animals</option>
                            <option>Enviroment</option>
                            <option>General</option>
                            <option>Government</option>
                            <option>Human Rights</option>
                        </Input>
                    </div>
                    <div className="col-12 col-sm-3">
                        <Input type="text" id="any" placeholder="Any" style={{ margin: "5px" }} />
                    </div>
                    <div className="col-12 col-sm-1">
                        <Button className="btn btn-success"><span className="fa fa-search"></span></Button>
                    </div>
                    <div className="col-12 col-sm-2 offset-md-11">
                        <Button className="btn btn-success"><span className="fa fa-plus"></span> Create</Button>
                    </div>
                </div>

                <Table arr={images}></Table>

            </div>
        )
    }
}



export default Campaigns;