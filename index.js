let homeCount = 0;
let guestCount = 0;
let homeScoreEl = document.getElementById("home-score-el");
let guestScoreEl = document.getElementById("guest-score-el");
// console.log(guestScoreEl)

function addHomeOne() {
  homeCount += 1;
  // console.log(count)
  homeScoreEl.textContent = homeCount;
}

function addHomeTwo() {
  homeCount += 2;
  homeScoreEl.textContent = homeCount;
}

function addHomeThree() {
  homeCount += 3;
  homeScoreEl.textContent = homeCount;
}

function addGuestOne() {
  guestCount += 1;
  // console.log(count)
  guestScoreEl.textContent = guestCount;
}

function addGuestTwo() {
  guestCount += 2;
  guestScoreEl.textContent = guestCount;
}

function addGuestThree() {
  guestCount += 3;
  guestScoreEl.textContent = guestCount;
}

function startNewGame() {
  homeCount = 0;
  guestCount = 0;
  homeScoreEl.textContent = 0;
  guestScoreEl.textContent = 0;
}
