const nums = [1,2];

function reduceAtv(array){
    return array.reduce(function(anterior, atual){
        return anterior + atual;
    }, 0)
}

console.log(reduceAtv(nums));

// ----------------------------------

function precos(array, saldo){
    return array.reduce(function(prev, curr){
        return prev - curr;
    }, saldo)
}

console.log(precos(nums, 8))