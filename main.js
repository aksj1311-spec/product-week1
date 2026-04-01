const generateBtn = document.getElementById('generate-btn');
const numbersDisplay = document.querySelector('.numbers-display');

function generateLottoNumbers() {
    numbersDisplay.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    sortedNumbers.forEach(number => {
        const circle = document.createElement('div');
        circle.classList.add('number-circle');
        circle.textContent = number;
        circle.style.backgroundColor = getNumberColor(number);
        numbersDisplay.appendChild(circle);
    });
}

function getNumberColor(number) {
    if (number <= 10) {
        return '#f9a825'; // Yellow
    } else if (number <= 20) {
        return '#1e88e5'; // Blue
    } else if (number <= 30) {
        return '#e53935'; // Red
    } else if (number <= 40) {
        return '#43a047'; // Green
    } else {
        return '#5e35b1'; // Deep Purple
    }
}

generateBtn.addEventListener('click', generateLottoNumbers);

// Generate numbers on initial load
window.addEventListener('load', generateLottoNumbers);