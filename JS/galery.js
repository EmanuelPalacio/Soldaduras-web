import { getStorage, ref, getDownloadURL, listAll } from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-storage.js';

const storage = getStorage()
const galery = document.querySelector('.galery');

listAll(ref(storage, 'galery'))
    .then((res) => {
        res.items.forEach((e)=> {
            const pathReference = ref(storage, `${e._location.path_}`);
            getDownloadURL(pathReference)
                .then((token) => {
                    const galeryContent = document.createElement('div');
                    galeryContent.className = 'galery__containerImg'
                    galeryContent.innerHTML =
                        `
                                <img src=${token} alt="">
                        `;
                        galery.append(galeryContent);
        })
    })
});

