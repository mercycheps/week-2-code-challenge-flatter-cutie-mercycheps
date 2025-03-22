

document.addEventListener("DOMContentLoaded", function () {
    const charaterBar = document.getElementById('character-bar')

    fetch(`http://localhost:3000/characters`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            data.forEach(element => {
                const character = document.createElement('span')
                character.innerText = element.name
                charaterBar.appendChild(character)
            });
        });
});