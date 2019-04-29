
export const printWelcomeUser  = (page, email) => {
    page.innerHTML = ' ';
    page.innerHTML += `<h3>Bienvenido ${email}</h3>`;
   
}