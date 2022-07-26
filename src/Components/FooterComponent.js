import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../styles.css";

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-4 col-sm-12 ">
                            <ul className="list-unstyled">
                                <li style={{ display: "inline" }}><Link to='/'>Home</Link></li>
                                <li style={{ display: "inline" }}><Link to='/places'>Places</Link></li>
                                <li style={{ display: "inline" }}><Link to='/campaigns'>Campaigns</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row justify-content-center ">
                        <div className="text-center " style={{flex:'center'}} >
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-lg fa-instagram fa-border icons"></i></a>
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-lg fa-facebook fa-border icons"></i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-lg fa-linkedin fa-border icons"></i></a>
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-lg fa-twitter fa-border icons"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;