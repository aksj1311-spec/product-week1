const moodData = {
    happy: [
        { title: "Can't Stop the Feeling!", artist: "Justin Timberlake" },
        { title: "Happy", artist: "Pharrell Williams" },
        { title: "Walking on Sunshine", artist: "Katrina & The Waves" },
        { title: "Don't Stop Me Now", artist: "Queen" },
        { title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars" }
    ],
    sad: [
        { title: "Someone Like You", artist: "Adele" },
        { title: "Fix You", artist: "Coldplay" },
        { title: "Stay With Me", artist: "Sam Smith" },
        { title: "Yesterday", artist: "The Beatles" },
        { title: "Skinny Love", artist: "Bon Iver" }
    ],
    energetic: [
        { title: "Eye of the Tiger", artist: "Survivor" },
        { title: "Stronger", artist: "Kanye West" },
        { title: "Power", artist: "Kanye West" },
        { title: "Lose Yourself", artist: "Eminem" },
        { title: "Thunderstruck", artist: "AC/DC" }
    ],
    relaxed: [
        { title: "Weightless", artist: "Marconi Union" },
        { title: "Sunflower", artist: "Post Malone & Swae Lee" },
        { title: "Better Together", artist: "Jack Johnson" },
        { title: "Coming Home", artist: "Leon Bridges" },
        { title: "Put Your Records On", artist: "Corinne Bailey Rae" }
    ],
    focused: [
        { title: "Clair de Lune", artist: "Claude Debussy" },
        { title: "Experience", artist: "Ludovico Einaudi" },
        { title: "Cornfield Chase", artist: "Hans Zimmer" },
        { title: "River Flows in You", artist: "Yiruma" },
        { title: "Gymnopédie No. 1", artist: "Erik Satie" }
    ]
};

let currentMood = '';

const moodButtons = document.querySelectorAll('.mood-btn');
const recommendationCard = document.getElementById('recommendation-card');
const songTitle = document.getElementById('song-title');
const artistName = document.getElementById('artist-name');
const listenLink = document.getElementById('listen-link');
const nextBtn = document.getElementById('next-btn');

function getRecommendation(mood) {
    const songs = moodData[mood];
    const randomIndex = Math.floor(Math.random() * songs.length);
    return songs[randomIndex];
}

function updateUI(mood) {
    currentMood = mood;
    const song = getRecommendation(mood);
    
    songTitle.textContent = song.title;
    artistName.textContent = song.artist;
    
    const searchQuery = encodeURIComponent(`${song.title} ${song.artist}`);
    listenLink.href = `https://www.youtube.com/results?search_query=${searchQuery}`;
    
    recommendationCard.classList.remove('hidden');
    
    // Smooth scroll to card
    recommendationCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Add a little pop animation
    recommendationCard.style.animation = 'none';
    recommendationCard.offsetHeight; // trigger reflow
    recommendationCard.style.animation = null;
}

moodButtons.forEach(button => {
    button.addEventListener('click', () => {
        const mood = button.getAttribute('data-mood');
        updateUI(mood);
    });
});

nextBtn.addEventListener('click', () => {
    if (currentMood) {
        updateUI(currentMood);
    }
});
