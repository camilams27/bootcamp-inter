function potenciaPares(N){
  for (let index = 1; index <= N; index++) {
    if(index%2==0){
      console.log(index+'^2 = '+ index**2);
    }
  }
  return '------------------------------------';
}
console.log(potenciaPares(6))

function divisivel(N){
  for (let index = 1; index <= 10000; index++) {
    if(index%N==0){
      console.log(index);
    }
  }
  return '------------------------------------';
}
console.log(divisivel(5000))

function frase(N){
  var string = 'LIFE IS NOT A PROBLEM TO BE SOLVED';
  string = string.split('');
  
  for (let i = 1; i<=N ;i++) {
    texto = string.slice(0, i);
  }
  texto = texto.join('');
  console.log (texto);
  return '------------------------------------';
}
console.log(frase(36))