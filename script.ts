let elem : any = document.querySelectorAll(".elem")

elem.forEach(function(val:any){
    val.addEventListener("mouseenter",function(){
        val.childNodes[3].style.opacity = 1
    })
    val.addEventListener("mouseleave",function(){
        val.childNodes[3].style.opacity = 0
    })
    val.addEventListener("mousemove",function(dets:any){
        val.childNodes[3].style.left = dets.x+"px"
    })
})