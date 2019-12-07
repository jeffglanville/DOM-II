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

clickA.forEach(item => {
    item.addEventListener('mouseout', (event) => {
        event.target.style.color = 'black';
    })
})


let anime = document.querySelector('[src="img/fun.jpg"]')
anime.addEventListener('mouseenter', (event) => {
    event.target.style.transform = ("rotate(-45deg) translateX(-100px)")
})

let anime2 = document.querySelector('[src="img/fun.jpg"]');
anime.addEventListener('mouseleave', (event) => {
    event.target.style.transform = ("rotate(0deg) translateX(0px)")
})

let h2Headings = document.querySelectorAll('h2');
h2Headings.forEach(item => {
    item.addEventListener('copy', (event) => {
        alert('copied!')
    })
})


let allBody = document.querySelector('body');
allBody.addEventListener('wheel', (event) => {
    event.target.style.backgroundColor = 'gray';
})

allBody.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'white';
})

let allP = document.querySelectorAll('p');
allP.forEach(item => {
    item.addEventListener('mouseenter', (event) => {
        event.target.style.color = 'gold'
        event.target.style.backgroundColor = 'purple'
    })
})

allP.forEach(item => {
    item.addEventListener('mouseleave', (event) => {
        event.target.style.color = 'black'
        event.target.style.backgroundColor = 'white'

    })
})

let allBtn = document.querySelectorAll('.btn');
allBtn.forEach(item => {
    item.addEventListener('mouseover', (event) => {
        alert("Hey move your mouse!");
    })
})


let noContext = document.querySelector('body');
noContext.addEventListener('contextmenu', (event) => {
    event.preventDefault();
})
