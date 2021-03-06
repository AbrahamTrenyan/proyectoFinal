import {createContext, useEffect, useState } from 'react';
import producto1 from '../assets/img/productos/producto1.jpg'
import producto1b from '../assets/img/productos/producto1b.jpg'
import producto2 from '../assets/img/productos/producto2.jpg'
import producto2b from '../assets/img/productos/producto2b.jpg'
import producto3 from '../assets/img/productos/producto3.jpg'
import producto3b from '../assets/img/productos/producto3b.jpg'
import producto4 from '../assets/img/productos/producto4.jpg'
import producto4b from '../assets/img/productos/producto4b.jpg'
import producto5 from '../assets/img/productos/producto5.jpg'
import producto5b from '../assets/img/productos/producto5b.jpg'
import producto6 from '../assets/img/productos/producto6.jpg'
import producto6b from '../assets/img/productos/producto6b.jpg'
import producto7 from '../assets/img/productos/producto7.jpg'
import producto7b from '../assets/img/productos/producto7b.jpg'
import producto8 from '../assets/img/productos/producto8.jpg'
import producto8b from '../assets/img/productos/producto8b.jpg'
import producto9 from '../assets/img/productos/producto9.jpg'
import producto9b from '../assets/img/productos/producto9b.jpg'
import producto10 from '../assets/img/productos/producto10.jpg'
import producto10b from '../assets/img/productos/producto10b.jpg'
import producto11 from '../assets/img/productos/producto11.jpg'
import producto11b from '../assets/img/productos/producto11b.jpg'
import producto12 from '../assets/img/productos/producto12.jpg'
import producto12b from '../assets/img/productos/producto12b.jpg'
import producto13 from '../assets/img/productos/producto13.jpg'
import producto13b from '../assets/img/productos/producto13b.jpg'
import producto14 from '../assets/img/productos/producto14.jpg'
import producto14b from '../assets/img/productos/producto14b.jpg'
import producto15 from '../assets/img/productos/producto15.jpg'
import producto15b from '../assets/img/productos/producto15b.jpg'
import producto16 from '../assets/img/productos/producto16.jpg'
import producto16b from '../assets/img/productos/producto16b.jpg'
import producto17 from '../assets/img/productos/producto17.jpg'
import producto17b from '../assets/img/productos/producto17b.jpg'
import producto18 from '../assets/img/productos/producto18.jpg'
import producto18b from '../assets/img/productos/producto18b.jpg'
import producto19 from '../assets/img/productos/producto19.jpg'
import producto19b from '../assets/img/productos/producto19b.jpg'

export const Context = createContext(null)
const UserProvider = ({children}) => {

    const [usuario, setUsuario] = useState('Mi cuenta');

    const [busqueda, setBusqueda] = useState("")
    const [buscados, setBuscados] =useState([])
    const [carrito, setCarrito] = useState([])
    const handleChange = (e) =>{
        e.preventDefault()
        setBusqueda(e.target.value)
    }
    const [productsList, setProductsList] = useState([{
        id: 1,
        nombre: "Notebook Exo Smart XL4-H3548 gris 15.6",
        descripcion:"La notebook Exo Smart XL4-H3548 es una soluci??n tanto para trabajar y estudiar como para entretenerte. Al ser port??til, el escritorio dejar?? de ser tu ??nico espacio de uso para abrirte las puertas a otros ambientes ya sea en tu casa o en la oficina.",
        categoria:"laptops",
        precio: 79.999,
        stock: 100,
        imagen: producto1,
        otraImagen: producto1b,
        oferta:false,
    },
    {
        id: 2,
        nombre: "Notebook Lenovo IdeaPad 15IML05 abyss blue t??ctil 15.6",
        descripcion:"La notebook Lenovo IdeaPad 3 fue pensada para hacer tu vida m??s sencilla. Su dise??o elegante e innovador y su comodidad para transportarla, la convertir?? en tu PC favorita. Cualquier tarea que te propongas, ya sea en casa o en la oficina, la har??s con facilidad gracias a su poderoso rendimiento.",
        categoria:"laptops",
        precio: 90.999,
        stock: 100,
        imagen: producto2,
        otraImagen: producto2b,
        oferta:true,
    },
    {
        id: 3,
        nombre: "Notebook Dell Inspiron 3505 plata 15.6",
        descripcion:"Los equipos Dell se destacan por ofrecer soluciones reales para cada una de las necesidades. Ya sea para conectarte, entretenerte, trabajar o colaborar de manera online, podr??s hacerlo de forma segura desde cualquier lugar y en cualquier momento.",
        categoria:"laptops",
        precio: 93.999,
        stock: 100,
        imagen: producto3,
        otraImagen: producto3b,
        oferta:false,
    },
    {
        id: 4,
        nombre: "Notebook Asus VivoBook X543UA gris oscura 15.6",
        descripcion:"Disfrut?? de la perfecta combinaci??n de rendimiento y dise??o con esta notebook Asus VivoBook X543UA. Encontrar??s en ella una excelente herramienta para tus trabajos de todos los d??as y para tus momentos de entretenimiento. Aprovech?? la experiencia extraordinaria que la marca tiene para ofrecerte y optimiz?? la calidad de tus im??genes y videos.",
        categoria:"laptops",
        precio: 109.999,
        stock: 100,
        imagen: producto4,
        otraImagen: producto4b,
        oferta:false,
    },
    {
        id: 5,
        nombre: "Notebook Asus Vivobook 15 I5-1135g7 8gb 256gb Pcie 15.6 Ips Sin Sistema Operativo",
        descripcion:"Disfrut?? de la perfecta combinaci??n de rendimiento y dise??o con esta notebook Asus VivoBook K513EA-BN796. Encontrar??s en ella una excelente herramienta para tus trabajos de todos los d??as y para tus momentos de entretenimiento. Aprovech?? la experiencia extraordinaria que la marca tiene para ofrecerte y optimiz?? la calidad de tus im??genes y videos.        ",
        categoria:"laptops",
        precio: 107.999,
        stock: 100,
        imagen: producto5,
        otraImagen: producto5b,
        oferta:false,
    },
    {
        id: 6,
        nombre: "Notebook HP 15-EF2127WM silver 15.6 AMD Ryzen 5 5500U 8GB de RAM 256GB SSD, AMD Radeon RX Vega 7 1920x1080px Windows 10 Home",
        descripcion:"La notebook HP 15-EF2127WM es una soluci??n tanto para trabajar y estudiar como para entretenerte. Al ser port??til, el escritorio dejar?? de ser tu ??nico espacio de uso para abrirte las puertas a otros ambientes ya sea en tu casa o en la oficina",
        categoria:"laptops",
        precio: 95.499,
        stock: 100,
        imagen: producto6,
        otraImagen: producto6b,
        oferta:false,
    },
    {
        id: 7,
        nombre: "Notebook Acer Aspire 1 A115-32 pure silver 15.6 Intel Celeron N4500 4GB de RAM 128GB SSD, Intel UHD Graphics 1920x1080px Windows 10 Home",
        descripcion:"La notebook Acer Aspire 1 A115-32 es una soluci??n tanto para trabajar y estudiar como para entretenerte. Al ser port??til, el escritorio dejar?? de ser tu ??nico espacio de uso para abrirte las puertas a otros ambientes ya sea en tu casa o en la oficina.",
        categoria:"laptops",
        precio: 54.059,
        stock: 100,
        imagen: producto7,
        otraImagen: producto7b,
        oferta:false,
    },
    {
        id: 8,
        nombre: "Parlante JBL Go 2 port??til con bluetooth deep sea blue 110V/220V ",
        descripcion:"El parlante port??til JBL Go 2 tiene todas las funciones que necesit??s para llevarlo y usarlo en cualquier lugar. Con el bluetooth vas a tener la facilidad de poner m??sica desde tu smartphone, tablet o computadora. Pero adem??s, tiene una funci??n espec??fica para conferencias telef??nicas, que cancela el ruido del ambiente y ofrece un sonido claro y n??tido de la voz.",
        categoria:"audio",
        precio: 5.999,
        stock: 100,
        imagen: producto8,
        otraImagen: producto8b,
        oferta:true,
    },
    {
        id: 9,
        nombre: "Micr??fono HyperX QuadCast condensador multipatr??n negro",
        descripcion:"Con el micr??fono HyperX descubrir??s una nueva forma de captar y emitir audios.Fiel reflejo de la realidad.Ideal para varias actividades. Te brindar?? un sonido de calidad y conseguir??s la nitidez de las voces. Al ser condensador, posibilitar?? un resultado claro y fino. Es ideal para percusiones, guitarras, pianos, entre otros. Por su respuesta tan definida ante la voz, es el m??s elegido por los profesionales. ??Animate y empez?? a disfrutar de las herramientas est??ndar del mercado!",
        categoria:"audio",
        precio: 14.999,
        stock: 100,
        imagen: producto9,
        otraImagen: producto9b,
        oferta:false,
    },
    {
        id: 10,
        nombre: "Auriculares inal??mbricos Sony WH-1000XM4 silver",
        descripcion:"Sony, sin lugar a dudas es una de las marcas m??s reconocidas en el mundo por la fabricaci??n de dispositivos de audio. Su gama de auriculares se caracteriza por brindar siempre una gran experencia de uso en sus usuarios y ofrecer una alta calidad en todos los componentes de sus reproductores. Esto hace que puedas notar un gran sonido desde su primer uso.",
        categoria:"audio",
        precio: 39.999,
        stock: 100,
        imagen: producto10,
        otraImagen: producto10b,
        oferta:true,
    },
    {
        id: 11,
        nombre: "Auriculares inal??mbricos Sony WH-CH510 negro",
        descripcion:"Sony, sin lugar a dudas es una de las marcas m??s reconocidas en el mundo por la fabricaci??n de dispositivos de audio. Su gama de auriculares se caracteriza por brindar siempre una gran experencia de uso en sus usuarios y ofrecer una alta calidad en todos los componentes de sus reproductores. Esto hace que puedas notar un gran sonido desde su primer uso.",
        categoria:"audio",
        precio: 4.999,
        stock: 100,
        imagen: producto11,
        otraImagen: producto11b,
        oferta:true,
    },
    {
        id: 12,
        nombre: "Auriculares in-ear inal??mbricos Xiaomi Redmi AirDots 2 negro",
        descripcion:"Xiaomi, marca de origen china nacida en 2010 es nueva en relaci??n con otras compa????as. Sin embargo, esta corporaci??n asi??tica creci?? a pasos agigantados y hoy en d??a es una referente en el mundo de la electr??nica. En cuanto a la gama de audio, fabrica auriculares de todo tipo: ergon??micos, intrauditivos, inal??mbricos o con cable. Cualquier opci??n que elijas ser?? suficiente para disfrutar de una calidad de sonido inigualable.",
        categoria:"audio",
        precio: 3.499,
        stock: 100,
        imagen: producto12,
        otraImagen: producto12b,
        oferta:true,
    },{
        id: 13,
        nombre: "Auriculares inal??mbricos Sony WH-XB700 blue",
        descripcion:"Sony, sin lugar a dudas es una de las marcas m??s reconocidas en el mundo por la fabricaci??n de dispositivos de audio. Su gama de auriculares se caracteriza por brindar siempre una gran experencia de uso en sus usuarios y ofrecer una alta calidad en todos los componentes de sus reproductores. Esto hace que puedas notar un gran sonido desde su primer uso.",
        categoria:"audio",
        precio: 14.999,
        stock: 100,
        imagen: producto13,
        otraImagen: producto13b,
        oferta:false,
    },
    {
        id: 14,
        nombre: "Parlante Xiaomi Mi Portable Bluetooth Speaker (16W) negro",
        descripcion:"Xiaomi Mi Portable Bluetooth Speaker (16W) ofrece un sonido natural, con una gran claridad y precisi??n, que se dispersa de manera uniforme. Un parlante que asegura potencia y calidad por igual en la reproducci??n de contenidos multimedia.",
        categoria:"audio",
        precio: 11.499,
        stock: 100,
        imagen: producto14,
        otraImagen: producto14b,
        oferta:false,
    },
    {
        id: 15,
        nombre: "Parlante JBL Flip 5 port??til con bluetooth black matte",
        descripcion:"Con el parlante JBL Flip 5, sentir??s y disfrutar??s la m??sica donde vos quieras. Tiene un formato peque??o y liviano para que lo lleves a todos lados y ofrece graves resonantes con el fin de que suene bien.",
        categoria:"audio",
        precio: 19.349,
        stock: 100,
        imagen: producto15,
        otraImagen: producto15b,
        oferta:false,
    },
    {
        id: 16,
        nombre: "Smartwatch Amazfit Fashion GTR 2 Classic Edition 1.39",
        descripcion:"Los smartwatches de Amazfit pisan fuerte: dise??o moderno y funcionalidad se combinan para una gran experiencia. La pantalla se destaca frente a otros relojes por su calidad y buena visualizaci??n, incluso a plena luz del d??a. Adem??s, poseen modalidades deportivas muy ??tiles para todo tipo de entrenamientos.",
        categoria:"smartwatch",
        precio: 23.999,
        stock: 100,
        imagen: producto16,
        otraImagen: producto16b,
        oferta:false,
    },
    {
        id: 17,
        nombre: "Smart Watch Reloj Inteligent Mujer P/ Samsung Xiaom Motorola",
        descripcion:"Compatible con tel??fonos con tecnolog??a Bluetooth para dispositivos con Android 5.0 o superior y iOS 9.0 en adelante (Samsung, Xiaomi, iPhone, Motorola, Sony, Huawei, LG, entre otros).",
        categoria:"smartwatch",
        precio: 5.999,
        stock: 100,
        imagen: producto17,
        otraImagen: producto17b,
        oferta:false,
    },
    {
        id: 18,
        nombre: "Smartwatch Imilab KW66 Smart Watch 1.28",
        descripcion:"Descans?? mejor, rend?? m??s. Gracias a la funci??n de monitoreo del sue??o podr??s aprender m??s acerca de tus h??bitos por las noches y la calidad de tu descanso para que puedas rendir mejor al d??a siguiente.",
        categoria:"smartwatch",
        precio: 5.179,
        stock: 100,
        imagen: producto18,
        otraImagen: producto18b,
        oferta:false,
    },
    {
        id: 19,
        nombre: "Smartwatch Soundpeats Watch 1 1.4",
        descripcion:"Gracias a la funci??n de monitoreo del sue??o podr??s aprender m??s acerca de tus h??bitos por las noches y la calidad de tu descanso para que puedas rendir mejor al d??a siguiente.",
        categoria:"smartwatch",
        precio: 4.999,
        stock: 100,
        imagen: producto19,
        otraImagen: producto19b,
        oferta:false,
    }
])
return (
    <Context.Provider value ={{productsList,setProductsList, busqueda, usuario, setUsuario, setBusqueda, buscados, setBuscados, handleChange, carrito, setCarrito}}>
        {children}
    </Context.Provider>
)
}
export default UserProvider 
