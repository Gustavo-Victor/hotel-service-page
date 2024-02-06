
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; 
import "./style.css"; 

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    LOGO
                </div>

                <ul className="footer-list">
                    <li className="footer-item"><a className="footer-link facebook" href="#"><FaFacebook/></a></li>
                    <li className="footer-item"><a className="footer-link instagram" href="#"><FaInstagram /></a></li>
                    <li className="footer-item"><a className="footer-link twitter" href="#"><FaTwitter /></a></li>
                </ul>
            </div>
        </footer>
    )
}