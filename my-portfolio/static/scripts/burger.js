const openButton = document.getElementsByClassName('burger')[0];
const closeButton = document.getElementsByClassName('close-button')[0];
const menu = document.getElementsByClassName('burger-menu')[0];
const menuItems = Array.from(menu.children).slice(0, -1);

openButton.addEventListener('click', showBurgerMenu);
closeButton.addEventListener('click', closeBurgerMenu);

menuItems.forEach(item => item.addEventListener('click', closeBurgerMenu));

function showBurgerMenu() {
    menu.style.top = '0';
    closeButton.style.display = 'block';
}

function closeBurgerMenu() {
    menu.style.top = '-200%';
}
