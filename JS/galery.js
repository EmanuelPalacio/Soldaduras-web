const galery = document.querySelector('.galery');

const galeryContent = document.createElement('div');
galeryContent.className = 'galery__containerImg'
galeryContent.innerHTML =
                        `
                                <img src="https://images.unsplash.com/photo-1531053326607-9d349096d887?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="">
                        `;
galery.append(galeryContent);
