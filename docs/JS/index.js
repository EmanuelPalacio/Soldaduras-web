const btnModal = document.querySelector('#btnModal');
const btn = document.querySelector('#btnSubmit');
const form = document.querySelector('#form');

btnModal.addEventListener('click', () => {
    const modal = document.querySelector('.modal');
    const section = document.querySelector('section');
    const overflow = document.querySelector('body')
    modal.classList.add('modal--active');
    overflow.classList.add('overflow')
    setTimeout(()=>{
        section.remove()
    },1000)
});

document.getElementById('form')
    .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.innerHTML = 'enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_x4rif3f';

    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        btn.classList.toggle('btn--send')
        btn.innerHTML = 'enviado';
        setTimeout(() => {
            form.reset()
            btn.classList.toggle('btn--send')
            btn.innerHTML = 'enviar'; 
        }, 1500);
        
    }, (err) => {
        alert(JSON.stringify(err));
    });
});