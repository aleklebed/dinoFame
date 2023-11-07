const dinosaur = document.getElementById("dinosaur");
const obstacle = document.getElementById("obstacle");

function jump() {
    if (dinosaur.classList != "jump-animation") {
        dinosaur.classList.add("jump-animation");
        setTimeout(function () {
            dinosaur.classList.remove("jump-animation");
        }, 500);
    }
}

let checkDead = setInterval(function() {
    let dinosaurTop = parseInt(window.getComputedStyle(dinosaur).getPropertyValue("top"));
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    
    if(obstacleLeft < 50 && obstacleLeft > 0 && dinosaurTop >= 130) {
        alert("Game over!");
    }
}, 10);

document.addEventListener("keydown", function (event) {
    if (event.key === " ") {
        jump();
    }
});

obstacle.addEventListener("animationiteration", () => {
    var random = Math.random() * (1500 - 500) + 500;
    obstacle.style.animationDelay = random + 'ms';
});
