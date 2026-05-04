
console.log('Script Starting...')
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('GameStart');

startButton.addEventListener('click', () => {
  startButton.style.display = 'none';
  console.log('Game started');
});

const platform = {
  x: 100,
  y: 300,
  width: 200,
  height: 20,
  color: "yellow"
};

function drawPlatform(z) {
  ctx.fillStyle = z.color;
  ctx.fillRect(z.x, z.y, z.width, z.height);
  console.log("Platform drawn");
}

drawPlatform(platform);
console.log("...Script End")
