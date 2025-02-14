//gsap modules
gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin);

//gsap  animation------------------------------------
gsap.to("#introTitle",{
    rotation : 360,
    duration : 2,
});

//gsap media match
/*
let mm = gsap.matchMedia();
mm.add({
    isMobile: '(max-width: 799px)',
    isDesktop: '(min-width: 800px)',
})
   */

Draggable.create("#introTitle")

//gsap animation window rotation

gsap.to("#window1", {
    scrollTrigger:{
        target: "#section1", 
        markers: true, 
        id: "section1",
        start:"top 0%",
        end: "top 100%",
        toggleActions: "play none reverse none",
        scrub: 1


    },
    rotation: 360,
    duration: 2, 
})


//gsap animation window 2 apparition

gsap.from("window2", {
    scrollTrigger:{
        trigger:"#section2",
        markers: true,
        start: "top 80%",
        end: "bottom 50%", 
        toggleActions: "play reverse none reset",
        scrub: 1
    },
    x: "-100vw",
duration: 1,


})


//gsap animation - window 3 motion path

gsap.to("#window3", {
    duration: 5,
    motionPath: {
        path: "M203.529 11C189.862 16.3333 164.529 34.4 172.529 64C180.529 93.6 211.862 97.6667 226.529 96C259 96 294.329 133.4 245.529 179C196.729 224.6 207.862 287.333 219.529 313C233.196 334 245.329 381 184.529 401",
    },
    onComplete:()=> {
        document.getElementById('titleSec3').style.color="red"
    }
})

//GSAp animation - window 4 timeline
let timelineWindow = gsap.timeline();
timelineWindow.to('#window4', {x: 100,})
    .to('#window4', {y: 100,})
    .to('#window4', { x: -100,})
    .to('#window4', {y: -100,});
    

//draggable 
Draggable.create(".name",{
    type:"x,y",
    bounds: "#section3",

    onDrag: function(){
        //document.querySelector('.harry').style.width = "250px";
    },
   

    onDragend: function(){
        //document.querySelector('.harry').style.width = "200px";
    },

})

   

 

