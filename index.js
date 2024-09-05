const MAX_STARS = 8;

const players = [
    { name: 'Jugador 1', stars: 0 },
    { name: 'Jugador 2', stars: 0 },
    { name: 'Jugador 3', stars: 0 },
    { name: 'Jugador 4', stars: 0 },
];

function createPlayerHTML(player, index) {
    return `
        <div class="player">
            <div><strong>${player.name}</strong></div>
            <div class="stars" id="stars-${index}">
                ${'<span class="star">★</span>'.repeat(MAX_STARS)}
            </div>
            <button onclick="addStar(${index})">Añadir Estrella</button>
        </div>
    `;
}

function renderPlayers() {
    document.getElementById('players').innerHTML = players.map((player, index) => createPlayerHTML(player, index)).join('');
}

function addStar(playerIndex) {
    if (players[playerIndex].stars < MAX_STARS) {
        players[playerIndex].stars += 1;
        updateStarsDisplay(playerIndex);
    }
}

function updateStarsDisplay(playerIndex) {
    const starsElement = document.getElementById(`stars-${playerIndex}`);
    const starElements = starsElement.getElementsByClassName('star');
    for (let i = 0; i < MAX_STARS; i++) {
        starElements[i].style.visibility = i < players[playerIndex].stars ? 'visible' : 'hidden';
    }
}

// Inicializa la interfaz
renderPlayers();
