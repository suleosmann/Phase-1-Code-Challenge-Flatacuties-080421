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
//Display the clicked character's details
function displayCharacterDetails(character){
    const detailedInfo = document.getElementById('detailed-info');
    // Set character name
    const nameElement = detailedInfo.querySelector("#name")
    nameElement.textContent = character.name;

    // Set character image
    const imageElement = detailedInfo.querySelector("#image")
    imageElement.src = character.image;
    imageElement.alt = character.image;

    // Set vote count
    const voteCount = detailedInfo.querySelector('#vote-count');
    voteCount.textContent = character.votes;
    
}

//Add votes when the form is submitted
document.getElementById('votes-form').addEventListener('submit', function(event){
    event.preventDefault();

    const voteInput = document.getElementById('votes');
    const currentVotesCount =document.getElementById('vote-count')
    // Parse the input as an integer and add to the current votes
    const newVoteCount = parseInt(currentVotesCount.textContent)+parseInt(voteInput.value);
    
    // Update the displayed vote count
    currentVotesCount.textContent = newVoteCount;
    voteInput.value = " ";
    
})



fetchCharacters();