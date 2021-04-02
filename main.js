const panacek = document.querySelector("#panacek");
const mince = document.querySelector("#mince");
const score = document.querySelector("#score");
const moveBy = 40;

const maxWidth = window.innerWidth;
const maxHeight = window.innerHeight;

/////////////////////////////////////////
// chceck - clientWidth usability 
const mincekWidth = mince.clientWidth;
const minceHeight = mince.clientHeight;
const panacekWidth = panacek.clientWidth;
const panacekHeight = panacek.clientHeight;

// PLACE PANACE IN THE MIDDLE OF WINDOW
function placePanacka() {
  panacek.style.top = maxHeight / 2 + "px";
  panacek.style.left = maxWidth / 2 + "px";
}

// GET RANDOM POSITON FOR COIN
function generateCoinRandomPosition() {
  const w1 = maxWidth - mincekWidth;
  const h1 = maxHeight - minceHeight;
  const randomWidth = Math.floor(Math.random() * w1);
  const randomHeight = Math.floor(Math.random() * h1);
  mince.style.top = randomHeight + "px";
  mince.style.left = randomWidth + "px";
}

// POSITION OF PANACEK AND COIN
function checkKolize() {
  let panacekY = panacek.offsetTop;
  let panacekX = panacek.offsetLeft;
  let minceY = mince.offsetTop;
  let minceX = mince.offsetLeft;
  if (
    !(
      panacekX + panacekWidth < minceX ||
      minceX + mincekWidth < panacekX ||
      panacekY + panacekHeight < minceY ||
      minceY + minceHeight < panacekY
    )
  ) {
    score.innerHTML = parseInt(score.innerHTML) + 1;
    generateCoinRandomPosition();
    checkVictory();
  }
}

function checkVictory() {
  if (parseInt(score.innerHTML) === 5) {
    alert("Win !!");
  }
}

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      if (parseInt(panacek.style.left) - moveBy > 0) {
        panacek.style.left = parseInt(panacek.style.left) - moveBy + "px";
      }
      panacek.src = "obrazky/panacek-vlevo.png";
      break;
    case "ArrowRight":
      if (parseInt(panacek.style.left) + panacekWidth + moveBy < maxWidth) {
        panacek.style.left = parseInt(panacek.style.left) + moveBy + "px";
      }
      panacek.src = "obrazky/panacek-vpravo.png";
      break;
    case "ArrowUp":
      if (parseInt(panacek.style.top) - moveBy > 0) {
        panacek.style.top = parseInt(panacek.style.top) - moveBy + "px";
      }
      panacek.src = "obrazky/panacek-nahoru.png";
      break;
    case "ArrowDown":
      if (parseInt(panacek.style.top) + panacekHeight + moveBy < maxHeight) {
        panacek.style.top = parseInt(panacek.style.top) + moveBy + "px";
      }
      panacek.src = "obrazky/panacek.png";
      break;
  }
  checkKolize();
});

generateCoinRandomPosition();
placePanacka();

console.log(mincekWidth, minceHeight);
console.log(panacekWidth, panacekHeight);

