import './Header.css'
const Header = () => {
    return ( 
        <div className="container-header">
            <h1 className='title'>Electro Argentina</h1>
            <p className='slogan'>Encontrá ése dispositivo que estabas buscando, al mejor precio.</p>
            <a href="#seccion-nosotros/contacto" className='button-style btn1'>Contactános</a>
        </div>
     );
}
export default Header;