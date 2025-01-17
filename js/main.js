//gsap modules
gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin);

//gsap demo animation
gsap.to("#demo",{
    rotation : 360,
    duration : 2,

}
)

Draggable.createl("#demo")