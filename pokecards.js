import { pokemon } from './pokemon.js';

pokemon.forEach((singleMon) => {
    fetch(singleMon.url)
    .then(function(response) {
      return response.json()
    })
    .then(function(myJson) {
      //console.log(myJson)
      createPokeCard(myJson)
    })
});



//console.log(pokemon);

const mainContainer = document.querySelector('.pokemon-container');
class pokepoke{}
function createPokeCard(pokedata) {
    let card = document.createElement('div');
    card.classList = 'card';
    let name = document.createElement('p');
    let image = document.createElement('img');
    image.classList = 'front-image';
    let frontHolder = document.createElement('div');
    frontHolder.classList = 'front';
    let backHolder = document.createElement('div');
    backHolder.classList = 'back hidden bounce animated';
    let list = document.createElement('ul');
    list.classList = 'abilities';
    let img = document.createElement('img');
    img.src = 'pokeball_PNG8.png';
    backHolder.appendChild(img);

    for (const ability of pokedata.abilities) {
      let li = document.createElement('li');
      li.classList = 'list-ability';
      li.innerText = ability.ability.name;
      list.appendChild(li);
    }

    backHolder.appendChild(list);

    name.textContent = pokedata.name;
    image.src = pokedata.sprites.front_default;
    card.appendChild(name);
    frontHolder.appendChild(image);
    card.appendChild(frontHolder);
    card.appendChild(backHolder);
    mainContainer.appendChild(card);
} 

document.addEventListener('click', function (event) {

	if (event.target.matches('.front') || event.target.matches('.front-image')){
	  event.preventDefault();
    let cardClicked = event.target;
    while(cardClicked.className != 'card'){
      cardClicked = cardClicked.parentElement;
    }

    let thisFront = cardClicked.querySelector('.front');
    thisFront.classList = 'front hidden bounce animated'
    let thisBack = cardClicked.querySelector('.back');
    thisBack.classList = 'back flipInY animated';
  }else if(event.target.matches('.back') || event.target.matches('.abilities') || event.target.matches('.list-ability') || event.target.matches('.back > img')){
    let cardClicked = event.target;
    while(cardClicked.className != 'card'){
      cardClicked = cardClicked.parentElement;
    }

    let thisFront = cardClicked.querySelector('.front');
    thisFront.classList = 'front bounce animated'
    let thisBack = cardClicked.querySelector('.back');
    thisBack.classList = 'back hidden bounce animated';
  }else{
    console.log('something else was clicked');
    console.log(event.target);
  }
});



class Pokemon {
  constructor(name) {
      this.id = 0,
      this.name = name,
      this.moves = [
        {
          move: {
            name: 'Genius',
          },
        },
        {
          move: {
            name: 'Brilliance',
          },
        },
        {
          move: {
            name: 'Hammer',
          },
        },
        {
          move: {
            name: 'Thunder',
          },
        },
      ]
  }
}

const maxemonButton = document.querySelector('#maxemon')

maxemonButton.addEventListener('click', function() 
{ createPokeCard(matchIdToImage(new Pokemon('Maxemon')))
})


