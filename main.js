const moodData = {
    happy: [
        { title: "Dynamite", artist: "BTS" },
        { title: "Love Lee", artist: "AKMU" },
        { title: "Hype Boy", artist: "NewJeans" },
        { title: "파이팅 해야지 (Feat. 이영지)", artist: "부석순 (SEVENTEEN)" },
        { title: "러브 썸띵", artist: "아이유" }
    ],
    sad: [
        { title: "밤편지", artist: "아이유" },
        { title: "안녕", artist: "폴킴" },
        { title: "모든 날, 모든 순간", artist: "폴킴" },
        { title: "사랑하지 않아서 그랬어", artist: "임한별" },
        { title: "어떻게 이별까지 사랑하겠어, 널 사랑하는 거지", artist: "AKMU" }
    ],
    energetic: [
        { title: "Next Level", artist: "aespa" },
        { title: "Super Shy", artist: "NewJeans" },
        { title: "이브, 프시케 그리고 푸른 수염의 아내", artist: "LE SSERAFIM" },
        { title: "Seven (Feat. Latto)", artist: "정국" },
        { title: "MANIAC", artist: "Stray Kids" }
    ],
    relaxed: [
        { title: "Ditto", artist: "NewJeans" },
        { title: "비 오는 날 듣기 좋은 노래", artist: "에픽하이" },
        { title: "가을 아침", artist: "아이유" },
        { title: "Square (2017)", artist: "백예린" },
        { title: "자장가", artist: "아이유" }
    ],
    focused: [
        { title: "Maybe", artist: "Yiruma" },
        { title: "Kiss the Rain", artist: "Yiruma" },
        { title: "Last Carnival", artist: "Acoustic Cafe" },
        { title: "그해 우리는 (Piano Ver.)", artist: "남혜승" },
        { title: "숲의 노래", artist: "릴렉싱 뮤직" }
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
