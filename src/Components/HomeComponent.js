import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Home extends Component {

    render() {
        return (
            <div className="container">
                <div className="row row-header justify-content-center">
                    <div className="col-12 col-sm-6">
                        <h1>Create, donate, vote, sign and fund extraordinary mobilizations!</h1>
                        <p>Metamob is a decentralized web3 app, running on the -----, that lets any user start mobilizations by creating campaigns</p>
                        <div className="btn-group">
                            <Button color="primary">Explore</Button>
                            <Button color="secondary">Create</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;