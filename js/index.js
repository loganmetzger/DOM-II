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
    item.addEventListener('mouseleave', event  => {
        item.style.color = 'dodgerblue';
    })
});

// 3
document.body.addEventListener('keydown', event => {
    if (event.key === 'q') {
        document.body.remove();
    }
})

// 4
// e.target.style.visibility = 'hidden';

let paragraphs = document.querySelectorAll('p');
console.log(paragraphs);
paragraphs.forEach(item => {
    item.addEventListener('onselect', event => {
        item.target.style.color = 'dodgerblue';
    })
})

// 5
let imgs = document.querySelectorAll('img');
imgs.forEach(item => {
    item.addEventListener('dblclick', event => {
        item.style.visibility = 'hidden'
    })
})


// prevent default 
navLinks.forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
    })
})

// 6
let container = document.querySelector('.container');
console.log(container);
container.addEventListener('click', event => {
    container.style.backgroundColor = 'green';
})

// 7
let destinations = document.querySelectorAll('.destination');
console.log(destinations);
destinations.forEach(item  => {
    item.addEventListener('copy', event => {
        item.style.backgroundColor = 'purple';
    })
})

// 8
