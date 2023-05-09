window.addEventListener('load',()=>{
    const contenedor_loader = document.querySelector('.contenedor_loader')
    contenedor_loader.style.opacity= 0
    contenedor_loader.style.visibility='hidden'
})
function esperandojugador(){
window.addEventListener('esperandojugador', ()=>{
    const contenedor_loader = document.querySelector('.contenedor_loader')
    contenedor_loader.setAttribute.style.opacity= 1
    contenedor_loader.setAttribute.style.visibility='visible'
})
}