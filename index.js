// Your code here
const dodger = document.getElementById('dodger');
dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "0px";

document.addEventListener("keydown",(e) => {
    if(e.key === "ArrowLeft"){
        const leftNumbers = dodger.style.left.replace("px", "");
        moveDodgerLeft();
    }else if(e.key === 'ArrowRight'){
        moveDodgerRight();
    }
    }
)
function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace("px","");
    const left = parseInt(leftNumbers, 10);

    if (left > 0){
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight(){
    const rightNumbers = dodger.style.left.replace("px","");
    const left = parseInt(rightNumbers, 10);

    if (left > 0){
        dodger.style.left = `${left + 1}px`;
    }
}