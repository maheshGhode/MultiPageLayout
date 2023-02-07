let cl = console.log;

$('.carousel').carousel({
    interval: 2000,
    pause: false,
    wrap : true,
})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false, // removes the dots from the owl carasole
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    },
    navText : ['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>'] //chenge the arrows fromt the page
})