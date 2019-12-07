// Your code goes here
let headLogo = document.querySelector('.logo-heading');
headLogo.addEventListener('mouseover', (event) => {
    event.target.style.color = 'gold';
});

headLogo.addEventListener('mouseout', (event) => {
    event.target.style.color = 'black';
})

let clickA = document.querySelectorAll('.main-navigation .nav-link');
clickA.forEach(item => {
    item.addEventListener('click', (event) => {
        event.target.style.color = 'blue';
    })
})

let clickB = document.querySelectorAll('.main-navigation .nav-link');
clickB.forEach(item => {
    item.addEventListener('dblclick', (event) => {
        event.target.style.color = 'black';
    })
})

let anime = document.querySelector('[src="img/fun.jpg"]')
anime.addEventListener('mouseenter', (event) => {
    event.target.style.transform = ("rotate(90deg) translateX(100px)")
})

let anime2 = document.querySelector('[src="img/fun.jpg"]')
anime.addEventListener('mouseleave', (event) => {
    event.target.style.transform = ("rotate(0deg) translateX(0px)")
})

