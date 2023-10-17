let homeEl = document.getElementById("home-el")
let guestEl=document.getElementById("guest-el")
let homecard = 0
let guestcard = 0

function homescoreBtn1() {
    homecard+=1
    homeEl.innerHTML = homecard
}
function homescoreBtn2() {
    homecard+=2
    homeEl.innerHTML = homecard
}

function homescoreBtn3() {
    homecard+=3
    homeEl.innerHTML = homecard
}

function guestscoreBtn1() {
    guestcard+=1
    guestEl.innerHTML = guestcard
}
function guestscoreBtn2() {
    guestcard+=2
    guestEl.innerHTML = guestcard
}
function guestscoreBtn3() {
    guestcard+=3
    guestEl.innerHTML = guestcard
}

// 1. Create a function, save(), which logs out the count when it's called


function startBtn() {
     homecard = 0
     guestcard = 0
    guestEl.innerHTML = 0
    homeEl.innerHTML = 0
    
    
}