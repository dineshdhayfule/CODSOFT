const text=document.querySelector(".role");
const textLoad=()=>{
    setTimeout(() => {
        text.textContent = " Programer";
    }, 0);
    setTimeout(() => {
        text.textContent = " Frontend Developer";
    }, 4000);
    setTimeout(() => {
        text.textContent=" Web Developer";
    }, 8000);
}

textLoad();
setInterval(textLoad,12000);


function over(n) {
    if (n==1) {
        const img = document.getElementById("weather");
        img.src = "images/w.gif"
    }
    else if (n==2) {
          const img1 = document.getElementById("convert");
          img1.src = "images/convert.gif"
    }

}

function out(n) {
 if (n == 1) {
     const img = document.getElementById("weather");
     img.src = "images/w.jpg"
 } else if (n == 2) {
     const img1 = document.getElementById("convert");
     img1.src = "images/convert.jpg"
 }
}
  function addClass() {
      let v = document.getElementById("about");
      v.className += " animate__animated ";
      v.className += " animate__flash ";
  }

