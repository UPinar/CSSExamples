const hamburgerButton = document.getElementById('hamburgerButton');

hamburgerButton.addEventListener("click",ShowHamburgerMenu);

const hamburgerContainer = document.getElementById('hamburgerContainer')

let timesClicked = 0;

function ShowHamburgerMenu(e){

    timesClicked++;

    if(timesClicked % 2 == 1){
        hamburgerContainer.style.display = "flex"
    }
    else{
        hamburgerContainer.style.display = "none"
    }
    
}


