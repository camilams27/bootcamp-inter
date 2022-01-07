function atvError(array, num) {
   try {
        if (!array && !num){
            throw new ReferenceError('parametros incorretos');
        }else if(typeof array !== 'object' || typeof num !== 'number'){
            throw new TypeError('tipo errado');
        }else if(array.length !== num){
            throw new RangeError('tamanho diferente');
        }else{
            return array; 
        }
        
   } catch (e) {
       if(e instanceof ReferenceError){
        console.log('Error: ReferenceError \n'+e.message)
       }else if(e instanceof TypeError){
        console.log('Error: TypeError \n'+e.message)
       }else if(e instanceof RangeError){
        console.log('Error: RangeError \n'+e.message)
       }else{
           console.log('Error diferente: \n'+e);
       }
   }
}
console.log(atvError([1,0.3,'a', true],4));