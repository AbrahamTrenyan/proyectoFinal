import './Home.css'
import Header from '../../Components/Header'
import imgLaptop from '../../assets/img/categorias/categoria-laptops.jpg'
import imgSmartwatches from '../../assets/img/categorias/categoria-smartwatchesjpg (1).jpg'
import imgAudio from '../../assets/img/categorias/categoria-audio.jpg'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar';
import Ofertas4 from '../../Components/Ofertas'
import Ofertas from '../../Components/Ofertas'
import contacto from '../../assets/img/categorias/contacto.jpg'
const Home = () => {
    return (    
    <>  
        <Header />
        <main>
            <section id="seccion-categorias" className="card-categorias container d-flex justify-content-evenly flex-wrap">
                <Link to="/laptops" className='linkTituloCategoria'>
                    <div className="card border-none mt-3" style={{width: '18rem'}}>
                        <img src={imgLaptop} className="card-img-top h-cards border-3 border-color imagenCategoria" alt="Imagen de una laptop" />
                        <div className="card-body text-center mt-3">
                            <h5 className="card-title">Laptops</h5>
                            <p className="card-text text-muted">Apple - Hp - Lenovo</p>
                        </div>
                    </div>
                </Link>
                <Link to="/smartwatches" className='linkTituloCategoria'>
                    <div className="card border-none mt-3" style={{width: '18rem'}}>
                        <img src={imgSmartwatches} className="card-img-top h-cards border-3 border-color imagenCategoria" alt="Imagen de una laptop" />
                        <div className="card-body text-center mt-3">
                            <h5 className="card-title ">Smartwatches</h5>
                            <p className="card-text text-muted ">Samsung - Apple - Xiaomi</p>
                        </div> 
                    </div>
                </Link>
                <Link to="/audio" className='linkTituloCategoria'>
                    <div className="card border-none mt-3" style={{width: '18rem'}}>
                        <img src={imgAudio} className="card-img-top h-cards border-3 border-color imagenCategoria" alt="Imagen de una laptop" />
                        <div className="card-body text-center mt-3">
                            <h5 className="card-title">Audio</h5>
                            <p className="card-text text-muted">JBL - Xiaomi - Philco</p>
                        </div>
                    </div>
                </Link>
            </section>

            <section id="seccion-ofertas" className="seccion-ofertas">
                <h2 className="text-center mt-3">Aprovecha nuestras ultimas ofertas!</h2>
                <Ofertas/>
            </section>

            <section id="seccion-info" className="d-flex justify-content-evenly flex-wrap mb-5">
                <div className="card border-none mt-3" style={{width: '18rem'}}>
                    <i className="bi bi-truck text-center p-2 iconito"></i>
                    <div className="card-body text-center ">
                        <h5 className="card-title">Envio Gratis</h5>
                        <p className="card-text text-muted">Todos nuestros productos cuentan con envío 100% gratis por Correo Argentino y Moto Mensajería a todo el país.</p>
                    </div>
                </div>
                <div className="card border-none mt-3" style={{width: '18rem'}}>
                    <i className="bi bi-patch-check text-center iconito"></i>
                    <div className="card-body text-center ">
                        <h5 className="card-title">Garantia</h5>
                        <p className="card-text text-muted">En caso de querer o necesitar cambiar un producto, el costo del envío por cambio corre por cuenta del cliente(salvo por fallas en el producto), y se efectúa siempre y cuando el producto devuelto se encuentre en su empaque original, sin usar, y con todos sus accesorios.</p>
                    </div>
                </div>
                <div className="card border-none mt-3" style={{width: '18rem'}}>
                    <i className="bi bi-credit-card-2-front text-center iconito"></i>
                    <div className="card-body text-center ">
                        <h5 className="card-title">Medios de Pago</h5>
                        <p className="card-text text-muted">Aceptamos TODOS los métodos de pago, desde MercadoPago, incluyendo todas las tarjetas de crédito y débito, transferencia, y efectivo en Rapipago o Pago Fácil.</p>
                    </div>
                </div>
            </section>

            <section id="seccion-nosotros/contacto" className="seccion-ofertas">
                <div className="row ">
                    <div className="col-md-6 col-sm-12 d-flex flex-wrap justify-content-center align-items-center text-center">
                        <h2 className="pt-5 mb-4">Sobre nosotros</h2>
                        <img src={contacto} className='img-contacto mb-4'/>
                        <p className="px-5 mb-4">Somos tres socios en un emprendimiento con un objetivo muy claro: conseguir los accesorios más demandados del mercado y distribuirlos al mejor precio, por mayor y por menor. 
                            Nuestros valores, la transparencia, compromiso, y amabilidad con nuestros clientes.
                            Nuestra visión: competir, crecer, y estar a la altura de las demandas del mercado actual.
                        </p>
                    </div>
                    <div className="col-md-6 col-sm-12 text-start p-5">
                        <div className="text-center">
                            <h2 className='mt-4'>Contactanos</h2>
                            <h3 className='mt-3'>Ante cualquier duda no dude en consultar</h3>
                        </div>
                        <form action="https://submit-form.com/VoG37Uu9" className="w-75 d-inline">
                            <div className="mb-3">
                                <label for="name" className="form-label">Nombre</label>
                                <input type="text" pattern="[A-Za-z]"name="name" className="form-control" id="name" />
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label">Email</label>
                                <input type="email"  name="email" className="form-control" placeholder="ejemplo@gmail.com" id="email" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label for="comentarios" className="form-label">Dejanos alguna pregunta o comentario</label>
                                <textarea className="form-control" name="comentarios" rows="5" cols="10" placeholder="Comentario" id="comentarios" ></textarea>
                            </div>
                            <div className='d-flex justify-content-center'>
                            <button type="submit" className="boton">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    </>
    );
}
export default Home;