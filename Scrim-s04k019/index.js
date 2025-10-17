homeS = document.getElementById("home-s")
awayS = document.getElementById("away-s")
let scoreH = 0
let scoreA = 0
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
function oneA(){
    scoreA += 1
    awayS.textContent = scoreA
}
function twoA(){
    scoreA += 2
    awayS.textContent = scoreA
}
function threeA(){
    scoreA += 3
    awayS.textContent = scoreA
}
function newS(){
    homeS.textContent = 0
    awayS.textContent = 0
    scoreH = 0
    scoreA = 0
}