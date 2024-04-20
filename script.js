function loading(){
    var tl=gsap.timeline();

    tl.to("#yellow1",{
        top:"-100%",
        delay:0.5,
        duration:0.7,
        ease:"expo.out"
    
    })
    tl.from("#yellow2",{
        top:"100%",
        delay:0.6,
        duration:0.7,
        ease:"expo.out"
    
    },'anim')
    tl.to("#loader h1",{
        delay:0.6,
        duration:0.7,
        color:"black"
    },"anim")

    tl.to("#loader",{
        display:"none"
    })
    tl.to("#loader",{
        opacity:0
    })

}
loading()

function loco(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
    // scroll.on("click",function(){
    //     console.log
    
    // })
    
    document.querySelector("#footer h2").addEventListener("click",()=>{
        scroll.scrollTo(0);
    })
    
    
    
    let elems=document.querySelectorAll(".elem")
    let page2=document.querySelector("#page2")
    elems.forEach(function(ele){
        ele.addEventListener("mouseenter",function(){
            let bgimg=ele.getAttribute("data-img");
            console.log(bgimg)
            page2.style.backgroundImage=`url(${bgimg})`
        })
    
    })
}
loco();