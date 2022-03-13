function isTouching(a, b) {
    const aRect = a.getBoundingClientRect();
    const bRect = b.getBoundingClientRect();

    return !(
        aRect.top + aRect.height < bRect.top ||
        aRect.top > bRect.top + bRect.height ||
        aRect.left + aRect.width < bRect.left ||
        aRect.left > bRect.left + bRect.width
    );
}

const player = document.querySelector("#player")
const coin = document.querySelector("#coin")

const left = document.getElementById("left")
const right = document.getElementById("right")
const up = document.getElementById("up")
const down = document.getElementById("down")

window.addEventListener("keyup", function(e) {
    if (e.key === "ArrowDown" || e.key === "Down") {
        const currTop = extractPos(player.style.top);
        player.style.top = `${currTop +50}px`;
    }

    else if (e.key === "ArrowUp" || e.key === "Up") {
        const currTop = extractPos(player.style.top);
        player.style.top = `${currTop -50}px`;
    }

    else if (e.key === "ArrowRight" || e.key === "Right") {
        const currLeft = extractPos(player.style.left);
        player.style.left = `${currLeft +50}px`;
        player.style.transform = "scale(1,1)"
    }

    else if (e.key === "ArrowLeft" || e.key === "Left") {
        const currLeft = extractPos(player.style.left);
        player.style.left = `${currLeft -50}px`;
        player.style.transform = "scale(-1,1)"
    }

    if (isTouching(player, coin)) moveCoin()
});


down.addEventListener("click", function(e){
    {const currTop = extractPos(player.style.top);
    player.style.top = `${currTop +50}px`;
    if (isTouching(player, coin)) moveCoin()
    }
})

up.addEventListener("click", function(e){
    {const currTop = extractPos(player.style.top);
    player.style.top = `${currTop -50}px`;
    if (isTouching(player, coin)) moveCoin()
    }
})

right.addEventListener("click", function(e){
    {const currTop = extractPos(player.style.left);
    player.style.left = `${currTop +50}px`;
    if (isTouching(player, coin)) moveCoin()
    }
})

left.addEventListener("click", function(e){
    {const currTop = extractPos(player.style.top);
    player.style.left = `${currTop -50}px`;
    if (isTouching(player, coin)) moveCoin()
    }
})


const extractPos = (pos) => {
    if (!pos) return 100;
    return parseInt(pos.slice(0, -1));
};

const moveCoin = () => {
    const x = Math.floor(Math.random() * 600);
    const y = Math.floor(Math.random() * 300);

    //const x = Math.floor(Math.random() * window.innerWidth);
   // const y = Math.floor(Math.random() * window.innerHeight);
    coin.style.top = `${y}px`;
    coin.style.left = `${x}px`;
};

moveCoin()

   




