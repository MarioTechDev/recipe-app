import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlinePhone, AiOutlineInstagram, AiOutlineMail, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';
import { ImLocation } from 'react-icons/im';
import { FaXTwitter } from 'react-icons/fa6';
import './Footer.css'
const Footer = () => {
    const [year, setYear] = useState();

    const currentYear = () => {
        const date = new Date();
        const currentYear = date.getFullYear();
        const nextYear = (currentYear + 1).toString().slice(-2);
        setYear(`${currentYear}-${nextYear}`);
        return;
    };

    useEffect(() => currentYear, []);

    return (
        <footer className="footer-distributed">

            <div className="footer-left">

                <h3>Companylogo</h3>

                <p className="footer-links">
                    <Link to="/" className="link-1">
                        Home
                    </Link>

                    <Link to="/about">
                        About
                    </Link>

                    <Link to="/faq">
                        Faq
                    </Link>

                    <Link to="/contact">
                        Contact
                    </Link>
                </p>

                <p className="footer-company-name">Company Name © {year}</p>
            </div>

            <div className="footer-center">

                <div>
                    <ImLocation />
                    <p>info</p>
                </div>

                <div>
                    <AiOutlinePhone />
                    <p>info</p>
                </div>

                <div>
                    <AiOutlineMail />
                    <p>info</p>
                </div>

            </div>

            <div className="footer-right">

                <p className="footer-company-about">
                    <span>About the company</span>
                    Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                </p>

                <div className="footer-icons">

                    <AiFillFacebook />
                    <FaXTwitter />
                    <AiFillLinkedin />
                    <AiOutlineInstagram />

                </div>

            </div>

        </footer>
    );
};

export default Footer;
