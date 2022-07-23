import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';

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
                        <Input type="text" id="title" placeholder="Title" style={{margin: "5px"}}/>
                    </div>
                    <div className="col-12 col-sm-2">
                        <Input type="select" id="select" name="select" style={{margin: "5px", padding: "7px"}}>
                            <option>All</option>
                            <option>Animals</option>
                            <option>Enviroment</option>
                            <option>General</option>
                            <option>Government</option>
                            <option>Human Rights</option>
                        </Input>
                    </div>
                    <div className="col-12 col-sm-3">
                        <Input type="text" id="any" placeholder="Any" style={{margin: "5px"}}/>
                    </div>
                    <div className="col-12 col-sm-1">
                        <Button className="btn btn-success"><span className="fa fa-search"></span></Button>
                    </div>
                    <div className="col-12 col-sm-2 offset-11">
                        <Button className="btn btn-success"><span className="fa fa-plus"></span> Create</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Campaigns;