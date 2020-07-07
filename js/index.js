// Your code goes here
// const launchButton = document.querySelector('#launchButton')

// 1
let navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(item => {
    item.addEventListener('mouseenter', event => {
        item.style.color = 'red';
    })
})

// 2
navLinks.forEach(item => {
    item.addEventListener('mouseleave',event  =>{
        item.style.color = 'dodgerblue';
    })
})

// 3
