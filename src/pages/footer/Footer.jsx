import './Footer.css'
import { BsGithub } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <div className='footer-text'>
                    <p className="logo-footer">E-Learn</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias impedit illum sunt a ipsam cum hic qui dignissimos?</p>
                </div>
                <div className="footer-socials">
                    <BsGithub className='footer-links'/>
                    <AiFillTwitterCircle className='footer-links'/>
                    <BsFacebook className='footer-links'/>
                    <BsInstagram className='footer-links'/>
                </div>
            </div>
            <div className="company">
                <p className="footer-col">Company</p>
                <a href="#">Home</a>
                <a href="#">Features</a>
                <a href="#">Services</a>
                <a href="#">About Us</a>
                <a href="#">Contact Us</a>
            </div>
            <div className="contact">
                <p className="footer-col">Contact</p>
                <a href="#">(3393) 333-333-333</a>
                <a href="#">www.otherinfo.com</a>
                <a href="#">otherinfo@gmail.com</a>

            </div>
            <div className="get-information">
                <p className="footer-col">Get the latest Informations</p>
                <input type="email" placeholder='Email address'/>
            </div>
        </div>
    )
}

export default Footer
