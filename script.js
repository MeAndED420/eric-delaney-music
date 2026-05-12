const tracks = [
  { title: 'Mile By Mile', time: '4:18' },
  { title: 'Hold On', time: '3:42' },
  { title: "Good Ol' Days", time: '4:03' },
  { title: 'High Country Way', time: '3:55' },
  { title: 'Long Road Home', time: '4:27' }
];

let current = 0;
let playing = false;

const songTitle = document.getElementById('songTitle');
const trackList = document.getElementById('trackList');
const playBtn = document.getElementById('playBtn');
const progressBar = document.getElementById('progressBar');

function renderTracks() {
  trackList.innerHTML = '';
  tracks.forEach((track, index) => {
    const li = document.createElement('li');
    li.className = index === current ? 'active' : '';
    li.innerHTML = `<span>› ${track.title}</span><span>${track.time}</span>`;
    li.addEventListener('click', () => {
      current = index;
      playing = true;
      updatePlayer();
    });
    trackList.appendChild(li);
  });
}

function updatePlayer() {
  songTitle.textContent = tracks[current].title;
  playBtn.textContent = playing ? '❚❚' : '▶';
  progressBar.style.width = playing ? '65%' : '30%';
  renderTracks();
}

document.getElementById('prevBtn').addEventListener('click', () => {
  current = (current - 1 + tracks.length) % tracks.length;
  updatePlayer();
});

document.getElementById('nextBtn').addEventListener('click', () => {
  current = (current + 1) % tracks.length;
  updatePlayer();
});

playBtn.addEventListener('click', () => {
  playing = !playing;
  updatePlayer();
});

updatePlayer();
