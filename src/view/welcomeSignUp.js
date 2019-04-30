
export default () => {
    const header = document.querySelector('header');
    header.innerHTML = ' ';
    const pageMain = document.querySelector('#pag-one');
    pageMain.innerHTML = ' ';
    pageMain.innerHTML = `<h3>Bienvenido </h3>`; 
    return pageMain;
}