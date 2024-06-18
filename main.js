let smaLImg = document.querySelectorAll(".smaLImg img");
let BigImg = document.querySelector(".BigImg img");

smaLImg.forEach((image) =>{
    image.addEventListener("click", () =>{
        BigImg.setAttribute("src", image.getAttribute("src")); 
        BigImg.parentElement.children[1].innerHTML = image.parentElement.children[1].innerHTML;
        playOn(image.getAttribute("dataAuidio"));
    });
});

let playOn = (audio) => new Audio("audio/"+audio+".mp3").play();