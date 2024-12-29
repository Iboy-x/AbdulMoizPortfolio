
const tween = KUTE.fromTo(
    '#blob1',
    { path: '#blob1' },
    { path: '#blob11'},
    { repeat : 999, duration : 3000, yoyo : true}
    ).start()

    const tween1 = KUTE.fromTo(
        '#blob2',
        { path: '#blob2' },
        { path: '#blob22'},
        { repeat : 999, duration : 3000, yoyo : true}
        ).start()


const snakeContainer = document.getElementById("snake-container");

document.addEventListener("mousemove", (event) => {
    // Get the container's bounding box
    const containerRect = snakeContainer.getBoundingClientRect();

    // Create a new trail element
    const trail = document.createElement("div");
    trail.className = "snake";

    // Adjust position based on container's offset
    const trailSize = 10; // Same size as in CSS
    trail.style.left = `${event.clientX - containerRect.left - trailSize / 2}px`;
    trail.style.top = `${event.clientY - containerRect.top - trailSize / 2}px`;

    // Append the trail to the container
    snakeContainer.appendChild(trail);

    // Remove the trail after its animation ends
    setTimeout(() => {
        trail.remove();
    }, 2000); // Matches the `fade-out` animation duration
});

//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}
//////////////////////////////////////////////////////////////////////
