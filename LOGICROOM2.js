const hero = document.getElementById("hero");
const heart1 = document.getElementById("heart1");
const heart2 = document.getElementById("heart2");
const heart3 = document.getElementById("heart3");
const dragonImg = document.getElementById("dragon");
const dragonHitImg = document.getElementById("dragonHit");
dragonHitImg.style.display = "none";
const canHitText = document.getElementById("canHit");
canHitText.style.display = "none";
const portalText = document.getElementById("portalText");
portalText.style.display = "none";
const gameOverText = document.getElementById("gameOver");
gameOverText.style.display = "none";
const fireball1 = document.getElementById("fireball1");
fireball1.style.display = "none";
const fireball2 = document.getElementById("fireball2");
fireball2.style.display = "none";
const fireball3 = document.getElementById("fireball3");
fireball3.style.display = "none";
const fireball4 = document.getElementById("fireball4");
fireball4.style.display = "none";
const fireball5 = document.getElementById("fireball5");
fireball5.style.display = "none";
const fireball6 = document.getElementById("fireball6");
fireball6.style.display = "none";
const fireball12 = document.getElementById("fireball12");
fireball12.style.display = "none";
const fireball22 = document.getElementById("fireball22");
fireball22.style.display = "none";
const fireball32 = document.getElementById("fireball32");
fireball32.style.display = "none";
const fireball42 = document.getElementById("fireball42");
fireball42.style.display = "none";
const fireball52 = document.getElementById("fireball52");
fireball52.style.display = "none";
const fireball62 = document.getElementById("fireball62");
fireball62.style.display = "none";
const homingFireballs = document.getElementById("homingFireball");
homingFireballs.style.display = "none";
const portal = document.getElementById("portal");
portal.style.display = "none";

let keys = {};
let running = true;
let invincible = false;
let portalActive = false;
let speed = 3.5;
let x = 1000;
let y = 50;
let close = false;
let attackCooldown = false;
let dragon = {
    x: 370,
    y:350
}
let homingFireballsHB = {
    x: 450,
    y: 425
}
let portalPosition = {
    x: 1400,
    y: 350
}
let hp = 30;
let dragonHP = 100;
let woodenSwordDamage = 50;
let fireball1HB = {
    x: 425,
    y: 450
}
let fireball2HB = {
    x: 425,
    y: 450
}
let fireball3HB = {
    x: 425,
    y: 450
}
let fireball4HB = {
    x: 425,
    y: 450
}
let fireball5HB = {
    x: 425,
    y: 450
}
let fireball6HB = {
    x: 425,
    y: 450
}
let fireball12HB = {
    x: 425,
    y: 450
}
let fireball22HB = {
    x: 425,
    y: 450
}
let fireball32HB = {
    x: 425,
    y: 450
}
let fireball42HB = {
    x: 425,
    y: 450
}
let fireball52HB = {
    x: 425,
    y: 450
}
let fireball62HB = {
    x: 425,
    y: 450
}

document.addEventListener("keydown", (movement) => {
    keys[movement.key] = true;
    if (movement.key === "f") {
        dragonHit();
    }
});
document.addEventListener("keyup", (movement) => {
    keys[movement.key] = false;
    hero.src = "hero.png";
});

function update() {
    if (!running) return;

    borders();
    index();

    if (fireball1HB !== "none") {
        fireball1HB.x += 0;
        fireball1HB.y += 2;
        fireball1.style.left = fireball1HB.x + "px";
        fireball1.style.top = fireball1HB.y + "px";
    }
    if (fireball2HB !== "none") {
        fireball2HB.x += 1.5;
        fireball2HB.y += 1.5;
        fireball2.style.left = fireball2HB.x + "px";
        fireball2.style.top = fireball2HB.y + "px";
    }
    if (fireball3HB !== "none") {
        fireball3HB.x += 1.5;
        fireball3HB.y -= 1.5;
        fireball3.style.left = fireball3HB.x + "px";
        fireball3.style.top = fireball3HB.y + "px";
    }
    if (fireball4HB !== "none") {
        fireball4HB.x += 0;
        fireball4HB.y -= 2;
        fireball4.style.left = fireball4HB.x + "px";
        fireball4.style.top = fireball4HB.y + "px";
    }
    if (fireball5HB !== "none") {
        fireball5HB.x -= 1.5;
        fireball5HB.y -= 1.5;
        fireball5.style.left = fireball5HB.x + "px";
        fireball5.style.top = fireball5HB.y + "px";
    }
    if (fireball6HB !== "none") {
        fireball6HB.x -= 1.5;
        fireball6HB.y += 1.5;
        fireball6.style.left = fireball6HB.x + "px";
        fireball6.style.top = fireball6HB.y + "px";
    }

    if (fireball1HB.y > 800 || fireball1HB.x < -50 || fireball1HB.x > 1700) {
        fireball1.style.display = "none";
    }
    if (fireball2HB.y > 800 || fireball2HB.x < -50 || fireball2HB.x > 1700) {
        fireball2.style.display = "none";
    }
    if (fireball3HB.y > 800 || fireball3HB.x < -50 || fireball3HB.x > 1700) {
        fireball3.style.display = "none";
    }
    if (fireball4HB.y > 800 || fireball4HB.x < -50 || fireball4HB.x > 1700) {
        fireball4.style.display = "none";
    }
    if (fireball5HB.y > 800 || fireball5HB.x < -50 || fireball5HB.x > 1700) {
        fireball5.style.display = "none";
    }
    if (fireball6HB.y > 800 || fireball6HB.x < -50 || fireball6HB.x > 1700) {
        fireball6.style.display = "none";
    }

    if (fireball12HB !== "none") {
        fireball12HB.x += 1;
        fireball12HB.y += 2;
        fireball12.style.left = fireball12HB.x + "px";
        fireball12.style.top = fireball12HB.y + "px";
    }
    if (fireball22HB !== "none") {
        fireball22HB.x += 2;
        fireball22HB.y += 0;
        fireball22.style.left = fireball22HB.x + "px";
        fireball22.style.top = fireball22HB.y + "px";
    }
    if (fireball32HB !== "none") {
        fireball32HB.x -= 2;
        fireball32HB.y += 0;
        fireball32.style.left = fireball32HB.x + "px";
        fireball32.style.top = fireball32HB.y + "px";
    }
    if (fireball42HB !== "none") {
        fireball42HB.x += 1;
        fireball42HB.y -= 2;
        fireball42.style.left = fireball42HB.x + "px";
        fireball42.style.top = fireball42HB.y + "px";
    }
    if (fireball52HB !== "none") {
        fireball52HB.x -= 1;
        fireball52HB.y -= 2;
        fireball52.style.left = fireball52HB.x + "px";
        fireball52.style.top = fireball52HB.y + "px";
    }
    if (fireball62HB !== "none") {
        fireball62HB.x -= 1;
        fireball62HB.y += 2;
        fireball62.style.left = fireball62HB.x + "px";
        fireball62.style.top = fireball62HB.y + "px";
    }

    if (fireball12HB.y > 800 || fireball12HB.x < -50 || fireball12HB.x > 1700) {
        fireball12.style.display = "none";
    }
    if (fireball22HB.y > 800 || fireball22HB.x < -50 || fireball22HB.x > 1700) {
        fireball22.style.display = "none";
    }
    if (fireball32HB.y > 800 || fireball32HB.x < -50 || fireball32HB.x > 1700) {
        fireball32.style.display = "none";
    }
    if (fireball42HB.y > 800 || fireball42HB.x < -50 || fireball42HB.x > 1700) {
        fireball42.style.display = "none";
    }
    if (fireball52HB.y > 800 || fireball52HB.x < -50 || fireball52HB.x > 1700) {
        fireball52.style.display = "none";
    }
    if (fireball62HB.y > 800 || fireball62HB.x < -50 || fireball62HB.x > 1700) {
        fireball62.style.display = "none";
    }

    if (homingFireballs.style.display !== "none") {
        let dx = x - homingFireballsHB.x;
        let dy = y - homingFireballsHB.y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        homingFireballsHB.x += (dx / dist) * 1.2;
        homingFireballsHB.y += (dy / dist) * 1.2;
        homingFireballs.style.left = homingFireballsHB.x + "px";
        homingFireballs.style.top = homingFireballsHB.y + "px";
        let angle = Math.atan2(dy, dx) * (180 / Math.PI);
        homingFireballs.style.transform = `rotate(${angle - 140}deg)`;
    }
    fireballHitBox();
    fireballHitBox2();
    homingFireballHitBoxes()
    hearts();
    closeToDragon();
    dragonKilled();
    portalAppear();
    closeToPortal();
    teleporting();
    gameOver();

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

const fireballsInterval1 = setInterval(() => {
    fireball1.style.display = "none";
    fireball2.style.display = "none";
    fireball3.style.display = "none";
    fireball4.style.display = "none";
    fireball5.style.display = "none";
    fireball6.style.display = "none";

    setTimeout(() => {
        createFireballs();
    }, 100);
}, 3000);

const fireballsInterval2 = setInterval(() => {
    fireball12.style.display = "none";
    fireball22.style.display = "none";
    fireball32.style.display = "none";
    fireball42.style.display = "none";
    fireball52.style.display = "none";
    fireball62.style.display = "none";

    setTimeout(() => {
        createFireballs2();
    }, 100);
}, 2000);

const homingFireballInterval = setInterval(() => {
   homingFireballs.style.display = "none";

   setTimeout(() => {
      createHomingFireball();
   }, 100);
}, 5000);

function invincibility() {
    invincible = true;
    setTimeout(() => {
       invincible = false;
    }, 300);
}

function borders() {
    if (10 >= x){
        keys["a"] = false;
    }
    if (10 >= y){
        keys["w"] = false;
    }
    if (x >= 1588){
        keys["d"] = false;
    }
    if (y >= 700){
        keys["s"] = false;
    }
}

function createFireballs2() {
    fireball12HB = { x: 450, y: 425 };
    fireball22HB = { x: 450, y: 425 };
    fireball32HB = { x: 450, y: 425 };
    fireball42HB = { x: 450, y: 425 };
    fireball52HB = { x: 450, y: 425 };
    fireball62HB = { x: 450, y: 425 };

    fireball12.style.display = "inline";
    fireball22.style.display = "inline";
    fireball32.style.display = "inline";
    fireball42.style.display = "inline";
    fireball52.style.display = "inline";
    fireball62.style.display = "inline";
}

function createFireballs() {
    fireball1HB = { x: 450, y: 425 };
    fireball2HB = { x: 450, y: 425 };
    fireball3HB = { x: 450, y: 425 };
    fireball4HB = { x: 450, y: 425 };
    fireball5HB = { x: 450, y: 425 };
    fireball6HB = { x: 450, y: 425 };

    fireball1.style.display = "inline";
    fireball2.style.display = "inline";
    fireball3.style.display = "inline";
    fireball4.style.display = "inline";
    fireball5.style.display = "inline";
    fireball6.style.display = "inline";
}

function createHomingFireball() {
    homingFireballsHB = { x: 450, y: 425 }

    homingFireballs.style.display = "inline";
}

function fireballHitBox() {
    if (invincible) return;
    let heroX = x + 50;
    let heroY = y + 50;

    if (Math.abs(fireball1HB.x - heroX) <= 30 && Math.abs(fireball1HB.y - heroY) <= 30 && fireball1.style.display !== "none") {
        hp -= 10;
        console.log("hit");
        invincibility();
    }
    if (Math.abs(fireball2HB.x - heroX) <= 30 && Math.abs(fireball2HB.y - heroY) <= 30 && fireball2.style.display !== "none") {
        hp -= 10;
        console.log("hit");
        invincibility();
    }
    if (Math.abs(fireball3HB.x - heroX) <= 30 && Math.abs(fireball3HB.y - heroY) <= 30 && fireball3.style.display !== "none") {
        hp -= 10;
        console.log("hit");
        invincibility();
    }
    if (Math.abs(fireball4HB.x - heroX) <= 30 && Math.abs(fireball4HB.y - heroY) <= 30 && fireball4.style.display !== "none") {
        hp -= 10;
        console.log("hit")
        invincibility();
    }
    if (Math.abs(fireball5HB.x - heroX) <= 30 && Math.abs(fireball5HB.y - heroY) <= 30 && fireball5.style.display !== "none") {
        hp -= 10;
        console.log("hit");
        invincibility();
    }
    if (Math.abs(fireball6HB.x - heroX) <= 30 && Math.abs(fireball6HB.y - heroY) <= 30 && fireball6.style.display !== "none") {
        hp -= 10;
        console.log("hit");
        invincibility();
    }
}

function fireballHitBox2() {
    if (invincible) return;
    let heroX = x + 50;
    let heroY = y + 50;

    if (Math.abs(fireball12HB.x - heroX) <= 30 && Math.abs(fireball12HB.y - heroY) <= 30 && fireball12.style.display !== "none") {
        hp -= 10;
        console.log("hit");
        invincibility();
    }
    if (Math.abs(fireball22HB.x - heroX) <= 30 && Math.abs(fireball22HB.y - heroY) <= 30 && fireball22.style.display !== "none") {
        hp -= 10;
        console.log("hit");
        invincibility();
    }
    if (Math.abs(fireball32HB.x - heroX) <= 30 && Math.abs(fireball32HB.y - heroY) <= 30 && fireball32.style.display !== "none") {
        hp -= 10;
        console.log("hit");
        invincibility();
    }
    if (Math.abs(fireball42HB.x - heroX) <= 30 && Math.abs(fireball42HB.y - heroY) <= 30 && fireball42.style.display !== "none") {
        hp -= 10;
        console.log("hit");
        invincibility();
    }
    if (Math.abs(fireball52HB.x - heroX) <= 30 && Math.abs(fireball52HB.y - heroY) <= 30 && fireball52.style.display !== "none") {
        hp -= 10;
        console.log("hit");
        invincibility();
    }
    if (Math.abs(fireball62HB.x - heroX) <= 30 && Math.abs(fireball62HB.y - heroY) <= 30 && fireball62.style.display !== "none") {
        hp -= 10;
        console.log("hit");
        invincibility();
    }
}

function homingFireballHitBoxes() {
    if (invincible) return;
    let heroX = x + 50;
    let heroY = y + 50;

    if (Math.abs(homingFireballsHB.x - heroX) <= 51 && Math.abs(homingFireballsHB.y - heroY) <= 51 && homingFireballs.style.display !== "none") {
        hp -= 10;
        console.log("hit");
        homingFireballs.style.display = "none";
        invincibility();
    }
}

function hearts() {
    if (hp <= 20){
        heart3.style.display = "none";
    }
    if (hp <= 10){
        heart2.style.display = "none";
    }
    if (hp <= 0){
        heart1.style.display = "none";
    }
}

function closeToDragon() {
    let heroX = x + 50;
    let heroY = y + 50;
    if (Math.abs(dragon.x - heroX) <= 350 && Math.abs(dragon.y - heroY) <= 350) {
        close = true;
        canHitText.style.display = "inline";
    }
    else {
        close = false;
        canHitText.style.display = "none";
    }
}

function dragonHit() {
    if (close && keys["f"] && !attackCooldown){
        setTimeout(() => {
            attackCooldown = true;
            dragonHP -= woodenSwordDamage;
            dragonImg.style.display = "none";
            dragonHitImg.style.display = "inline";
            setTimeout(() => {
                dragonImg.style.display = "inline";
                dragonHitImg.style.display = "none";
                attackCooldown = false;
            }, 100);
        }, 100);
    }
}

function dragonKilled() {
    if (dragonHP <= 0) {
        clearInterval(fireballsInterval1);
        clearInterval(fireballsInterval2);
        clearInterval(homingFireballInterval);
        document.getElementById("dragon").style.display = "none";
        document.getElementById("dragonHit").style.display = "none";
        document.getElementById("canHit").style.display = "none";
        document.getElementById("homingFireball").style.display = "none";

        fireball1HB = { x: 0, y: 10000 };
        fireball2HB = { x: 0, y: 10000 };
        fireball3HB = { x: 0, y: 10000 };
        fireball4HB = { x: 0, y: 10000 };
        fireball5HB = { x: 0, y: 10000 };
        fireball6HB = { x: 0, y: 10000 };
        fireball12HB = { x: 0, y: 10000 };
        fireball22HB = { x: 0, y: 10000 };
        fireball32HB = { x: 0, y: 10000 };
        fireball42HB = { x: 0, y: 10000 };
        fireball52HB = { x: 0, y: 10000 };
        fireball62HB = { x: 0, y: 10000 };

        setTimeout(() => {
            portalActive = true;
        }, 1000);
    }
}

function portalAppear() {
    if (portalActive){
        portal.style.display = "inline";
    }
}

function closeToPortal() {
    let heroX = x + 50;
    let heroY = y + 50;
    if (portalActive && Math.abs(portalPosition.x - heroX) <= 200 && Math.abs(portalPosition.y - heroY) <= 200) {
        portalText.style.display = "inline";
    }
    else {
        portalText.style.display = "none";
    }
}

function teleporting() {
    if (portalActive && keys["e"] && closeToPortal) {
        window.location.href = "room3.html";
    }
}

function gameOver() {
    if (hp <= 0) {
        running = false;
        clearInterval(fireballsInterval1);
        clearInterval(fireballsInterval2);
        clearInterval(homingFireballInterval);
        gameOverText.style.display = "inline";
    }
}
function index() {
    if (x >= 1000 && x <= 1100 && y <= 30) {
        window.location.href = "index.html";
    }
}