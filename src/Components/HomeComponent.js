import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Carousel from './Carousel';

class Home extends Component {

    render() {
        return (
            <div className="container content">
                <div className="row row-header justify-content-center">
                    <div className="col-12 col-sm-6">
                        <h1>Create, donate, vote, sign and fund extraordinary mobilizations!</h1>
                        <p>Metamob is a decentralized web3 app, running on the -----, that lets any user start mobilizations by creating campaigns</p>
                        <Button className="btn" color="primary">Explore</Button>
                        <Button className="btn" color="secondary">Create</Button>
                    </div>
                    <div className="col-12 col-sm-6">
                        <Carousel images={this.props.images}/>
                    </div>
                </div>
                <div className="row">
                    <div className="container">
                        <div className="row justify-content-center">
                            <h3><strong>Create and participate in campaigns</strong></h3>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-3">
                                <h5><strong>Authenticate on the II</strong></h5>
                                <p>Authenticate using internet identity and create a new user profile</p>
                            </div>
                            <div className="col-12 col-sm-3">
                                <h5><strong>Find or create your place</strong></h5>
                                <p>You can create a new place here or use an existing one. They can be
                                    restricted by e-mail list, DIP20(tokens) or DIP721(NFT's) balances,
                                    so you can control who can participate.</p>
                            </div>
                            <div className="col-12 col-sm-3">
                                <h5><strong>Create your campaign</strong></h5>
                                <p>Create a new campaign and start a mobilization! Four types of 
                                    campaigns are supported: signatures, donations, votes and fundraising.</p>
                            </div>
                            <div className="col-12 col-sm-3">
                                <h5><strong>Participate</strong></h5>
                                <p>Depending on the campaign, you can sign, donate, vote and fund them. You can also open reports about any abusive content and get a reward in metamob tokens (MMT) if they are accepted!</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h3><strong>Together we can change the world! One campaign at a time.</strong></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;