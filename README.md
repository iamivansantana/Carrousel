# Carrousel

_Carrousel es un componente creado con react.js que puedes utilizar para crear un carrusel de imagenes,item,div, etc... de manera facil_

## Comenzando 🚀

_El componente recibe las siguientes props_  

![](src\images\carrouselImage.png)


 **id** = "El id recibe un number o un string y debe ser diferente en cada Carrousel para poder tener mas de un Carrousel en nuestra proyecto"; id -> SI es obligatorio  

 **slidesToShow** =  "slidesToShow recibe un number y es la cantidad de elementos (items) que se mostrarán en el Carrousel, el resto seran los que se visualizaran al hacer scroll; slidesToShow -> SI es obligatorio "  

 **slidesToShowOnMovil** = "slidesToShowOnMovil recibe un number y es la cantidad de elementos (items) que se mostrarán en el carrusel cuando el width sea menor o igual a 500 px ( Version Mobil ); slidesToShowOnMovil -> NO es obligatorio, por defecto esta inicializado en 1, si desea mostrar más items sí es obligatorio"  

 **slidesToScroll** = "slidesToScroll recibe un number y es la cantidad de Elemtos (items) por los que se recorrera el carrusel ";  slidesToScroll -> NO es obligatorio, por defecto esta inicializado en 1, si desea recorrer por más items sí es obligatorio"  

 **items** = "items recibe una string que debe ser una clase (incluir el punto inicial ejemplo-> '.image-picture'); La clase recibida debe ser extrictamente la de los elementos dentro del Carrousel; items -> SI es obligatorio "  

 **arrowPrev** = "arrowPrev recibe un id y es el id del elemento o button que ejecutara el scroll para retroceder al anterior item; arrowPrev -> No es obligatorio si no desea incluir los botones que controlan el scroll pero SI es obligatorio si desea incluir los botones que controlan el scroll"  

 **arrowNext** = "arrowNext recibe un id y es el id del elemento o button que ejecutara el scroll para avanzar al siguiente item; arrowNext -> No es obligatorio si no desea incluir los botones que controlan el scroll pero SI es obligatorio si desea incluir los botones que controlan el scroll"  

 **puntos** = "puntos recibe un id y es el id del elemento div en donde se mostraran los puntos de progreso"; puntos -> SI es obligatorio  


### Pre-requisitos 📋

_Este Componente funciona con:_

```
 react.js ^17.0.2
```

### Instalación 🔧

_Para un correcto funcionamiento del componente debes copiar a tu proyecto toda la carpeta components\carrousel (Carrousel.css & Carrousel.js)_

Para una mejor experiencia de desplazamiento agregar el propiedad (scroll-snap-align: end;) en la clase que pasará en la props item

```
 .itemClass{  
    scroll-snap-align: end;  
} 

```


