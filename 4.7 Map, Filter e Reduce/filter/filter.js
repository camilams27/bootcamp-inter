var nums = [1,2,7,21,18,16,4,8];

function pares(array){
    return array.filter(function(item){   
        return item%2 == 0;   
    })
}

console.log(pares(nums));