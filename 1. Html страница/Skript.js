
const overlay = document.querySelector('.overlay');
const overlayMenu = document.querySelector('.header-left__overlay');
const menu = document.querySelector('.basketS');

function openPopUp()
{
        menu.classList.add('active');
        overlay.classList.add('active');
}
function closeBasket() {
    menu.classList.remove('active');
    overlay.classList.remove('active');
}
function closePopUp() {
    closeBasket();
}
overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.basketS.active');
    modals.forEach(modals => {
        closeBasket(modals);
    })
});