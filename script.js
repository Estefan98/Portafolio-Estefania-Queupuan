
const $form = document.querySelector('#form')
const $buttonMailito = document.querySelector('#micorreo')
const $mensaje = document.querySelector('#mensaje');


$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(this)
    const isSuccess = Math.random() > 0.5;

    if (isSuccess) {
        $buttonMailito.setAttribute('href',`estefaniaqueupuan@gmail.com?subject= ${form.get('nombre')} ${form.get('email')}&body= ${form-get('mensaje')}`)
        $buttonMailito.click();

        //MENSAJE DE EXITO
        $mensaje.textContent = "Mensaje enviado con éxito!";
        $mensaje.style.color = "green";
    } else {
        $mensaje.textContent = "Error al enviar mensaje :(";
        $mensaje.style.color = "red";
    }

    $form.requestFullscreen();

}