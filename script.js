AOS.init();

const imgs = document.getElementById("imgc");
const img = document.querySelectorAll("#imgc img");

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 400}px)`;
}

setInterval(carrossel, 3500);