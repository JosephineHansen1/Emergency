// console.log("loaded instructions...");

// document.querySelector("#by1").addEventListener("mouseover", byf);

// function byf() {
//   console.log("byf bla bla bla");
//   document.querySelector("#by1").classList.add("my_scale");
//   document.querySelector("#by1").style.fill = "pink";
// }
// document.querySelector(".info-text h2").textContent = "hhhhh";

// document.addEventListener("DOMContentLoaded", () => {
//   const dots = document.querySelectorAll(".cls-2");

//   dots.forEach((dot) => {
//     dot.addEventListener("click", () => {
//       console.log("En prik blev klikket!");
//       dot.classList.toggle("active"); // gør prikken aktiv
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  // Find alle prikker med klassen .cls-2
  const dots = document.querySelectorAll(".cls-2");

  // Tilføj klikfunktion til hver prik
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      console.log(
        "En prik blev klikket! cx:",
        dot.getAttribute("cx"),
        "cy:",
        dot.getAttribute("cy")
      );

      // Skift farve på prikken midlertidigt for visuel feedback
      dot.style.fill = "#00ff66"; // grøn
      setTimeout(() => {
        dot.style.fill = "#ff2900"; // tilbage til rød
      }, 300);

      // Alternativt kan du toggler en klasse
      dot.classList.toggle("active");
    });
  });
});
