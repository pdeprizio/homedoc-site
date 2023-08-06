import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js"  

const scrollTracker = document.querySelector(".scroll-tracker");

const scrollTrackingTimeline = new ScrollTimeline({
    source: document.scrollingElement,
    orientation: "block",
    scrollOffsets: [CSS.percent(0), CSS.percent(100)],
})
 
scrollTracker.animate(
    {
      transform: ['scaleX(0)', 'scale(1)']  
    },
    {
        duration: 1,
        timeline: scrollTrackingTimeline,
    }
)
 
  



const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('show');
});


