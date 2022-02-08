const BASE_URL = 'https://ghibliapi.herokuapp.com/films';

const getFilms = async () => {
    const data = await fetch(BASE_URL);
    const json = await data.json();
   
    for (let i = 0; i < json.length; i++){
        const popup = document.getElementById('popUp');
         
        const div = document.createElement('div');
        popup.appendChild(div);
        div.className = "blockFilm"

        var imgFilm = document.createElement('img');
        div.appendChild(imgFilm);
        imgFilm.src = json[i].image;
        imgFilm.className = "imgFilmAPI"

        var title = json[i].title;
        const prg = document.createElement('h1');
        prg.className = "titleFilm";
        div.appendChild(prg);
        prg.innerHTML = title;
      
    }
}

// getFilms()
 
const outset = document.getElementById("outset");
const news = document.getElementById("news");
const films = document.getElementById("films");
const others = document.getElementById("others");

outset.addEventListener('click', function(e){
    if(outset.classList.contains('presence')){

    }else{
        outset.classList.add('presence');
    }
    news.classList.remove('presence');
    films.classList.remove('presence');
    others.classList.remove('presence');
})

news.addEventListener('click', function (e){
    if(news.classList.contains('presence')){

    }else{
        news.classList.add('presence');
    }
    outset.classList.remove('presence');
    films.classList.remove('presence');
    others.classList.remove('presence');
})

films.addEventListener('click', function (e){
    if(films.classList.contains('presence')){

    }else{
        films.classList.add('presence');
    }
    outset.classList.remove('presence');
    news.classList.remove('presence');
    others.classList.remove('presence');
})

others.addEventListener('click', function (e){
    if(others.classList.contains('presence')){

    }else{
        others.classList.add('presence');
    }
    outset.classList.remove('presence');
    news.classList.remove('presence');
    films.classList.remove('presence');
})
