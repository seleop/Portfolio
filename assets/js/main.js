gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
    duration : "1.5",
});

lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);


const openingText = document.querySelector("#opening_sentence");
const openingAnimateTl = () => {
    let openingtl = gsap.timeline({
      scrollTrigger:{
        trigger:".blank",
        start:"top top",
        end:"+=7000",
        scrub:true,
        pin:true,
      },
      onComplete : () => {
        document.querySelector(".opening1").style.display = "none";
        document.querySelector(".opening2").style.display = "block";
        console.log("animation ended");
      }
    });
    openingtl
    .to("#opening_sentence", {strokeDashoffset:0, duration:3 , ease:"power1.in"})
    .to("#opening_sentence", {fillOpacity:1, ease:"expo.out", duration:2})
    .to(".ball", {y:700, scale:"0.3", ease:"expo.out", duration:3,})
    .to(".ball", {y:102, scale:"0.02", ease: "bounce.out", duration:3})
    .to(".ball", {scale:"0", ease:"power4.out", duration:1})
    .to("#opening_sentence", {y:"200px", ease:"expo.out", duration:1 })
}


const toggleOpeningText = () => {
  document.addEventListener("scroll", () => {
    if(window.scrollY >= 5200){
      openingText.style.display = "none";
      console.log('5200넘음')
    }
    else {
      openingText.style.display = "block";
      console.log('5200 전임')
    }
  })
}
const modifyOpeningTextColor = () => {
  document.addEventListener("scroll", ()=> {
      let startColor = 'rgb(51, 51, 51)';
      let endColor = 'rgb(252, 252, 252)';
      let currentRGBnum = 2.01 * window.scrollY - 7587;
      console.log(window.scrollY);
    if(window.scrollY >=3400 && window.scrollY <=3500){
      openingText.style.fill = `rgb(${currentRGBnum}, ${currentRGBnum}, ${currentRGBnum})`
      openingText.style.stroke = `rgb(${currentRGBnum}, ${currentRGBnum}, ${currentRGBnum})`
    }
    else if (window.scrollY >3500) {
      openingText.style.fill = endColor;
      openingText.style.stroke = endColor;
    }
    else {
      openingText.style.fill = startColor; 
      openingText.style.stroke = startColor; 
    }
  })
}


modifyOpeningTextColor();
openingAnimateTl();
// toggleOpeningText();