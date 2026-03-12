const petalCount = 25;

for(let i=0;i<petalCount;i++){

let petal = document.createElement("div");

petal.classList.add("petal");

document.body.appendChild(petal);

let size = Math.random()*12+8;

petal.style.width = size+"px";

petal.style.height = size+"px";

petal.style.left = Math.random()*window.innerWidth+"px";

petal.style.animationDuration = (Math.random()*5+5)+"s";

petal.style.animationDelay = Math.random()*5+"s";

}