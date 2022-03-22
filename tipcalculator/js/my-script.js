
//Yapilacaklar

let buttonTip5 = document.getElementById('tip5');
let buttonTip10 = document.getElementById('tip10');
let buttonTip15 = document.getElementById('tip15');
let buttonTip25 = document.getElementById('tip25');
let buttonTip50 = document.getElementById('tip50');


let billInput = document.getElementById('bill-input');
let tipInput = document.getElementById('tip-input');
let numberInput = document.getElementById('number-input');

let billValue = parseFloat(billInput.value)
let tipValue = parseInt(tipInput.value);
let numberValue = parseInt(numberInput.value);

let tipAmount = document.getElementById('tip-amount')
let totalAmount = document.getElementById('total-amount')


let resultTipValue;
let resultTotalValue;


billInput.addEventListener('input', checkBillInput)
function checkBillInput(){
    this.value = this.value.replace(/[^\d.]/g, '');

    billValue = parseFloat(this.value)
    tipValue = parseInt(tipInput.value)
    numberValue = parseInt(numberInput.value)


    
    if(!isNaN(billValue)){
        
        if(tipInput.value !== ''){
            tipValue = parseInt(tipInput.value);
        }
        else if(window.getComputedStyle(buttonTip5).backgroundColor !== 'rgb(0, 73, 77)'){
            tipValue = 5;
        }
        else if(window.getComputedStyle(buttonTip10).backgroundColor !== 'rgb(0, 73, 77)'){
            tipValue = 10;
        }
        else if(window.getComputedStyle(buttonTip15).backgroundColor !== 'rgb(0, 73, 77)'){
            tipValue = 15;
        }
        else if(window.getComputedStyle(buttonTip25).backgroundColor !== 'rgb(0, 73, 77)'){
            tipValue = 25;
        }
        else if(window.getComputedStyle(buttonTip50).backgroundColor !== 'rgb(0, 73, 77)'){
            tipValue = 50;
        }

        if(isNaN(tipValue)){
            tipAmount.innerHTML = `$0`
            totalAmount.innerHTML = `$0`
            return;
        }
        else{
            if(isNaN(numberValue)){
                return
            }
            else{
                resultTipValue = (billValue * tipValue / 100) / numberValue;
                tipAmount.innerHTML = `$${resultTipValue.toFixed(2)}`

                resultTotalValue = (billValue / numberValue)
                totalAmount.innerHTML = `$${resultTotalValue.toFixed(2)}`
            }
        }
        
    }
    else{
        tipAmount.innerHTML = `$0`
        totalAmount.innerHTML = `$0`
    }
    
}


tipInput.addEventListener('input', checkTipInput)
function checkTipInput(){
    this.value = this.value.replace(/[^\d]/g, '');

    buttonTip5.style.background = 'hsl(183, 100%, 15%)';
    buttonTip10.style.background = 'hsl(183, 100%, 15%)';
    buttonTip15.style.background = 'hsl(183, 100%, 15%)';
    buttonTip25.style.background = 'hsl(183, 100%, 15%)';
    buttonTip50.style.background = 'hsl(183, 100%, 15%)';

    tipValue = parseInt(this.value)
    let billValue = parseFloat(billInput.value)
    if(!isNaN(billValue)){
        let numberValue = parseInt(numberInput.value);
        if(!isNaN(numberValue))
        {
            resultTipValue = (billValue * tipValue / 100) / numberValue;
            tipAmount.innerHTML = `$${resultTipValue.toFixed(2)}`

            resultTotalValue = (billValue / numberValue)
            totalAmount.innerHTML = `$${resultTotalValue.toFixed(2)}`
        }
        else{
            tipAmount.innerHTML = `$0`
            totalAmount.innerHTML = `$0`
        }
    }
    else{
        tipAmount.innerHTML = `$0`
        totalAmount.innerHTML = `$0`
    }
    
}



numberInput.addEventListener('input', checkNumberInput)
function checkNumberInput(){
    this.value = this.value.replace(/[^\d]/g, '');

    billValue = parseFloat(billInput.value)
    tipValue = parseInt(tipInput.value)
    numberValue = parseInt(this.value)

    if(!isNaN(numberValue)){
        
        if(tipInput.value !== ''){
            tipValue = parseInt(tipInput.value);
        }
        else if(window.getComputedStyle(buttonTip5).backgroundColor !== 'rgb(0, 73, 77)'){
            tipValue = 5;
        }
        else if(window.getComputedStyle(buttonTip10).backgroundColor !== 'rgb(0, 73, 77)'){
            tipValue = 10;
        }
        else if(window.getComputedStyle(buttonTip15).backgroundColor !== 'rgb(0, 73, 77)'){
            tipValue = 15;
        }
        else if(window.getComputedStyle(buttonTip25).backgroundColor !== 'rgb(0, 73, 77)'){
            tipValue = 25;
        }
        else if(window.getComputedStyle(buttonTip50).backgroundColor !== 'rgb(0, 73, 77)'){
            tipValue = 50;
        }

        if(isNaN(tipValue)){
            return;
        }
        else{
            if(isNaN(billValue)){
                tipAmount.innerHTML = `$0`
                totalAmount.innerHTML = `$0`
                return
            }
            else{
                resultTipValue = (billValue * tipValue / 100) / numberValue;
                tipAmount.innerHTML = `$${resultTipValue.toFixed(2)}`

                resultTotalValue = (billValue / numberValue)
                totalAmount.innerHTML = `$${resultTotalValue.toFixed(2)}`
            }
        }
    }
    else{
        tipAmount.innerHTML = `$0`
        totalAmount.innerHTML = `$0`
    }
}

// === ''

buttonTip5.addEventListener('click',clickedTip5)
function clickedTip5(e){
    buttonTip5.style.background = 'hsl(172, 67%, 45%)';
    buttonTip10.style.background = 'hsl(183, 100%, 15%)';
    buttonTip15.style.background = 'hsl(183, 100%, 15%)';
    buttonTip25.style.background = 'hsl(183, 100%, 15%)';
    buttonTip50.style.background = 'hsl(183, 100%, 15%)';
    tipInput.value = '';

    tipValue = 5;

    let billValue = parseFloat(billInput.value)
    if(!isNaN(billValue)){
        let numberValue = parseInt(numberInput.value);
        if(!isNaN(numberValue))
        {
            resultTipValue = (billValue * tipValue / 100) / numberValue;
            tipAmount.innerHTML = `$${resultTipValue.toFixed(2)}`

            resultTotalValue = (billValue / numberValue)
            totalAmount.innerHTML = `$${resultTotalValue.toFixed(2)}`
        }
        else{
            tipAmount.innerHTML = `$0`
            totalAmount.innerHTML = `$0`
        }
    }
    else{
        tipAmount.innerHTML = `$0`
        totalAmount.innerHTML = `$0`
    }

}

buttonTip10.addEventListener('click',clickedTip10)
function clickedTip10(e){
    buttonTip10.style.background = 'hsl(172, 67%, 45%)';
    buttonTip5.style.background = 'hsl(183, 100%, 15%)';
    buttonTip15.style.background = 'hsl(183, 100%, 15%)';
    buttonTip25.style.background = 'hsl(183, 100%, 15%)';
    buttonTip50.style.background = 'hsl(183, 100%, 15%)';
    tipInput.value = '';

    tipValue = 10;

    let billValue = parseFloat(billInput.value)
    if(!isNaN(billValue)){
        let numberValue = parseInt(numberInput.value);
        if(!isNaN(numberValue))
        {
            resultTipValue = (billValue * tipValue / 100) / numberValue;
            tipAmount.innerHTML = `$${resultTipValue.toFixed(2)}`

            resultTotalValue = (billValue / numberValue)
            totalAmount.innerHTML = `$${resultTotalValue.toFixed(2)}`
        }
        else{
            tipAmount.innerHTML = `$0`
            totalAmount.innerHTML = `$0`
        }
    }
    else{
        tipAmount.innerHTML = `$0`
        totalAmount.innerHTML = `$0`
    }
}

buttonTip15.addEventListener('click',clickedTip15)
function clickedTip15(e){
    buttonTip15.style.background = 'hsl(172, 67%, 45%)';
    buttonTip5.style.background = 'hsl(183, 100%, 15%)';
    buttonTip10.style.background = 'hsl(183, 100%, 15%)';
    buttonTip25.style.background = 'hsl(183, 100%, 15%)';
    buttonTip50.style.background = 'hsl(183, 100%, 15%)';
    tipInput.value = '';

    tipValue = 15;

    let billValue = parseFloat(billInput.value)
    if(!isNaN(billValue)){
        let numberValue = parseInt(numberInput.value);
        if(!isNaN(numberValue))
        {
            resultTipValue = (billValue * tipValue / 100) / numberValue;
            tipAmount.innerHTML = `$${resultTipValue.toFixed(2)}`

            resultTotalValue = (billValue / numberValue)
            totalAmount.innerHTML = `$${resultTotalValue.toFixed(2)}`
        }
        else{
            tipAmount.innerHTML = `$0`
            totalAmount.innerHTML = `$0`
        }
    }
    else{
        tipAmount.innerHTML = `$0`
        totalAmount.innerHTML = `$0`
    }
}

buttonTip25.addEventListener('click',clickedTip25)
function clickedTip25(e){
    buttonTip25.style.background = 'hsl(172, 67%, 45%)';
    buttonTip5.style.background = 'hsl(183, 100%, 15%)';
    buttonTip10.style.background = 'hsl(183, 100%, 15%)';
    buttonTip15.style.background = 'hsl(183, 100%, 15%)';
    buttonTip50.style.background = 'hsl(183, 100%, 15%)';
    tipInput.value = '';

    tipValue = 25;

    let billValue = parseFloat(billInput.value)
    if(!isNaN(billValue)){
        let numberValue = parseInt(numberInput.value);
        if(!isNaN(numberValue))
        {
            resultTipValue = (billValue * tipValue / 100) / numberValue;
            tipAmount.innerHTML = `$${resultTipValue.toFixed(2)}`

            resultTotalValue = (billValue / numberValue)
            totalAmount.innerHTML = `$${resultTotalValue.toFixed(2)}`
        }
        else{
            tipAmount.innerHTML = `$0`
            totalAmount.innerHTML = `$0`
        }
    }
    else{
        tipAmount.innerHTML = `$0`
        totalAmount.innerHTML = `$0`
    }
}

buttonTip50.addEventListener('click',clickedTip50)
function clickedTip50(e){
    buttonTip50.style.background = 'hsl(172, 67%, 45%)';
    buttonTip5.style.background = 'hsl(183, 100%, 15%)';
    buttonTip10.style.background = 'hsl(183, 100%, 15%)';
    buttonTip15.style.background = 'hsl(183, 100%, 15%)';
    buttonTip25.style.background = 'hsl(183, 100%, 15%)';
    tipInput.value = '';

    tipValue = 50;

    let billValue = parseFloat(billInput.value)
    if(!isNaN(billValue)){
        let numberValue = parseInt(numberInput.value);
        if(!isNaN(numberValue))
        {
            resultTipValue = (billValue * tipValue / 100) / numberValue;
            tipAmount.innerHTML = `$${resultTipValue.toFixed(2)}`

            resultTotalValue = (billValue / numberValue)
            totalAmount.innerHTML = `$${resultTotalValue.toFixed(2)}`
        }
        else{
            tipAmount.innerHTML = `$0`
            totalAmount.innerHTML = `$0`
        }
    }
    else{
        tipAmount.innerHTML = `$0`
        totalAmount.innerHTML = `$0`
    }
    
}


let resetButton = document.getElementById('resetButton')
resetButton.addEventListener('click',clickedResetButton)
function clickedResetButton(e){
    buttonTip50.style.background = 'hsl(183, 100%, 15%)';
    buttonTip5.style.background = 'hsl(183, 100%, 15%)';
    buttonTip10.style.background = 'hsl(183, 100%, 15%)';
    buttonTip15.style.background = 'hsl(183, 100%, 15%)';
    buttonTip25.style.background = 'hsl(183, 100%, 15%)';
    tipAmount.innerHTML = `$0`
    totalAmount.innerHTML = `$0`
}








/*
        Tip islemleri

Eger herhangi bir Tip degerine tiklanmissa 
Butun tip-ratio background kotu-yesile cevir.
Sadece tiklanan degeri acikyesile cevir.
Input icindeki degeri 0 la.

Eger input icine bir deger girildiyse 
tip-ratios backgroundlari koyu-yesile cevir.

Bu iki kosul icinde bill-input ve people-input 
dolu olup olmadigini kontrol ettir.
Ikiside dolu ise result container a degerleri yazdir.
*/

/*
        Bill islemleri

    Bill eger nokta inputa girildi ise daha once input icinde baska '.' degeri olup olmadigini kontrol et.
    Ya da bunu regular expressionla kontrol ettirebiliyorsak oyle.
    
    Bille herhangi bir deger girildiginde tip-ratios buton backgroundlari kontrol et. 
    Eger hepsi koyu-yesil ise tip-input kontrol et.

    Bu ikisinden biri dolu ise number-input kontrol et. Dolu ise result degerleri yazdir.

    Bossa islem yapma.
*/

/*
        Number islemleri

    Number herhangi bir deger girildiginde tip-ratios buton backgroundlari kontrol et. 
    Eger hepsi koyu-yesil ise tip-input kontrol et.

    Bu ikisinden biri dolu ise bill-input kontrol et. Dolu ise result degerleri yazdir.

    Bossa islem yapma.
*/


