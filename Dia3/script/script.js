let deckId = '';

async function getDeck() {
  const res = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
  const data = await res.json();
  deckId = data.deck_id;
}

function getCardValue(value) {
  const map = {
    "ACE": 14,
    "KING": 13,
    "QUEEN": 12,
    "JACK": 11
  };
  return map[value] || parseInt(value);
}

async function playRound() {
  const res = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`);
  const data = await res.json();
  const playerCard = data.cards[0];
  const machineCard = data.cards[1];

  document.getElementById('player-card').src = playerCard.image;
  document.getElementById('machine-card').src = machineCard.image;

  const playerValue = getCardValue(playerCard.value);
  const machineValue = getCardValue(machineCard.value);

  const resultText = document.getElementById('result');
  if (playerValue > machineValue) {
    resultText.textContent = '¡Ganaste!';
    resultText.style.color = '#2ecc71';
  } else if (playerValue < machineValue) {
    resultText.textContent = 'Perdiste :(';
    resultText.style.color = '#e74c3c';
  } else {
    resultText.textContent = '¡Empate!';
    resultText.style.color = '#f1c40f';
  }
}

getDeck();