let gameWidth = window.innerWidth;
let gameHeight = window.innerHeight;

const hero = document.getElementById("hero");
const chest = document.getElementById("chestClosed");
chest.style.left = (gameWidth - 160) + "px";
const redChest = document.getElementById("redChestClosed");
redChest.style.left = (gameWidth - 160) + "px";
const chestOpened = document.getElementById("chestOpened");
chestOpened.style.display = "none";
chestOpened.style.left = (gameWidth - 160) + "px";
const redChestOpened = document.getElementById("redChestOpened");
redChestOpened.style.display = "none";
redChestOpened.style.left = (gameWidth - 160) + "px";
const redKey = document.getElementById("redKey");
const chestOpeningText = document.getElementById("chestOpeningText");
const redChestOpeningText = document.getElementById("redChestOpeningText");
const redChestInvalidOpeningText = document.getElementById("redChestInvalidOpeningText");
const chestRewards1 = document.getElementById("chestRewards1");
const chestRewards2 = document.getElementById("chestRewards2");

let keys = {};
let speed = 3.5;
let x = gameWidth / 2 + 150;
let y = gameHeight - 140;
let redKeyVariable = false;
let goldenKeyVariable = false;
let chestOpenedCon = false;
let redChestOpenedCon = false;



document.addEventListener("keydown", (movement) => {
    keys[movement.key] = true;
});
document.addEventListener("keyup", (movement) => {
    keys[movement.key] = false;
    hero.src = "hero.png";
});

window.onload = function() {
    if (sessionStorage.getItem("chestOpened") === "true") {
        document.getElementById("chestClosed").style.display = "none";
        document.getElementById("chestOpened").style.display = "inline";
        chestOpenedCon = true;
    }
    if (sessionStorage.getItem("redChestOpened") === "true") {
        document.getElementById("redChestClosed").style.display = "none";
        document.getElementById("redChestOpened").style.display = "inline";
        redChestOpenedCon = true;
    }
    if (sessionStorage.getItem("redKeyPickedUp") === "true") {
        redKeyVariable = true;
        redKey.style.display = "none";
    }
    if (sessionStorage.getItem("goldenKeyVariable")) {
        goldenKeyVariable = true;
        document.getElementById("unlockableDoor1").style.display = "none";
    }
}

function update() {
    borders();
    wall1();
    wall2();
    closeToChest();
    chestOpening();
    redChestOpening();
    redKeyPickUp();
    goldenDoorOpening();
    if (goldenKeyVariable === false) {
        goldenDoorBorder();
    }
    room2();

    if (keys["w"]){
        y -= speed;
        hero.src = "heroUp1.png";
    }
    if (keys["a"]){
        x -= speed;
        hero.src = "heroLeft1.png";
    }
    if (keys["s"]){
        y += speed;
        hero.src = "heroDown1.png";
    }
    if (keys["d"]){
        x += speed;
        hero.src = "heroRight1.png";
    }

    hero.style.left = x + "px";
    hero.style.top = y + "px";

    requestAnimationFrame(update);
}

update();

function borders() {
    if (15 >= x){
        keys["a"] = false;
    }
    if (15 >= y){
        keys["w"] = false;
    }
    if (x >= gameWidth - 110){
        keys["d"] = false;
    }
    if (y >= gameHeight - 110){
        keys["s"] = false;
    }
}

function wall1() {
    if (x + 60 >= gameWidth*0.16 && x + 60 <= gameWidth*0.205 && y + 60 >= 0 && y <= gameHeight*0.38) {
        keys["d"] = false;
    }
    if (x <= gameWidth*0.225 && x >= gameWidth*0.205 && y + 60 >= 0 && y <= gameHeight*0.38) {
        keys["a"] = false;
    }
    if (y + 60 >= 0 && y + 60 <= 20 && x + 60 >= gameWidth*0.16 && x <= gameWidth*0.225) {
        keys["s"] = false;
    }
    if (y <= gameHeight*0.38 && y >= gameHeight*0.38 - 20 && x + 60 >= gameWidth*0.16 && x <= gameWidth*0.225) {
        keys["w"] = false;
    }
}

function wall2() {
    if (x + 60 >= gameWidth*0.16 && x + 60 <= gameWidth*0.205 && y + 60 >= gameHeight*0.61 && y <= gameHeight) {
        keys["d"] = false;
    }
    if (x <= gameWidth*0.225 && x >= gameWidth*0.205 && y + 60 >= gameHeight*0.61 && y <= gameHeight) {
        keys["a"] = false;
    }
    if (y + 60 >= gameHeight*0.61 && y + 60 <= gameHeight*0.61 + 20 && x + 60 >= gameWidth*0.16 && x <= gameWidth*0.225) {
        keys["s"] = false;
    }
    if (y <= gameHeight && y >= gameHeight - 20 && x + 60 >= gameWidth*0.16 && x <= gameWidth*0.225) {
        keys["w"] = false;
    }
}

function closeToChest() {
    if (Math.abs(gameWidth - 110 - x) <= 50 && Math.abs(350 - y) <= 50) {
        chestOpeningText.style.display = "inline";
        return true;
    }
    else chestOpeningText.style.display = "none";
        chestRewards1.style.display = "none";
    return false;
}

function chestOpening() {
    if (closeToChest() && keys["e"]){
        document.getElementById("chestClosed").style.display = "none";
        document.getElementById("chestOpened").style.display = "inline";
        chestOpeningText.style.display = "none";
        chestRewards1.style.display = "inline";
        goldenKeyVariable = true;
        chestOpenedCon = true;
    }
}

function redKeyPickUp() {
    if (Math.abs(25 - x) <= 50 && Math.abs(50 - y) <= 25) {
        redKey.style.display = "none"
        redKeyVariable = true;
    }
}

function closeToRedChest() {
    if (Math.abs(gameWidth - 100 - x) <= 50 && Math.abs(100 - y) <= 50) {
        redChestOpeningText.style.display = "inline";
        return true;
    }
    else redChestOpeningText.style.display = "none";
    return false;
}

function redChestOpening() {
    if (closeToRedChest() && keys["e"] && redKeyVariable){
        document.getElementById("redChestClosed").style.display = "none";
        document.getElementById("redChestOpened").style.display = "inline";
        redChestOpeningText.style.display = "inline";
        chestRewards2.style.display = "inline";
        redChestOpenedCon = true;
    }
    if (closeToRedChest() && keys["e"] && !redKeyVariable){
        redChestInvalidOpeningText.style.display = "inline";
    }
    if (!closeToRedChest()) {
        redChestInvalidOpeningText.style.display = "none";
        chestRewards2.style.display = "none";
    }
}

function goldenDoorOpening() {
    if (x <= 320 && x >= 300 && y >= 300 && y <= 500 && goldenKeyVariable){
        document.getElementById("unlockableDoor1").style.display = "none";
    }
}

function goldenDoorBorder() {
    if (x <= 320 && x >= 300 && y >= 300 && y <= 500) {
        keys["a"] = false;
    }
}

function room2() {
    if (x >= gameWidth / 2 + 100 && x <= gameWidth / 2 + 200 && y >= gameHeight - 120 && chestOpenedCon && redChestOpenedCon) {
        sessionStorage.setItem("redKeyPickedUp", redKeyVariable);
        sessionStorage.setItem("goldenKeyVariable", goldenKeyVariable);
        sessionStorage.setItem("chestOpened", chestOpenedCon);
        sessionStorage.setItem("redChestOpened", redChestOpenedCon);
        window.location.href = "dragonRoom.html";
    }
}