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

// CHANGING COLORS OF SVG ELEMENTS

const facebookLogo = document.getElementById('facebookLogo')
const facebookPath = document.getElementById('facebookPath')

facebookLogo.addEventListener('mouseover',changeFacebookColorOver)
facebookLogo.addEventListener('mouseout',changeFacebookColorOut)

function changeFacebookColorOver(e){
    facebookPath.style.fill = "#FFF";
}

function changeFacebookColorOut(e){
    facebookPath.style.fill = "#2C7566";
}

const instagramLogo = document.getElementById('instagramLogo')
const instagramPath = document.getElementById('instagramPath')

instagramLogo.addEventListener('mouseover',changeInstagramColorOver)
instagramLogo.addEventListener('mouseout',changeInstagramColorOut)

function changeInstagramColorOver(e){
    instagramPath.style.fill = "#FFF";
}

function changeInstagramColorOut(e){
    instagramPath.style.fill = "#2C7566";
}

const twitterLogo = document.getElementById('twitterLogo')
const twitterPath = document.getElementById('twitterPath')

twitterLogo.addEventListener('mouseover',changeTwitterColorOver)
twitterLogo.addEventListener('mouseout',changeTwitterColorOut)

function changeTwitterColorOver(e){
    twitterPath.style.fill = "#FFF";
}

function changeTwitterColorOut(e){
    twitterPath.style.fill = "#2C7566";
}

const pinterestLogo = document.getElementById('pinterestLogo')
const pinterestPath = document.getElementById('pinterestPath')

pinterestLogo.addEventListener('mouseover',changePinterestColorOver)
pinterestLogo.addEventListener('mouseout',changePinterestColorOut)

function changePinterestColorOver(e){
    pinterestPath.style.fill = "#FFF";
}

function changePinterestColorOut(e){
    pinterestPath.style.fill = "#2C7566";
}


// CHANGING OPACITY OF PSEUDO ELEMENTS


const redLabel = document.getElementById('color-red')

redLabel.addEventListener('mouseover',changeRedOpacityDark)
redLabel.addEventListener('mouseout',changeRedOpacityLight)

function changeRedOpacityDark(e){
    document.querySelector('#color-red','::after').style.setProperty("--opacity", "1")  
}

function changeRedOpacityLight(e){
    document.querySelector('#color-red','::after').style.setProperty("--opacity", "0.2")
}

const yellowLabel = document.getElementById('color-yellow')

yellowLabel.addEventListener('mouseover',changeYellowOpacityDark)
yellowLabel.addEventListener('mouseout',changeYellowOpacityLight)

function changeYellowOpacityDark(e){
    document.querySelector('#color-yellow','::after').style.setProperty("--opacity", "1")  
}

function changeYellowOpacityLight(e){
    document.querySelector('#color-yellow','::after').style.setProperty("--opacity", "0.2")
}






