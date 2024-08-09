let homeScore = document.getElementById("home-score").innerText = 0
let guestScore = document.getElementById("guest-score").innerText = 0



function homeOnePointer() {
    homeScore += 1;
    document.getElementById("home-score").innerText = homeScore
}

function homeTwoPointer() {
    homeScore += 2;
    document.getElementById("home-score").innerText = homeScore
}
function homeThreePointer() {
    homeScore += 3;
    document.getElementById("home-score").innerText = homeScore
}
function guestOnePointer() {
    guestScore += 1;
    document.getElementById("guest-score").innerText = guestScore
}
function guestTwoPointer() {
    guestScore += 2;
    document.getElementById("guest-score").innerText = guestScore
}
function guestThreePointer() {
    guestScore += 3;
    document.getElementById("guest-score").innerText = guestScore
}

function resetScores() {
    document.getElementById("home-score").innerText = 0
    document.getElementById("guest-score").innerText = 0
    homeScore = 0;
    guestScore = 0;
}