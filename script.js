let ball = document.getElementById("ball");
let goodDeedsElement = document.getElementById("good-deeds");
let phraseDisplayElement = document.getElementById("phrase-display");

let goodDeedsCount = 0;
let phrases = ["Alhamdulillah", "Allahu Akbar", "Subhanallah"];

function getRandomPosition() {
    let gameContainer = document.querySelector('.game-container');
    let maxX = gameContainer.offsetWidth - ball.offsetWidth;
    let maxY = gameContainer.offsetHeight - ball.offsetHeight;

    let randomX = Math.floor(Math.random() * maxX);
    let randomY = Math.floor(Math.random() * maxY);

    return { x: randomX, y: randomY };
}

function moveBall() {
    let newPosition = getRandomPosition();
    ball.style.left = newPosition.x + "px";
    ball.style.top = newPosition.y + "px";
}

function increaseGoodDeeds() {
    goodDeedsCount++;
    goodDeedsElement.innerText = goodDeedsCount; // Update score
    let randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    phraseDisplayElement.innerText = randomPhrase; // Display a random phrase
    moveBall();  // Move ball after clicking
}

// Move the ball to a new position every 1 second
setInterval(moveBall, 1000);

// Increase good deeds and display phrase on ball click
ball.addEventListener("click", increaseGoodDeeds);