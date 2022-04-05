

//menu butonuna basildiginda logo degisecek. menu item cikacak.

// menuHamburger  -> id menu logo svg
// closeModal     -> id menu close logo svg

// headMenu   -> head menu  display:flex display:none


const menuHamburgerLogo = document.getElementById('menuHamburger');
const closeModalLogo = document.getElementById('closeModal');

const headMenuContainer = document.getElementById('headMenu');

const containerBefore = document.querySelector('.container','::before')

menuHamburgerLogo.addEventListener('click',OpenMenu);

function OpenMenu(event){
    menuHamburgerLogo.style.display = "none";
    closeModalLogo.style.display = "block";
    headMenuContainer.style.display = "flex";
    containerBefore.style.setProperty("--display", "block");
    
    
}

closeModalLogo.addEventListener('click',CloseMenu)

function CloseMenu(event){
    menuHamburgerLogo.style.display = "block";
    closeModalLogo.style.display = "none";
    headMenuContainer.style.display = "none";
    containerBefore.style.setProperty("--display", "none");
}


/*
id = money olan veriyi cek. Verinin 100.000 e oranini alip 
query selector ile .total__ratio .max__ratio yu cekip icine oranini width property
olarak bas
*/


let moneyRatioValue = document.getElementById('money').innerHTML;
let moneyValue = moneyRatioValue.substring(1,moneyRatioValue.length)
let moneyRatio = parseFloat(moneyValue) / 100.000 * 100;

let showRatio = document.querySelector('.data__ratio .total__ratio');


if(showRatio >= 100){
    showRatio.style.width = `100%`
}
else{
    showRatio.style.width = `${moneyRatio}%`
}








