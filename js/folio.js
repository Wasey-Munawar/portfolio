const slider = document.querySelector('.slider');
const cards = document.querySelectorAll('.project-card');
let index = 0;

function showCard(index) {
    cards.forEach((card, i) => {
        card.style.display = i === index ? 'block' : 'none';
    });
}

function nextCard() {
    index = (index + 1) % cards.length;
    showCard(index);
}

function prevCard() {
    index = (index - 1 + cards.length) % cards.length;
    showCard(index);
}

showCard(index);

setInterval(nextCard, 5000); // Change card every 5 seconds, adjust as needed


