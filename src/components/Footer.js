import React, { Component } from 'react';
import './Footer.css';
import { SocialIcon } from 'react-social-icons';

export default class Footer extends Component {
    render() {
        return (
            <div >
                <footer className="page-footer pt-4">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-9 mt-md-0 mt-3">
                                <SocialIcon network="twitter" target="_blank" rel="noopener noreferrer" />
                                <SocialIcon network="linkedin" target="_blank" rel="noopener noreferrer" />
                                <SocialIcon network="github" target="_blank" rel="noopener noreferrer" />
                                <SocialIcon label="Our portfolio" target="_blank" rel="noopener noreferrer" />
                                <SocialIcon network="medium" target="_blank" rel="noopener noreferrer" />
                                <SocialIcon network="instagram" target="_blank" rel="noopener noreferrer" />
                            </div>
                            <hr className="clearfix w-100 d-md-none pb-0" />
                        </div>
                    </div>

                    <div className="footer-copyright text-center py-3">Copyright © 2022 Turkey Java Community
                    </div>

                </footer>
            </div>);
    }
}
