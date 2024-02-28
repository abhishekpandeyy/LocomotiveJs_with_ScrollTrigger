//red ,orange , purpe-green and uske neeche ke teen lines delete kr do.

function loco_gsap(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".smooth-scroll").style.transform? "transform"
    : "fixed"*/
});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

loco_gsap();
gsap.from('.box',{
    scrollTrigger:{
        trigger:'.page2',
        // trigger:'.box',
       scroller:'.main',
       markers:true,
       scrub:1,
    //    start:'top 60%',
    //    end:'top 40%',
    start:'top 0%',
    end:'top -40%',
       pin:true,
    },
    borderRadius:0,
    scale:0,
    rotate:360+"deg",
    duration:2,
    
})