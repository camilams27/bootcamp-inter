function returnEvenValues(array){
    let evenNums = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0){
            evenNums.push(array[i]);
        } 
        else{
            console.log(`não eh par: ${array[i]}`)
        }
    }
    return evenNums;
}
let array = [1,2,3,4,5,8];
console.log(returnEvenValues(array));