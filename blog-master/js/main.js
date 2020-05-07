    // Get the current year for the copyright
    $('#year').text(new Date().getFullYear());
    $('.burger').on('click', function() {
      $('.menu').fadeToggle();
    })



//magic line

 let menus=document.querySelectorAll(".menu li a")
let line=document.getElementsByClassName('magic-line')[0]

menus.forEach(menu=>{
    menu.addEventListener('mouseover',function(e){
        styleLine(e.target)
    })
})

window.onload=function(){
    let active=document.querySelector("li.active")
    styleLine(active)
}
  
  function styleLine(element){
    line.style.width=`${element.offsetWidth}px`
    line.style.left=`${element.offsetLeft}px`
  }

//hover resize menu element
   
 let menu = document.querySelectorAll(".menu ul li a");
   menu.forEach(element=>{
    element.addEventListener('mouseover',function(){
        this.classList.add("activeclass")
        console.log(this.classList)
         
    })
    
    element.addEventListener("mouseout",function(){
        this.classList.remove("activeclass")
    })
})

//carousel

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop:true,
    margin:10,
    dots: true,
    autoplay: true,
    responsive : {
    // breakpoint from 0 up
    0 : {
        items: 1
    },
    // breakpoint from 480 up
    480 : {
        items: 1
    },
    // breakpoint from 768 up
    768 : {
        items: 1
    },
    992 : {
        items: 3
    } 
}}
    );
});

// limit text

function truncateText(selector, maxLength) {
    var element = document.querySelector(selector),
        truncated = element.innerText;

    if (truncated.length > maxLength) {
        truncated = truncated.substr(0,maxLength) + '...';
    }
    return truncated;
}

document.querySelector(".feature_inside a").innerText = truncateText(".feature_inside a", 50);



$('.search-button').click(function(){
  $(this).parent().toggleClass('open');
});





// instagramfeed js //
