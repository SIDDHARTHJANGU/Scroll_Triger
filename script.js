gsap.from("#box1", {
  scrollTrigger: {
    trigger: "#box1",
    scroller: "body",
    markers: true,
    start: "top 26.4%",
    end: "bottom 50%",
    scrub: 2,
  },
  scale: 1.5,
  duration: 2,
  delay: 1,
});
gsap.to("#box2", {
  scrollTrigger: {
    trigger: "#box2",
    scroller: "body",
    markers: true,
    start: "top 80%",
    end: "bottom 50%",
    scrub: 2,
  },
  rotation: 360,
  x: 360,
  duration: 2,
});
gsap.to("#box3", {
  scrollTrigger: {
    trigger: "#box3",
    scroller: "body",
    markers: true,
    start: "top 80%",
    end: "bottom 50%",
    scrub: 2,
    // pin:true,
    // picSpacing:true,
  },
  rotation: -360,
  x: -360,
  duration: 2,
});
gsap.to("#box4", {
  scrollTrigger: {
    trigger: "#box4",
    scroller: "body",
    markers: true,
    start: "top 80%",
    end: "bottom 50%",
    scrub: 2,
    // pin:true,
    // picSpacing:true,
  },
  x: 360,
  duration: 2,
});
gsap.to("#box5", {
  scrollTrigger: {
    trigger: "#box5",
    scroller: "body",
    markers: true,
    start: "top 80%",
    end: "bottom 50%",
    scrub: 2,
    // pin:true,
    // picSpacing:true,
  },
  x: -360,
  duration: 2,
});
gsap.to("#box6", {
  scrollTrigger: {
    trigger: "#box6",
    scroller: "body",
    markers: true,
    start: "top 80%",
    end: "bottom 50%",
    scrub: 2,
    // pin:true,
    // picSpacing:true,
  },
  y: -200,
  duration: 2,
});
