import './Home.css'
import Header from '../../Components/Header'
import imgLaptop from '../../assets/img/categorias/categoria-laptops.jpg'
import imgSmartwatches from '../../assets/img/categorias/categoria-smartwatchesjpg (1).jpg'
import imgAudio from '../../assets/img/categorias/categoria-audio.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
    return (    
    <>
        <Header />

        <section id="seccion-categorias" className="card-categorias container d-flex justify-content-evenly flex-wrap">
            <div className="card border-none mt-3" style={{width: '18rem'}}>
                <img src={imgLaptop} className="card-img-top h-cards border-3 border-color" alt="Imagen de una laptop" />
                <div className="card-body text-center mt-3">
                    <h5 className="card-title">Laptops</h5>
                    <p className="card-text text-muted">Apple - Hp - Lenovo</p>
                </div>
            </div>
            <div className="card border-none mt-3" style={{width: '18rem'}}>
                <img src={imgSmartwatches} className="card-img-top h-cards border-3 border-color" alt="Imagen de una laptop" />
                <div className="card-body text-center mt-3">
                    <h5 className="card-title">Smartwatches</h5>
                    <p className="card-text text-muted">Samsung - Apple - Xiaomi</p>
                </div>
            </div>
            <div className="card border-none mt-3" style={{width: '18rem'}}>
                <img src={imgAudio} className="card-img-top h-cards border-3 border-color" alt="Imagen de una laptop" />
                <div className="card-body text-center mt-3">
                    <h5 className="card-title">Audio</h5>
                    <p className="card-text text-muted">JBL - Xiaomi - Philco</p>
                </div>
            </div>
        </section>
    </>
    );
}
 
export default Home;