import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Places from './PlacesComponent';
import Campaigns from './CampaignsComponent';
import { Routes, Route } from 'react-router-dom';

class Main extends Component {
    render() {
        return (
            <div> 
                <Header />
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/places" element={<Places />} />
                    <Route path="/campaigns" element={<Campaigns />} />
                </Routes>
                <Footer />
            </div>
        );
    }
}

export default Main;