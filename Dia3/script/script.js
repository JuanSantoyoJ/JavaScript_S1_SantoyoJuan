let deckID = "";
let playerCards = [];
let dealerCards = [];

const playerCardContainer = document.getElementById("player-cards");
const dealerCardContainer = document.getElementById("dealer-cards");
const playerScoreContainer = document.getElementById("player-score");
const dealerScoreContainer = document.getElementById("dealer-score");
const hitButton = document.getElementById("hit-button");
const standButton = document.getElementById("stand-button");
const resultContainer = document.getElementById("result");

async function fetchDeck() {
  const response = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
  const data = await response.json();
  deckID = data.deck_id;
  startGame();
}

function getCardValue(card) {
  if (card.value === "ACE") return 11;
  if (["KING", "QUEEN", "JACK"].includes(card.value)) return 10;
  return parseInt(card.value);
}
function calculateScore(cards) {
    let score = 0;
    let aces = 0;

    for (let card of cards){
        let val = getCardValue(card.value);
        score += val;
        if (card.value === "ACE") aces++;
    }
    while (score > 21 && aces > 0) {
        score -= 10;
        aces--;
    }
    return score;
}

async function drawCard() {
  const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`);
  const data = await response.json();
  return data.cards[0];
  const img = document.createElement("img");

  if (hidden){
    img.src = "https://deckofcardsapi.com/static/img/back.png";
    card.hidden = true;
  } else {
    img.src = card.image;
  }

  if (forPlayer){
    playerCards.push(card);
    playerCardContainer.appendChild(img);
    updateScores();
  }else{
    dealerCards.push(card);
    dealerCardContainer.appendChild(img);
    updateScores();
  }
}

function updateScores(){
    const playerScore = calculateScore(playerCards);
    playerScoreText.textContent = `Puntos: ${playerScore}`;
}