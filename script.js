// Apology Page
const nextButton = document.getElementById('nextButton');
if (nextButton) {
    nextButton.addEventListener('click', () => {
        window.location.href = 'proposal.html'; // Redirect to the proposal page
    });
}

// Proposal Page
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const celebration = document.getElementById('celebration');

if (yesButton && noButton && celebration) {
    // Function to move the "No" button randomly
    const moveNoButton = () => {
        const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
        const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    };

    // Move the "No" button when hovered or clicked
    noButton.addEventListener('mouseover', moveNoButton);
    noButton.addEventListener('click', moveNoButton);

    // Handle "Yes" button click
    yesButton.addEventListener('click', () => {
        // Show celebration GIF and message
        celebration.classList.remove('hidden');
        document.querySelector('.buttons').classList.add('hidden');
        document.querySelector('h1').classList.add('hidden');
        document.querySelector('.gif-container').classList.add('hidden');
        document.querySelector('.hearts').classList.add('hidden');
    });
}