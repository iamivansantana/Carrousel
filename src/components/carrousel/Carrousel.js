import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Carrousel.css';

            // eslint-disable-next-line
         {/* Carrousel id = "El id recibe un number o un string y debe ser diferente en cada Carrousel para poder tener mas de un Carrousel en nuestra proyecto"; id -> SI es obligatorio 
             Carrousel slidesToShow =  "slidesToShow recibe un number y es la cantidad de elementos (items) que se mostrarán en el Carrousel, el resto seran los que se visualizaran al hacer scroll; slidesToShow -> SI es obligatorio " 
             Carrousel slidesToShowOnMovil = "slidesToShowOnMovil recibe un number y es la cantidad de elementos (items) que se mostrarán en el carrusel cuando el width sea menor o igual a 500 px ( Version Mobil ); slidesToShowOnMovil -> NO es obligatorio, por defecto esta inicializado en 1, si desea mostrar más items sí es obligatorio" 
             Carrousel slidesToScroll = "slidesToScroll recibe un number y es la cantidad de Elemtos (items) por los que se recorrera el carrusel ";  slidesToScroll -> NO es obligatorio, por defecto esta inicializado en 1, si desea recorrer por más items sí es obligatorio" 
             Carrousel items = "items recibe una string que debe ser una clase (incluir el punto inicial ejemplo-> '.image-picture'); La clase recibida debe ser extrictamente la de los elementos dentro del Carrousel; items -> SI es obligatorio " 
             Carrousel arrowPrev = "arrowPrev recibe un id y es el id del elemento o button que ejecutara el scroll para retroceder al anterior item; arrowPrev -> No es obligatorio si no desea incluir los botones que controlan el scroll pero SI es obligatorio si desea incluir los botones que controlan el scroll" 
             Carrousel arrowNext = "arrowNext recibe un id y es el id del elemento o button que ejecutara el scroll para avanzar al siguiente item; arrowNext -> No es obligatorio si no desea incluir los botones que controlan el scroll pero SI es obligatorio si desea incluir los botones que controlan el scroll" 
             Carrousel puntos = "puntos recibe un id y es el id del elemento div en donde se mostraran los puntos de progreso"; puntos -> SI es obligatorio */}

const Carrousel = ({ id,slidesToShow,slidesToShowOnMovil=1,slidesToScroll=1,items,arrowPrev,arrowNext,puntos,children }) => {

    // Estado que guarda el punto de progreso que se debe mostrar como activo
    const [scrollL, setScrollL] = useState('spanDot0');

    // Estado de cantidad de dots (puntos de progreso)
    const [tamañoDots, settamañoDots] = useState(0);


    //Effecto para ejecutar el codigo cada que carga el componente, se ejecuta almenos una vez y despues de crear los elementos html.
        // Incluye la funcion para los botones Next & Back     
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        // Funcion regresa true si la pantalla cumple con el width indicado
            // max-width: 500px para version mobile
        function isSmallScreen() {
            return window.matchMedia('(max-width: 500px)').matches;
        }
        let slidesToShowValue;
        //Si la pantalla es menor a 500px (celular Vertical) solo muestra 1 Item por defailt o los n ingresados. Si no muestra los Item indicados en slidesToShow al crear el componente.
        if(isSmallScreen()){
            slidesToShowValue = slidesToShowOnMovil;
        }else{
            slidesToShowValue = slidesToShow;
        }

        //obtiene los elementos  #carruselContainerID y  #sliderID.
        let carruselContainer = document.querySelector(`#carruselContainer${id}`);
        let slider = document.querySelector(`#slider${id}`);
        //Obtiene Todos los items dentro del Componente (Carrousel).
        let itemsChild = document.querySelectorAll(items);

        //Obtiene los estilos (width) del item. (width y maxWidth)
        let itemStyles = document.querySelector(items);
        let elementStyle = window.getComputedStyle(itemStyles);
        let widthItem = elementStyle.getPropertyValue('width'); 
        
        //Condición que evalua si los items que están dentro del componente son >= que el valor de items a mostrar (slidesToShowValue) enviado al componente.
        if (itemsChild.length>=slidesToShowValue) {   
            //Si el numero de items dentro del componente es mayor o igual a slidesToShowValue se pueden mostrar correctamente.
            //Obtiene el width para el Carrusel mutiplicando el ancho de cada Item por el total de items a mostrar.
            const widthCarrusel = parseFloat(widthItem) * slidesToShowValue+'px';
            
            //Asigna valores al elemento carruselContainer.
            carruselContainer.style.width = widthCarrusel;
        } else {
            //De lo contrario se muestran solamente el total de items.
            const widthCarrusel = parseFloat(widthItem) * itemsChild.length+'px';
            //Asigna width al elemento carrusel
            carruselContainer.style.width = widthCarrusel;
        }


        //Funcion para calcular al crear el compoennte la cantidad de Dots (puntos de progreso) del carrusel
        const sizeDots = () => {
            
            // Variable para guardar el width del Carrusell que se muestra
            let widthCarrusell;
            if (itemsChild.length < slidesToShowValue) widthCarrusell = parseFloat(widthItem) * itemsChild.length; 
            else widthCarrusell = parseFloat(widthItem) * slidesToShowValue;

            // Formula para saber cuantos dots se necesitan
                // scrollWidth es todo el tamaño del scroll
            const scrollWidth = slider.scrollWidth;
                // itemWidth es el width del item
            const itemWidth = parseFloat(widthItem);

                // (scrollWidth-widthCarrusell) obtiene el tamaño del scroll escondido
                // ((scrollWidth-widthCarrusell)/itemWidth) obtiene el total de items escondidos.
                // al resultado se le suma 1 para indicar el dot de los item que se muestran por defecto (los no escondidos).
            const resultDots = 1+((scrollWidth-widthCarrusell)/itemWidth);

            // Retorna la cantidad de dots que necesita el carrousel
                // Math.round para redondear a entero el resultado
            return Math.round( resultDots);
        } 

        // Guada el tamaño de dots necesarios en una constante
        const tamañoDotsValue =sizeDots();
        // se actualiza el state con la constante
        settamañoDots(tamañoDotsValue);

        // CREAR DOTS (PUNTOS DE PROGRESO)
        // Obtiene el elemnto div donde se muestran los dots
        const puntosClass = document.querySelector(`#${puntos}`);
        
        // Nuevo arreglo del tamaño de los dots que se necesitan
        let dotsArray = new Array(sizeDots());
        let result=[];
        for(var i=0;i<dotsArray.length;i++){
            //guarda en cada espacio del arreglo el string para crear el elemnto HTML
            result = [...result,` <span class='1234${id}' id='spanDot${i}'>●</span>`];
        }
        // Con Array.reduce se unen todas los string guardados en cada elemto del arreglo para hacer una sola cadena
        const htmldots = result.reduce((accumulator, currentValue) => accumulator + currentValue);
        // se crean los dots en el elemento div
        puntosClass.innerHTML = htmldots; 


        //Asigna clase activa para el dot Activo al renderizar el componente.
                // se obtienen los dots creados y se convierten en un array
        const spans = document.getElementsByClassName(`1234${id}`);
        var arr = Array.prototype.slice.call( spans );

        arr.forEach(element => {
            const resp = element.classList.contains('dotActive');
            if (!resp) element.classList.remove('dotActive');
            if(element.id === scrollL) element.classList.add('dotActive');
        });


        //BOTONES NEXT & PREV.
        //Seleccciona los botones next & prev.
        const Prev = document.querySelector(`#${arrowPrev}`);
        const Next = document.querySelector(`#${arrowNext}`);

        // Si no existen los botones return
        if(!Prev || !Next) return;

        Next.addEventListener("click",()=>{
            //Obtiene de nuevo los estilos del item. (width) por si hubo algun cambio.
            let itemStyles = document.querySelector(items);
            let elementStyle = window.getComputedStyle(itemStyles);
            let widthItem = elementStyle.getPropertyValue('width'); 

            const widthItemNum = parseFloat(widthItem)*slidesToScroll;
            slider.scrollLeft +=widthItemNum;
        });

        Prev.addEventListener("click",()=>{
            //Obtiene de nuevo los estilos del item. (width) por si hubo algun cambio.
            let itemStyles = document.querySelector(items);
            let elementStyle = window.getComputedStyle(itemStyles);
            let widthItem = elementStyle.getPropertyValue('width'); 

            const widthItemNum = parseFloat(widthItem)*slidesToScroll;
            slider.scrollLeft -=widthItemNum;

        });

    });
    
    //Effecto que escucha cuando cambia el tamaño de la pantalla;
    useEffect(() => {

        // Funcion que se ejecuta cada que el tamaño de la pantalla cambia
        const screenResize = () => {

            //Obtiene Todos los items dentro del Componente.
            let itemsChild = document.querySelectorAll(items);
            //obtiene los elementos con el ID #carruselContainerID y #sliderID.
            let carruselContainer = document.querySelector(`#carruselContainer${id}`);
            let slider = document.querySelector(`#slider${id}`);


            //Verifica cada vez que cambia el tamaño si se cumple el max-width para visualizar el componente de una manera responsive.
            function isSmallScreen() {
                return window.matchMedia('(max-width: 500px)').matches;
            }
            let slidesToShowValue;
            //Si la pantalla es menor a 500px (celular Vertical) solo muestra slidesToShowOnMovil (1 Item por default). Si no muestra los Item indicados al crear el componente.
            if(isSmallScreen()){
                slidesToShowValue = slidesToShowOnMovil;
            }else{  
                slidesToShowValue = slidesToShow;
            }

            //Obtiene los estilos del item. (width) cada vez que cambia el tamaño para visualizar de modo responsive.
            let itemStyles = document.querySelector(items); 
            if (itemStyles === null) return;
            let elementStyle = window.getComputedStyle(itemStyles);
            let widthItem = elementStyle.getPropertyValue('width');
            
            // Condicional para reasignar el tamaño del width al CarruselContainer cada que el tamaño de pantalla cambia
            if (itemsChild.length>=slidesToShowValue) {    
                const widthCarrusel = parseFloat(widthItem) * slidesToShowValue+'px';
                carruselContainer.style.width = widthCarrusel;
            } else {
                const widthCarrusel = parseFloat(widthItem) * itemsChild.length+'px';
                carruselContainer.style.width = widthCarrusel;
            }

            //Funcion para recalcular la cantidad de Dots del carrusel cada que el tamaño de pantalla cambia para lograr efecto responsive
            const sizeDots = () => {
                
                let widthCarrusell;
                if (itemsChild.length < slidesToShowValue) widthCarrusell = parseFloat(widthItem) * itemsChild.length; 
                else widthCarrusell = parseFloat(widthItem) * slidesToShowValue;

                const scrollWidth = slider.scrollWidth;
                const itemWidth = parseFloat(widthItem);
                const resultDots = 1+((scrollWidth-widthCarrusell)/itemWidth);
                return Math.round( resultDots);
            } 
            // Guada el tamaño de dots necesarios en una constante
            let sizeDotsValue = sizeDots();
            // se actualiza el state con la constante
            settamañoDots(sizeDotsValue);
        }

        //Evento que escucha cuando cambia el tamaño de la pantalla
        window.addEventListener("resize",()=>{screenResize()});

    });

    // Effecto que crea los puntos de progreso dependiendo de cuantos se necesiten, se ejecuta cada que hay un cambio los states 
    useEffect(() => {

            // Obtiene el elemnto div donde se muestran los dots
            const puntosClass = document.querySelector(`#${puntos}`);

            if(tamañoDots === 0) return;

            // Nuevo arreglo del tamaño de los dots que se necesitan
            let dotsArray = new Array(tamañoDots);
            let result=[]

            for(var i=0;i<dotsArray.length;i++){
            //guarda en cada espacio del arreglo el string para crear el elemnto HTML
             result = [...result,` <span class='1234${id}' id='spanDot${i}'>●</span>`];
            }
            // Con Array.reduce se unen todas los string guardados en cada elemto del arreglo para hacer una sola cadena
           const htmldots = result.reduce((accumulator, currentValue) => accumulator + currentValue);
            //Se crean los dots HTML en el elemto div
            puntosClass.innerHTML = htmldots; 
    }, [tamañoDots,puntos,id])

    // Efecto que escucha el scroll del Slider y determina que punto de progreso deve activarse
    useEffect(() => {
        // Obtiene el elemnto #sliderID
        let slider = document.querySelector(`#slider${id}`);
        
        // Funcion que se ejecuta con el evento scroll
        const dotsActive = ()=>{

            // Obtiene nuevamente el width de cada item
            let itemStyles = document.querySelector(items);
            let elementStyle = window.getComputedStyle(itemStyles);
            let widthItem = elementStyle.getPropertyValue('width'); 

            // Cantidad de scrol a la izquierda
            const scrL = slider.scrollLeft;
            // Cantidad de escrollIzquierda entre el width del item nos indica el dot Activo
            const scrnum = Math.round(scrL/parseFloat(widthItem));
            // Se actualisa state
            setScrollL('spanDot'+ scrnum);
        }

        //Evento que escucha el scrool del Slider.
        slider.addEventListener("scroll",()=>{dotsActive()});

    });

    // Efecto que agrega clase activo al Dot
    useEffect(() => {
        //Asigna clase activa para el dot Activo al renderizar el componente.
            // se obtienen los dots creados y se convierten en un array
        const spans = document.getElementsByClassName(`1234${id}`);
        var arr = Array.prototype.slice.call( spans );

        // Se recorren los elementos, se determina si contienen la clase dotActive, Se elimina del anteior y se asigna al nuevo dot activo
        arr.forEach(element => {

            const resp = element.classList.contains('dotActive');
            if (!resp) element.classList.remove('dotActive');
            if(element.id === scrollL) element.classList.add('dotActive');
            
        });

    }, [scrollL,tamañoDots,id]);
    


    return (
        <>
            <div className="carruselContainer" id={`carruselContainer${id}`}>
                <div className="sliderCarousel" id={`slider${id}`}>
                    {children} 
                </div>
            </div>
        </>
    )
}

export default Carrousel;


Carrousel.propTypes = {
    id: PropTypes.any.isRequired,
    slidesToShow: PropTypes.number.isRequired,
    slidesToScroll: PropTypes.number,
    items:PropTypes.string.isRequired,
    arrowPrev: PropTypes.string,
    arrowNext: PropTypes.string,
    puntos: PropTypes.string.isRequired,
    children: PropTypes.array.isRequired
}

