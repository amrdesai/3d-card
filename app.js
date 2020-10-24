// Container/Card - Selectors
const card = document.querySelector('.card');
const container = document.querySelector('.container');

//Items on HTML
const title = document.querySelector('.title');
const mouse = document.querySelector('.mouse img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const options = document.querySelector('.options');

// FUNCTIONS
//Animate In
const animateIn = (e) => {
    card.style.transition = 'none';
    //Popout
    title.style.transform = 'translateZ(125px)';
    mouse.style.transform = 'translateZ(150px)';
    description.style.transform = 'translateZ(100px)';
    options.style.transform = 'translateZ(75px)';
    purchase.style.transform = 'translateZ(50px)';
};
//Animate Out
const animateOut = (e) => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    title.style.transform = 'translateZ(0px)';
    mouse.style.transform = 'translateZ(0px) rotateZ(0deg)';
    description.style.transform = 'translateZ(0px)';
    options.style.transform = 'translateZ(0px)';
    purchase.style.transform = 'translateZ(0px)';
};

//Moving Animation Event
const movingAniamtion = (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
};

// EVENT LISTENER
//Mouse moving
container.addEventListener('mousemove', movingAniamtion);
//Mouse enter
container.addEventListener('mouseenter', animateIn);
//Mouse Leave
container.addEventListener('mouseleave', animateOut);
