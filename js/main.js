//GSAP modules
gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin);

//GSAP  animation title------------------------------------
gsap.to("#introTitle",{
    rotation : 360,
    duration : 3,
});


//GSAP Draggable title-----------------------------------

Draggable.create("#introTitle")

//GSAP animation 2 apparition-----------------------------------------------

gsap.from("onedirection", {
    scrollTrigger:{
        trigger:"#section2",
        //markers: true,
        start: "top 80%",
        end: "bottom 50%", 
        toggleActions: "play reverse none reset",
        scrub: 1
    },
    x: "-100vw",
duration: 1,


}) 


//GSAP animation - window 4 to 5  ---------------------------------------------
let timeline4To5 = gsap.timeline({ //on créer une timeline et scroll pour introduire un succession de point afin de former une sorte de motion path à l'aide des données de x et y.
    scrollTrigger:{
        trigger: "#sec4To5", 
       //markers: true, 
        id: "section4",
        
        start:"top 60%",
        end: "bottom 40%",
        toggleActions: "play none reverse none",
        scrub: 1
    
    },
});

timeline4To5.to('.micro', {x: '25vw',y:'-50px', }) // on determine les positions du micro
    .to('.micro', {x: '50vw',y:'50px', })
    .to('.micro', {x: '75vw',y:'-50px', })
    .to('.micro', {x: '100vw',y:'50px', });

//Draggable  section 3-------------------------------------------------
Draggable.create(".name",{  //on rend draggable les oms des chanteurs pour les mettre dans les deposit zone
    type:"x,y",
    bounds: "#section3",

    onDrag: function(){
        //document.querySelector('.harry').style.width = "250px";
    },
    
})

// Draggable section 5 ---------------------------------------------
// Mauvais
Draggable.create(".cover", {       
    type: "x,y",
    bounds: "#section5",
    onDragEnd: function() {

        console.log(document.getElementById("depositSec5")); 
        let depositZone5 = document.getElementById("depositSec5");

        if (this.hitTest(depositZone5, "80%")) {  // Augmenter la tolérance à 80%
            depositZone5.style.backgroundColor = "#eb3e3b"; //on attribue à la deposite zone la couleur rouge si l'element placé est le mauvais
            console.log("Bad");
        } else {
            console.log("Retour à la position initiale");
            gsap.to(this.target, { duration: 0.5, x: 0, y: 0, ease: "power2.out" }); //on ajoute une petite animation pour fluidifer la position
        }
    },
});

// Draggable section 5 ---------------------------------------------
// GOOD
Draggable.create(".goodCover", {
    type: "x,y",
    bounds: "#section5",
    onDragEnd: function() {
        console.log(document.getElementById("depositSec5"));  
        let depositZone5 = document.getElementById("depositSec5");

        if (this.hitTest(depositZone5, "80%")) {  // Augmenter la tolérance à 80%
            depositZone5.style.backgroundColor = "#ccf5bd";
            console.log("Good"); //on attribue à la deposite zone la couleur verte si l'element placé est le bon
        } else {
            console.log("Retour à la position initiale");
            gsap.to(this.target, { duration: 0.5, x: 0, y: 0, ease: "power2.out" });  //on ajoute une petite animation pour fluidifer la position
        }
    },
});

   

 

