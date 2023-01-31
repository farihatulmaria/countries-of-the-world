import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { TfiLinkedin } from 'react-icons/tfi';
const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-white text-base-content">
                <div>
                    <span className="footer-title">Services</span> 
                    <a className="link link-hover" href='/'>Branding</a> 
                    <a className="link link-hover" href='/'>Design</a> 
                    <a className="link link-hover" href='/'>Marketing</a> 
                    <a className="link link-hover" href='/'>Advertisement</a>
                </div> 
                <div>
                    <span className="footer-title">Company</span> 
                    <a className="link link-hover" href='/'>About us</a> 
                    <a className="link link-hover" href='/'>Contact</a> 
                    <a className="link link-hover" href='/'>Jobs</a> 
                    <a className="link link-hover" href='/'>Press kit</a>
                </div> 
                <div>
                    <span className="footer-title">Legal</span> 
                    <a className="link link-hover"href='/'>Terms of use</a> 
                    <a className="link link-hover"href='/'>Privacy policy</a> 
                    <a className="link link-hover"href='/'>Cookie policy</a>
                </div>
            </footer> 
            <footer className="footer items-center p-4 bg-white text-black-content">
                <div className="items-center grid-flow-col">
                    <p>Copyright © 2023 - All right reserved</p>
                </div> 
                <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a href='/'><BsFacebook/></a>
                    <a href="/"><TfiLinkedin/></a>
                </div>
            </footer>
        
        </>
    );
};

export default Footer;