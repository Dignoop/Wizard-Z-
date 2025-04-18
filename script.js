
function page1animation(){
  var tl=gsap.timeline()

tl.from("nav h1,nav h4, nav button",{
  y:"-40px",
  opacity:0,
  duration:0.5,
  stagger:0.1
})

tl.from("section h2",{
  x:"-80px",
  opacity:0,
  duration:0.5,
})
tl.from("section p",{
  x:"-40px",
  opacity:0,
  duration:0.2,
})
tl.from("section button",{
  opacity:0,
  duration:0.2,
})
tl.from("section img",{
  x:"40px",
  opacity:0
},"-=0.5")

tl.from(".bottomimgs span , .bottomimgs img",{
  y:"40px",
  opacity:0,
  duration:0.2,
  stagger:0.2
},"-=0.5")
}
page1animation()


function page2animation(){
  let tl2=gsap.timeline({
    scrollTrigger:{
      trigger:"section1",
      scroller:"body",
      
      start:"top 80%",
      end:"top -10%",
      scrub:2
    }
  })
  
  
  tl2.from("section1 h2,p",{
    x:"-30px",
    opacity:0,
    duration:0.5,
    stagger:0.1
  })
  
  tl2.from(".cards1 ",{
    y:"30px",
    opacity:0,
    
  })
  tl2.from(".cards2 ",{
    y:"30px",
    opacity:0,
    
  })
}
page2animation()

var menu=document.querySelector("#ham")
var reverse=document.querySelector("#close")
var tl3=gsap.timeline({paused:true})

tl3.to("aside",{
  right:"0",
  duration:0.7,
  
})

tl3.from("aside h4, button",{
  x:"-30px",
  duration:0.3,
  stagger:0.2,
  opacity:0
})

menu.addEventListener("click",function(){
  tl3.play() 
})

reverse.addEventListener("click",function(){
  tl3.reverse() 
})

