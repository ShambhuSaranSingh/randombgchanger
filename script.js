const body = document.querySelector("body");
const btn = document.getElementById("btn");

function random(number){
    return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
    const randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = randomColor;
})

