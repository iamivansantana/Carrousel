import React from 'react';
import Carrousel from './components/carrousel/Carrousel';
import './AppScreen.css';



const AppScreen = () => {
    return (
        <>
            <div className="contenedor-body">
                <div className="flex-center">

                            {/* Carrousel id = "El id recibe un number o un string y debe ser diferente en cada Carrousel para poder tener mas de un Carrousel en nuestra proyecto"; id -> SI es obligatorio */}
                            {/* Carrousel slidesToShow =  "slidesToShow recibe un number y es la cantidad de elementos (items) que se mostrarán en el Carrousel, el resto seran los que se visualizaran al hacer scroll; slidesToShow -> SI es obligatorio " */}
                            {/* Carrousel slidesToShowOnMovil = "slidesToShowOnMovil recibe un number y es la cantidad de elementos (items) que se mostrarán en el carrusel cuando el width sea menor o igual a 500 px ( Version Mobil ); slidesToShowOnMovil -> NO es obligatorio, por defecto esta inicializado en 1, si desea mostrar más items sí es obligatorio" */}
                            {/* Carrousel slidesToScroll = "slidesToScroll recibe un number y es la cantidad de Elemtos (items) por los que se recorrera el carrusel ";  slidesToScroll -> NO es obligatorio, por defecto esta inicializado en 1, si desea recorrer por más items sí es obligatorio" */}
                            {/* Carrousel items = "items recibe una string que debe ser una clase (incluir el punto inicial ejemplo-> '.image-picture'); La clase recibida debe ser extrictamente la de los elementos dentro del Carrousel; items -> SI es obligatorio " */}
                            {/* Carrousel arrowPrev = "arrowPrev recibe un id y es el id del elemento o button que ejecutara el scroll para retroceder al anterior item; arrowPrev -> No es obligatorio si no desea incluir los botones que controlan el scroll pero SI es obligatorio si desea incluir los botones que controlan el scroll" */}
                            {/* Carrousel arrowNext = "arrowNext recibe un id y es el id del elemento o button que ejecutara el scroll para avanzar al siguiente item; arrowNext -> No es obligatorio si no desea incluir los botones que controlan el scroll pero SI es obligatorio si desea incluir los botones que controlan el scroll" */}
                            {/* Carrousel puntos = "puntos recibe un id y es el id del elemento div en donde se mostraran los puntos de progreso"; puntos -> SI es obligatorio */}
                        <Carrousel
                            id={123}
                            slidesToShow = {4}
                            // slidesToShowOnMovil = {2}
                            // slidesToScroll = {1}
                            items = {'.image-picture'}
                            arrowPrev = {'carrusel-btnPrev'}
                            arrowNext = {'carrusel-btnNext'}
                            puntos = {'carruselPuntos'}
                        >
                            {/* Para una mejor experiencia de desplazamiento agregar el propiedad (scroll-snap-align: end;) en la clase image-picture */}
                            <div className="image-picture"> <img src="\assets\imagenesCarrousel\imagen1.jpg" alt="imagen1"/> </div>
                            <div className="image-picture"> <img src="\assets\imagenesCarrousel\imagen2.jpg" alt="imagen2"/> </div>
                            <div className="image-picture"> <img src="\assets\imagenesCarrousel\imagen7.jpg" alt="imagen7"/> </div>
                            <div className="image-picture"> <img src="\assets\imagenesCarrousel\imagen3.jpg" alt="imagen3"/> </div>
                            <div className="image-picture"> <img src="\assets\imagenesCarrousel\imagen4.jpg" alt="imagen4"/> </div>
                            <div className="image-picture"> <img src="\assets\imagenesCarrousel\imagen5.jpg" alt="imagen5"/> </div>
                            <div className="image-picture"> <img src="\assets\imagenesCarrousel\imagen8.jpg" alt="imagen8"/> </div>
                        </Carrousel>

                </div>
                
                {/* Elemento div en donde se muestran los puntos de progreso */}
                <div className="style-puntos" id="carruselPuntos"/>

                {/* Botones de control (atras,siguiente) */}
                <div style={{margin:'1rem'}}>
                    <button className="style-button" id="carrusel-btnPrev">{`<`}</button>
                    <button className="style-button" id="carrusel-btnNext">{`>`}</button>
                </div>
            </div>
        </>
    )
}

export default AppScreen;
