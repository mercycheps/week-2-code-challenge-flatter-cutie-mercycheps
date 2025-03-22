function displaycharacterInfo(e) {
    e.preventDefault()
    fetch(`http://localhost:3000/characters/${e.target.id}`)
        .then((response) => response.json())
        .then((characterJson) => {
            // show character name, image, votes
            const characterNameElem = document.getElementById('name')
            const characterImageElem = document.getElementById('image')
            const characterVoteCountElem = document.getElementById('vote-count')
            characterNameElem.innerText = characterJson.name
            characterImageElem.src = characterJson.image
            characterVoteCountElem.innerText = characterJson.votes
        });

}
function submitVote(e) {
    e.preventDefault()
    const characterVoteCountElem = document.getElementById('vote-count')


    // get votes from e 
    const votes = parseInt(e.target['votes'].value, 10)
    const currentVotes = parseInt(characterVoteCountElem.innerText, 10)

    // then add to current votes 
    // then update current
    characterVoteCountElem.innerText = currentVotes + votes
    // clear the form
    e.target.reset()
}
function resetVotes() {

    const characterVoteCountElem = document.getElementById('vote-count')
    characterVoteCountElem.innerText = 0

}
function addNewCharacter(e) {
    e.preventDefault()
    const name = e.target["name"].value
    const imageUrl = e.target["image-url"].value

    // append character

    const newCharacter = {
        name: name,
        image: imageUrl
    }

    const character = document.createElement('span')
    character.id = newCharacter.id
    character.addEventListener("click", displaycharacterInfo)
    character.innerText = newCharacter.name
    charaterBar.appendChild(character)
}



document.addEventListener("DOMContentLoaded", function () {
    const inputForm = document.getElementById("votes-form");
    inputForm.addEventListener("submit", submitVote)

    const characterForm = document.getElementById("character-form")
    characterForm.addEventListener("submit", addNewCharacter)

    const charaterBar = document.getElementById('character-bar')

    fetch(`http://localhost:3000/characters`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            data.forEach(element => {
                const character = document.createElement('span')
                character.id = element.id
                character.addEventListener("click", displaycharacterInfo)
                character.innerText = element.name
                charaterBar.appendChild(character)

            });
        });
});
