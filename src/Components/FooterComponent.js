import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row justify-content-center">             
                        <div className="col-4 col-sm-2">
                            <ul className="list-unstyled">
                                <li><Link to='/home'>Home</Link></li>
                                <li><Link to='/aboutus'>About</Link></li>
                                <li><Link to='/menu'>Menu</Link></li>
                                <li><Link to='/contactus'>Contact Us</Link></li>
                            </ul>
                        </div>
                        <div className="col-8 col-sm-4 align-self-center">
                            <div className="text-center">
                                <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus icons"></i></a>
                                <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook icons"></i></a>
                                <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin icons"></i></a>
                                <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter icons"></i></a>
                                <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube icons"></i></a>
                                <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o icons"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;