/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

let circle = document.querySelector(".circle");
let title = document.querySelector(".title");
let triangle = document.querySelector(".triangle");
let tagline = document.querySelector(".tagline");
circle.addEventListener("click", onclick);
function onclick() {
  let t1 = gsap.timeline();

  gsap.to(circle, {
    scaleX: 14,
    scaleY: 14,
    duration: 1,
    ease: Power2.easeIn
  });

  t1.from(title, {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: Power2.easeIn
  });

  t1.from(triangle, {
    opacity: 0,
    y: 40,
    rotation: 270,
    duration: 1,
    ease: Power2.easeIn
  });
  t1.from(tagline, {
    duration: 1,
    opacity: 0,
    delay: .5
  });
}
