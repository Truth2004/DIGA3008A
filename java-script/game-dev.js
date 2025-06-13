JS:
//The usual of waiting for the html document to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    const newGameBtn = document.getElementById('new-game-btn'); //getting the button
    const gameCard = document.getElementById('game-card');

    const API_KEY = '6f2d429c52d0421c849d7b80eccebe03';     //Personal API_Key

    //writing the function to fetch and display a random game
    async function getRandomGame() {
        try {
            const response = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}`);//making the request to the api to get a list of games
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`); // check if the response is okay

            const data = await response.json();
            const games = data.results; //get the list, extraction stuff
            const randomIndex = Math.floor(Math.random() * games.length);
            const game = games[randomIndex]; //pick random from the array

            //display selected game's said details
            gameCard.innerHTML = ` 
                <h3>${game.name}</h3>
                <p><strong>Released:</strong> ${game.released}</p>
                <p><strong>Rating:</strong> ${game.rating} / 5</p>
                <a href="${game.website || '#'}" target="_blank">🔗 Official Website</a>
                <img src="${game.background_image}" alt="Screenshot of ${game.name}">
            `;
        } catch (error) {
            console.error('Fetch error:', error); //display error message if something goes wrong
            gameCard.innerHTML = `<p>Could not load game data. Check console for details.</p>`;
        }
    }

    newGameBtn.addEventListener('click', getRandomGame);
    getRandomGame(); //try and load a game when the page loads
});