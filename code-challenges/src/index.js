// Your code here
//fetching the data from the server
function fetchCharacters(){
    fetch('http://localhost:3000/characters')
    .then(Response => Response.json())
    .then(characters => displayCharacterNames(characters));
}

function displayCharacterNames(characters){
    const characterBar = document.getElementById('character-bar');
//Adding span to the character bar
    characters.forEach(character => {
        const span = document.createElement('span');
        //adding the character name
        span.textContent = character.name

        //Add click event listener to display character details
        span.addEventListener('click', () => displayCharacterDetails(character));

        characterBar.appendChild(span);
    })
}




fetchCharacters();