homeS = document.getElementById("home-s")
guestS = document.getElementById("guest-s")
let scoreH = 0
let scoreG = 0
function oneH(){
    scoreH += 1
    homeS.textContent = scoreH
}
function twoH(){
    scoreH += 2
    homeS.textContent = scoreH
}
function threeH(){
    scoreH += 3
    homeS.textContent = scoreH
}
function oneG(){
    scoreG += 1
    guestS.textContent = scoreG
}
function twoG(){
    scoreG += 2
    guestS.textContent = scoreG
}
function threeG(){
    scoreG += 3
    guestS.textContent = scoreG
}
function newS(){
    homeS.textContent = 0
    guestS.textContent = 0
    scoreH = 0
    scoreG = 0
}