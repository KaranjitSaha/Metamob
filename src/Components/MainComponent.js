import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Places from './PlacesComponent';
import Campaigns from './CampaignsComponent';
import { Routes, Route } from 'react-router-dom';
import images from '../data/images';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imaArr: images
        };
    }

    render() {
        return (
            <div> 
                <Header />
                <Routes>
                    <Route path="/home" element={<Home images={this.state.imaArr}/>} />
                    <Route path="/places" element={<Places />} />
                    <Route path="/campaigns" element={<Campaigns />} />
                </Routes>
                <Footer />
            </div>
        );
    }
}

export default Main;