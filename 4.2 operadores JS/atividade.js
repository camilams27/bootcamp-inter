function atividade(num1, num2){
    const parte1 =  frase1(num1,num2);
    const parte2 = frase2(num1,num2);

    return `${parte1} ${parte2}.`;
}
console.log(atividade(1,2));

function frase1(num1,num2){
    let primeiraFrase = "";
    if(num1 === num2){
        primeiraFrase = `Os números ${num1} e ${num2} são iguais.`;
    }else{
        primeiraFrase = `Os números ${num1} e ${num2} não são iguais.`;
    }
    return primeiraFrase;
}

function frase2(num1,num2){
    var soma = num1 + num2, maior10="maior", maior20="maior";
    if(soma<10){
        maior10="menor"
        maior20="menor"
    }else if(soma<20){
        maior20="menor";
    }
    return `Sua soma é ${soma}, ${maior10} que 10 e ${maior20} que 20`;
}