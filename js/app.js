// Detectar media querys - api para detectarlo
const checkbox = document.querySelector('#checkbox')
if(window.matchMedia('(prefers-color-scheme: dark)').matches){
    console.log()
    checkbox.setAttribute('checked', true)
}
//cambiar el modo osucro mediante el boton
//Permite cambiar el estilo de las propiedades o componentes del codigo
// document.body.style.setProperty('--cardGray', 'blue')
//funcion para cambiar el color
checkbox.addEventListener('change', function(event) {
    //si esta checkeada
    if(this.checked){
        document.body.classList.remove('is-light-mode')
        document.body.classList.add('is-dark-mode')
    }else{
        document.body.classList.remove('is-dark-mode')
        document.body.classList.add('is-light-mode')
    }
})

// --cardGray: #252b43;
//         --gray: #8088ad;
//         --lightgray: #1d2029;
//         --base-Background: #1d2029;
//         --baseColor: white;
//         --cardTitle: #8088ad;
//         --switchSpinner: #282943;
//         --switch: linear-gradient(to right, #4796d2 0%, #37ce8f 100% );