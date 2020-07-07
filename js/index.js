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
    item.addEventListener('mouseleave', event  =>{
        item.style.color = 'dodgerblue';
    })
})

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



// prevent default 
navLinks.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
    })
})
