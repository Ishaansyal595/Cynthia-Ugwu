// ye humne smooth scrolling ke liye use kiya hai taaki jab bhi hum scroll kare toh voh smoothly ho

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

// ye function animation lgane ke liye use kiya hai hero section ke

function firstPageAnime() {
  const tl = gsap.timeline();

  tl.from("#nav", {
    y: -10,
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
    .to(".bounding-elem", {
      y: 0,
      duration: 1.5,
      delay: -0.5,
      ease: Expo.easeInOut,
      stagger: 0.2,
    })
    .to("#smallHeadings h6", {
      y: 0,
      duration: 0.7,
      delay: -0.5,
      ease: Expo.easeInOut,
      stagger: 0.2,
    })
    .from("#hero-footer", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay: -0.5,
      ease: Expo.easeInOut,
    });
}

//  ye function humne mouse ke liye bnaya hai taaki hume pta chalta rahe mouse kaha jaa rha hai ismei humesha ek circle mouse ko follow krta rehta hai jaha jaha mouse jaayega vaha vaha circle jayega

function mouseFollower() {
  window.addEventListener("mousemove", function (dets) {
    this.document.querySelector(
      "#hover-circle"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
  });
}
mouseFollower();
firstPageAnime();

// section-1 le teeno elem ko select karo, uske baad teeno par ek mousemove lgao, jab mouse move ho toh uske baad ye pta karo ki mouse kaha par hai, jiska matlab hai ki and y position pta kro, ab mouse ki x y position ke badle uss image ko show kro aur usko move kro, move krte waqt rotate kro, and jaise jaise mouse tez chale vaise vaise rotation meri tez ho jaye

document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrotate = 0;

  elem.addEventListener("mousemove", function (dets) {
    const diff = dets.clientY - elem.getBoundingClientRect().top;

    diffrotate = dets.clientX - rotate;
    rotate = dets.clientX;

    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrotate),
    });
  });
  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
    });
  });
});
