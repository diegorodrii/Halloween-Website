/**************** Aquí están las funciones de Halloween ***********/

/******* Función mostrar  ************/

/******** una función es un módulo que ejecuta una sola tarea 
 *        mostrar --> muestra, ocultar --> oculta
 *        Javascript toma como objeto principal document, 
 *        es la página html actual
 *        tiene una erie de operadores, llamados getters, 
 *        que seleccionan elementos para su manipulación.
 *        Un elemento, seleccionado con un getter, puede ser 
 *        modificado: contenido, estilo, los atributos....
*/
function mostrarBruja (){
    document.getElementById("bruja").style.visibility = "visible";
    document.getElementById("dialogo").innerHTML = "How are you that brave to not follow the rules?! I told you not to kick the window!";
}
function ocultarBruja (){
    document.getElementById("bruja").style.visibility = "hidden";
    document.getElementById("dialogo").innerHTML = "";
}
function mostrarCalabazas (){
    document.getElementById("calabazas").style.visibility = "visible";
    
}
function ocultarCalabazas (){
    document.getElementById("calabazas").style.visibility = "hidden";
    
}
function mostrarFantasma (){
    document.getElementById("fantasmasImg").style.visibility = "visible";
    document.getElementById("dialogo2").innerHTML = "You are invited to our Halloween party. It will be great to have fun with you so that's the reason why we decided to send you this website. You have to wear your most terrorific clothes. The party will take place at IES Campanillas high school, October 31st. We hope you accept our invitation...";
}
function ocultarFantasma (){
    document.getElementById("fantasmasImg").style.visibility = "hidden";
    document.getElementById("dialogo2").innerHTML = "";
}
function sonar (sonido){
    document.getElementById(sonido).play();
}
function parar (sonido){
    document.getElementById(sonido).pause();
}