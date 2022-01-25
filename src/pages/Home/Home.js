import './Home.css'
import Header from '../../Components/Header'

const Home = () => {
    return (    
    <>
        <Header />

        <section id="seccion-categorias">
            <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="Imagen de una laptop" />
                <div class="card-body">
                    <h5 class="card-title">Laptops</h5>
                    <p class="card-text text-muted">Apple - Hp - Lenovo</p>
                </div>
            </div>
        </section>
    </>
    );
}
 
export default Home;