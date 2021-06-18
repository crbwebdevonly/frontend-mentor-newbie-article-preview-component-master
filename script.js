const arrow = document.querySelector(".footer-arrow");
const footer1 = document.getElementById("footer1");
const footer2 = document.getElementById("footer2");
const footer3 = document.getElementById("footer3");
// // const arrow = document.getElementById("arrow")
// console.log(arrow, footer1, footer2, footer3);

window.addEventListener("resize", () => {
     if (window.innerWidth > 600) {
          footer2.className = "footer2";
          footer1.className = "footer1 show";
     }

     if (window.innerWidth < 600) {
          footer3.className = "footer3";
     }
});

arrow.addEventListener("click", () => {
     let desktopMode = false;

     if (window.innerWidth > 600) desktopMode = true;
     else desktopMode = false;

     if (!desktopMode) {
          console.log("mobilemode");
          footer1.classList.toggle("show");
          footer2.classList.toggle("show");
          footer3.className = "footer3";
     } else if (desktopMode) {
          footer3.classList.toggle("show");
     }
});
