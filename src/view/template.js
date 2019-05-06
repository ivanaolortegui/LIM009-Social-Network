
export const printWelcomeUserFacebook  = (name, img ) => {
    const header = document.querySelector('header');
    header.innerHTML = ' ';
    const pageMain = document.querySelector('#pag-one');
    pageMain.innerHTML = ' ';
    pageMain.innerHTML = `<h3>Bienvenido ${name}</h3> 
    <img src="${img}">`
    ; 
}

