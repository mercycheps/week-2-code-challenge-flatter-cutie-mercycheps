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



document.addEventListener("DOMContentLoaded", function () {
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
