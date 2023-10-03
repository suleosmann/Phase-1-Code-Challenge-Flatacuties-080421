// Your code here
//fetching the data from the server
function fetchCharacters(){
    fetch('http://localhost:3000/characters')
    .then(Response => Response.json())
    .then(characters => displayCharacterNames(characters));
}

function displayCharacterNames(characters){
    const characterBar = document.getElementById('character-bar');

}