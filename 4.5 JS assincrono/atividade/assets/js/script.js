const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');
const catImg = document.getElementById('cat');

const getCats = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();

        return json.webpurl;
        console.log(json)
    } catch (error) {
        console.log(error);
    }
}

const loadCat = async () => {
    catImg.src = await getCats();      
}

loadCat();

catBtn.addEventListener('click', loadCat )