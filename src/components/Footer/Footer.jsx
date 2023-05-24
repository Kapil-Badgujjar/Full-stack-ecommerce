import "./Footer.scss";

import {FaLocationArrow, FaMobileAlt, FaEnvelope} from "react-icons/fa";
import Payment from '../../assets/Payments.png';

const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde non debitis aut animi dolorum ex repellat officiis error obcaecati? Vitae recusandae inventore hic corporis esse quasi, consectetur iusto doloremque sunt?</div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow />
                    <div className="text">Address: VPO Jahazgarh, Jhajjar, Haryana</div>
                </div>
                <div className="c-item">
                    <FaMobileAlt />
                    <div className="text">Phone: +91 7988229811</div>
                </div>
                <div className="c-item">
                    <FaEnvelope />
                    <div className="text">Email: kapilbadgujjar99@gmail.com</div>
                </div>
            </div>
            <div className="col">
                <div className="title">Categories</div>
                <div className="text">Headphones</div>
                <div className="text">Smart Watches</div>
                <div className="text">Bluetooth Speakers</div>
                <div className="text">Wireless Earbuds</div>
                <div className="text">Home Threaters</div>
                <div className="text">Projectors</div>
            </div>
            <div className="col">
                <div className="title">Pages</div>
                <div className="text">Home</div>
                <div className="text">Abouts</div>
                <div className="text">Privacy Policy</div>
                <div className="text">Returns</div>
                <div className="text">Terms & Conditions</div>
                <div className="text">Contact Us</div>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    SuperMART 2023 CREATED BY KAPIL_BADGUJJAR PREMIUM E-COMMERCE SOLUTIONS.
                </div>
                <img src={Payment}/>
            </div>
        </div>
    </footer>;
};

export default Footer;
