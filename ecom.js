let header = document.getElementsByClassName("navbar");
window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 100) {
        header[0].classList.add("sticky");

    } else {
        header[0].classList.remove("sticky");

    }

});
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");
menu.onclick = () =>{

     menu.classList.toggle('bx-x');
     navlist.classList.toggle('open');  
     navlist.style.left =  navlist.style.left=="0%" ? "-100%" : "0%";
    navlist.style.transition = "1s ease";



// for shopping
function msg() {
    alert("Item added to cart!"); // Replace with your desired functionality
  }

                
}
 

window.addEventListener('resize', function(){
    if(window.innerWidth > 768){
        menu.classList.remove('bx-x');
        navlist.classList.remove('open');
        navlist.style.left = "-100%";
    }
});

let linkItems = document.querySelectorAll('.navlist a');

linkItems.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('bx-x');
        navlist.classList.remove('open');
        navlist.style.left = "-100%";
    });
});
 

const sr=ScrollReveal ({
    distance: '30px',
    duration: 2600,
    reset: true
})

sr.reveal('.home-text',{    delay: 200,  origin:'bottom'})

sr.reveal('.featured',{    delay: 200,  origin:'bottom'})
sr.reveal('.row',{    delay: 200,  origin:'bottom'})

sr.reveal('.cta-text',{    delay: 200,  origin:'bottom'})

sr.reveal('.brand',{    delay: 200,  origin:'bottom'})
sr.reveal('#pro',{    delay: 200,  origin:'bottom'})