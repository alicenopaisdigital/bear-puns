// Display a random bear pun
function displayRandomBearPun(bearPuns) {
    const randomIndex = Math.floor(Math.random() * bearPuns.length);
    const randomBearPun = bearPuns[randomIndex];

    const punElement = document.getElementById('pun');
    punElement.textContent = randomBearPun;
}

// Load the bear puns from a JSON file
fetch('puns.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch bear puns');
        }
        return response.json();
    })
    .then(bearPuns => displayRandomBearPun(bearPuns))
    .catch(error => console.error('Error loading bear puns:', error));
