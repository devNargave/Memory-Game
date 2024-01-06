const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span');
let PlayerLives = 8;

playerLivesCount.textContent = PlayerLives;

// generate the data 


const getData =()=>[
    {imgSrc: './images/Gary_Blastoise.webp', name:'first'},
    {imgSrc:'./images/HD-wallpaper-gengar-gengae-pokemon.jpg', name:'second'},
    {imgSrc:'./images/HD-wallpaper-gengar-pokemon-pokemon.jpg',name:'third'},
    {imgSrc:'./images/HD-wallpaper-lucario-pokemon.jpg', name:'4'},
    {imgSrc:'./images/HD-wallpaper-pokemon-bulbasaur-water-artwork-anime.jpg', name:'5'},
    {imgSrc:'./images/HD-wallpaper-pokemon-charizard-charizard-pokemon-pokemon-charizard-pokemon.jpg',name:'6'},
    {imgSrc:'./images/HD-wallpaper-snorlax-relaxed-anime-pokemon-pokemonprimerageneracion-pokemon-snorlax.jpg',name:'7'},
    {imgSrc:'./images/HD-wallpaper-pokemon-pokemon-go-squirtle.jpg',name:'8'},
    {imgSrc: './images/Gary_Blastoise.webp', name:'first'},
    {imgSrc:'./images/HD-wallpaper-gengar-gengae-pokemon.jpg', name:'second'},
    {imgSrc:'./images/HD-wallpaper-gengar-pokemon-pokemon.jpg',name:'third'},
    {imgSrc:'./images/HD-wallpaper-lucario-pokemon.jpg', name:'4'},
    {imgSrc:'./images/HD-wallpaper-pokemon-bulbasaur-water-artwork-anime.jpg', name:'5'},
    {imgSrc:'./images/HD-wallpaper-pokemon-charizard-charizard-pokemon-pokemon-charizard-pokemon.jpg',name:'6'},
    {imgSrc:'./images/HD-wallpaper-snorlax-relaxed-anime-pokemon-pokemonprimerageneracion-pokemon-snorlax.jpg',name:'7'},
    {imgSrc:'./images/HD-wallpaper-pokemon-pokemon-go-squirtle.jpg',name:'8'},
];


const randomize =()=>{
    const cardData = getData();
    cardData.sort(()=>Math.random() - 0.5);
    return cardData;
}


const cardGenetor = () =>{
    const cardData = randomize();
    //Html
    cardData.forEach((item) =>{
        const card = document.createElement('div');
        const face = document.createElement('img');
        const back = document.createElement('div');
        card.classList = 'card';
        face.classList = 'face';
        back.classList = 'back';


        face.src = item.imgSrc;
        card.setAttribute('name', item.name);
       

        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);


        card.addEventListener('click',(e)=>{
            card.classList.toggle('toggleCard');
            checkCard(e);
        })
       
    })
    
};

const checkCard = (e) => {
    console.log(e)
    const clickedCard = e.target;
    clickedCard.classList.add('flipped');
    const flippedCards = document.querySelectorAll('.flipped');
    const toggleCard = document.querySelectorAll('.toggleCard')
    if(flippedCards.length === 2){
        if(flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')){
            console.log('match');
            flippedCards.forEach(card => {
                card.classList.remove('flipped');
                card.style.pointerEvents = 'none';
            })
        }else{
            console.log('wrong');
            flippedCards.forEach(card => {
                card.classList.remove('flipped');
                setTimeout(() => card.classList.remove('toggleCard'), 1000);

            });
            PlayerLives--;
            playerLivesCount.textContent = PlayerLives
            if(PlayerLives === 0){
                restart('Try Again');

            }
        }
    }
    if(toggleCard.length === 16){
        restart('You won')
    }
}

const restart = (text) => {

    let cardData = randomize();
    let face = document.querySelectorAll('.face');
    let cards = document.querySelectorAll('.card');
    section.style.pointerEvents = 'none';
    cardData.forEach((item, index) =>{
        cards[index].classList.remove('toggleCard');
        setTimeout(()=>{ cards[index].style.pointerEvents = 'all';
        face[index].src = item.imgSrc;
        cards[index].setAttribute('name', item.name);
        section.style.pointerEvents = 'all';
    },1000)

    })
    PlayerLives = 8;
    playerLivesCount.textContent = PlayerLives;
    setTimeout(() => window.alert(text), 1000);
    
}

cardGenetor();
