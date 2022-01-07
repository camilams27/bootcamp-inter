var currentNumberWrapper = document.getElementById("currentNumber"); /*numero atual no browser*/
var currentNumber = 0; /*numero atual*/

// addEventListener
document.getElementById("add").addEventListener("click", increment)

function increment() { 
    currentNumber ++;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber>0){
        // positive numbers color
        currentNumberWrapper.style.color = 'darkblue';

        // Desable button
        if (currentNumber>=10) {
            document.getElementById('obs').innerHTML = "A contagem vai até o número 10";
            document.getElementById("add").disabled = true;
            
        } else {
            document.getElementById("add").disabled = false;
        }
    }
}

document.getElementById("subtrair").addEventListener("click", decrement);

function decrement() { 
    currentNumber = currentNumber -1; 
    console.log(currentNumber);
    currentNumberWrapper.innerHTML = currentNumber;

    if(currentNumber<0){
        // negative numbers color
        currentNumberWrapper.style.color = 'red';

        // Desable buttons
        if (currentNumber<=-10) {
            document.getElementById('obs').innerHTML = "A contagem vai até o número -10";
            document.getElementById("subtrair").disabled = true;
        } else {
            document.getElementById("subtrair").disabled = false;
        }
    }
}