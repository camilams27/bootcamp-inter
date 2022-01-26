const body = document.getElementsByTagName('body')[0];
const titulo = document.getElementById('page-title');
const botao = document.getElementById('mode-selector');
const footer = document.getElementsByTagName('footer')[0];

botao.addEventListener('click', function(e){    
    botao.classList.toggle('dark-mode');
    titulo.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    
    if(botao.classList.contains('dark-mode') && titulo.classList.contains('dark-mode')){
        titulo.innerHTML = "Dark Mode ON"
        botao.innerHTML = "Dark Mode";
        return console.log('dark mode activate')
    }else{
        titulo.innerHTML = "Light Mode ON";
        botao.innerHTML = "Light Mode";
        return console.log('light mode activate')
    }
});