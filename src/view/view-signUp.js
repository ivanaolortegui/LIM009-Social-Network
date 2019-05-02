
export default (email) => {
  const pageMain = document.createElement('div');
  const template = `<h3>Bienvenido s</h3> ${email}`;
  pageMain.innerHTML = template;
  return pageMain;
}