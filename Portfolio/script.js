const text=document.querySelector(".role");
const textLoad=()=>{
    setTimeout(() => {
        text.textContent = "Programer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Frontend Developer";
    }, 4000);
    setTimeout(() => {
        text.textContent="Web Developer";
    }, 8000);
}

textLoad();
setInterval(textLoad,12000);


function over() {
    document.getElementById("bt").textContent = "About me ⬇";
}

function out() {
    document.getElementById("bt").textContent = "About me ➡";
}
