const btnModal = document.querySelector('#btnModal');
const btn = document.querySelector('#btnSubmit');
const form = document.querySelector('#form');
const section = document.querySelector('section');
const overflow = document.querySelector('body');
const firstSesion = sessionStorage.getItem('modal')

if(!firstSesion){

    sessionStorage.setItem('modal', true)

    btnModal.addEventListener('click', () => {
        const modal = document.querySelector('.modal');
        modal.classList.add('modal--active');
        overflow.classList.add('overflow')
        setTimeout(()=>{
            section.remove()
        },1000)
    });

}else {
    section.remove()
    overflow.classList.add('overflow')
}


document.getElementById('form')
    .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.innerHTML = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_x4rif3f';

    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        btn.classList.toggle('btn--send')
        btn.innerHTML = 'Enviado';
        setTimeout(() => {
            form.reset()
            btn.classList.toggle('btn--send')
            btn.innerHTML = 'Enviar'; 
        }, 1500);
        
    }, (err) => {
        alert(JSON.stringify(err));
    });
});