const dois = {
    value: 2,
};

const tres ={
    value: 3,
};

const numeros = [1,2,3,4,5]

function mapThis(array, ArgThis){
    return array.map(function (item){
      return item * this.value;
    }, ArgThis)
}

console.log('this multiplica por dois. \n', mapThis(numeros, dois));

console.log('this multiplica por três. \n', mapThis(numeros, tres));

//-----------------------------------------------------------

function mapAtv(array){ 
    return array.map(function(item){
        return item * 5;
    });
}

console.log('função sem o this, multiplicando por 5 \n', mapAtv(numeros));