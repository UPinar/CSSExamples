

//menu butonuna basildiginda logo degisecek. menu item cikacak.

// menuHamburger  -> id menu logo svg
// closeModal     -> id menu close logo svg

// headMenu   -> head menu  display:flex display:none


const menuHamburgerLogo = document.getElementById('menuHamburger');
const closeModalLogo = document.getElementById('closeModal');

const headMenuContainer = document.getElementById('headMenu');

menuHamburgerLogo.addEventListener('click',OpenMenu);

function OpenMenu(event){
    menuHamburgerLogo.style.display = "none";
    closeModalLogo.style.display = "block";
    headMenuContainer.style.display = "flex";
}

closeModalLogo.addEventListener('click',CloseMenu)

function CloseMenu(event){
    menuHamburgerLogo.style.display = "block";
    closeModalLogo.style.display = "none";
    headMenuContainer.style.display = "none";
}
