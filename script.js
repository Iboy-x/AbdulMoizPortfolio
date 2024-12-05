
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


