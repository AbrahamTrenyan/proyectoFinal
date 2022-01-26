import './Footer.css'
import {Link} from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="footer-container">
            <p className="d-flex justify-content-center footer-text">Hecho por Ramiro Mijalovich, Abraham Trenyan y Netanel Toussie © . </p>
            <div className="d-flex justify-content-center social-media">
               <Link to="https://www.instagram.com"><i className="bi bi-instagram color-item"></i></Link>
               <Link to="https://www.facebook.com"><i className="bi bi-facebook color-item"></i></Link>
               <Link to="https://www.twitter.com"><i className="bi bi-twitter color-item"></i></Link>
               <Link to="https://www.youtube.com"><i className="bi bi-youtube color-item"></i></Link>
            </div>
        </footer>
    );
}

export default Footer;