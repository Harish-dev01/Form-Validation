import React from "react";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';  

function Header() {
    const navigate = useNavigate();
    const reg = () => {
        navigate('/register');
    };

    const log = () => {
        navigate("/login");
    }

    const movetohome = () => {
        navigate("/");
    }

    return (
        <div>
            {/* Header Section */}
            <div className="container-fluid p-3 bg-primary text-white">
                <div className="d-flex justify-content-between align-items-center">
                    {/* Logo and Title */}
                    <div>
                        <h1>Leadsense</h1>
                        <p className="mb-0">Empowering your business growth</p>
                    </div>
                    
                    {/* Navigation Links */}
                    <ul className="nav-links d-flex list-unstyled mb-0">
                        <li className="me-3">
                            <a className="text-black btn btn-light" onClick={movetohome} href="#">Home</a>
                        </li>
                        
                        <li className="me-3">  
                            <button className="btn btn-light" onClick={reg}>Register</button>
                        </li>
                        <li className="me-3"> 
                            <button className="text-black btn btn-light" onClick={log}>Login</button>
                        </li>
                        <li className="me-3">
                            <a className="text-black btn btn-light" href="#">Company Register</a>
                        </li>
                        <li>
                            <button className="btn btn-outline-light">Profile</button>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Cards Section */}
            <div className="container mt-4">
                <div className="row">
                    {/* About Us Card */}
                    <div className="col-md-4">
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title">About Us</h5>
                                <p className="">Learn more about our mission to help businesses thrive and grow.</p>
                                <a href="#" className="btn btn-primary">Learn More</a>
                            </div>
                        </div>
                    </div>

                    {/* Services Card */}
                    <div className="col-md-4">
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title">Our Services</h5>
                                <p className="card-text">Explore the range of services we offer to support your business.</p>
                                <a href="#" className="btn btn-primary">View Services</a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Card */}
                    <div className="col-md-4">
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title">Contact Us</h5>
                                <p className="card-text">Have questions? Reach out to our team for more information.</p>
                                <a href="#" className="btn btn-primary">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
