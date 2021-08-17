

const display = document.getElementById('display');
const keys = document.getElementsByClassName('key');

const displayTotal = document.getElementById('display-total');

for (const key of keys) {
    key.addEventListener('click', function (event){
        const value = event.target.innerText;
        display.innerText += value;
    })
}

document.getElementById('clear').addEventListener('click', function (){
    display.innerText = '';
    displayTotal.innerText = '';
})

document.getElementById('equel').addEventListener('click', function () {
    const input = display.innerText;
    const cal = eval(input);
    
    displayTotal.innerText = cal;
})
