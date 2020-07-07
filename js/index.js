// Your code goes here
// const launchButton = document.querySelector('#launchButton')

// 1
let navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(item => {
    item.addEventListener('mouseover', event => {
        item.style.color = 'red';
    })
})

// 2
