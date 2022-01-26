import './Footer.css'
const Footer = () => {
    return (
        <footer className="footer-container">
            <p className="d-flex justify-content-center footer-text">Hecho por Ramiro Mijalovich, Abraham Trenyan y Netanel Toussie © . </p>
            <div className="d-flex justify-content-center social-media">
               <a href="https://www.instagram.com"><i className="bi bi-instagram color-item"></i></a>
               <a href="https://www.facebook.com"><i className="bi bi-facebook color-item"></i></a>
               <a href="https://www.twitter.com"><i className="bi bi-twitter color-item"></i></a>
               <a href="https://www.youtube.com"><i className="bi bi-youtube color-item"></i></a>
            </div>
        </footer>
    );
}

export default Footer;