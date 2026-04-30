const hero = document.getElementById("hero");
const chest = document.getElementById("chestClosed");
const redChest = document.getElementById("redChestClosed");
const redKey = document.getElementById("redKey");
const chestOpeningText = document.getElementById("chestOpeningText");
const redChestOpeningText = document.getElementById("redChestOpeningText");
const redChestInvalidOpeningText = document.getElementById("redChestInvalidOpeningText");
const chestRewards1 = document.getElementById("chestRewards1");
const chestRewards2 = document.getElementById("chestRewards2");

let keys = {};
let speed = 3.5;
let x = 1000;
let y = 680;
let redKeyVariable = false;
let goldenKeyVariable = false;
let chestOpened = false;
let redChestOpened = false;


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
        chestOpened = true;
    }
    if (sessionStorage.getItem("redChestOpened") === "true") {
        document.getElementById("redChestClosed").style.display = "none";
        document.getElementById("redChestOpened").style.display = "inline";
        redChestOpened = true;
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
    if (x >= 1583){
        keys["d"] = false;
    }
    if (y >= 695){
        keys["s"] = false;
    }
}

function wall1() {
    if (x + 60 >= 260 && x + 60 <= 320 && y + 60 >= 0 && y <= 300) {
        keys["d"] = false;
    }
    if (x <= 350 && x >= 330 && y + 60 >= 0 && y <= 300) {
        keys["a"] = false;
    }
    if (y + 60 >= 0 && y + 60 <= 20 && x + 60 >= 300 && x <= 350) {
        keys["s"] = false;
    }
    if (y <= 300 && y >= 280 && x + 60 >= 300 && x <= 350) {
        keys["w"] = false;
    }
}

function wall2() {
    if (x + 60 >= 260 && x + 60 <= 320 && y + 60 >= 500 && y <= 805) {
        keys["d"] = false;
    }
    if (x <= 350 && x >= 330 && y + 60 >= 500 && y <= 805) {
        keys["a"] = false;
    }
    if (y + 60 >= 460 && y + 60 <= 520 && x + 60 >= 300 && x <= 350) {
        keys["s"] = false;
    }
    if (y <= 805 && y >= 785 && x + 60 >= 300 && x <= 350) {
        keys["w"] = false;
    }
}

function closeToChest() {
    if (Math.abs(1580 - x) <= 50 && Math.abs(350 - y) <= 50) {
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
        chestOpened = true;
    }
}

function redKeyPickUp() {
    if (Math.abs(25 - x) <= 50 && Math.abs(50 - y) <= 25) {
        redKey.style.display = "none"
        redKeyVariable = true;
    }
}

function closeToRedChest() {
    if (Math.abs(1580 - x) <= 50 && Math.abs(100 - y) <= 50) {
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
        redChestOpened = true;
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
    if (x >= 1000 && x <= 1100 && y >= 690 && chestOpened && redChestOpened) {
        sessionStorage.setItem("redKeyPickedUp", redKeyVariable);
        sessionStorage.setItem("goldenKeyVariable", goldenKeyVariable);
        sessionStorage.setItem("chestOpened", chestOpened);
        sessionStorage.setItem("redChestOpened", redChestOpened);
        window.location.href = "dragonRoom.html";
    }
}