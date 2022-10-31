const btnModal = document.querySelector('.btn');
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
