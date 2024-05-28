document.addEventListener('DOMContentLoaded', () => {
    const coin = document.getElementById('coin');
    const score = document.getElementById('score');

    // Initialize score counter
let currentScore = 546757;

    // Make the coin focusable
    coin.setAttribute('tabindex', '0');

    // Add event listener for clicks
    coin.addEventListener('touchstart', () => {
        // Reset the animation by removing and re-adding the class
        coin.classList.remove('shake');
        void coin.offsetWidth; // Trigger a reflow, flushing the CSS changes
        coin.classList.add('shake');
        // Increment the score
    currentScore+=3789;
    // Update the score text
    score.textContent = `${currentScore}`;

     // Retrieve the coordinates of the tap event
     const x = event.touches[0].clientX;
     const y = event.touches[0].clientY;

        // Create a new element for the +1 text
    // const plusOne = document.createElement('div');
    // plusOne.textContent = '+1';
    // plusOne.classList.add('plus-one');
    // plusOne.style.left = `${x}px`; // Set the left position
    // plusOne.style.top = `${y}px`; // Set the top position
    // document.body.appendChild(plusOne);

    // // Animate the +1 text
    // // Animate the +1 text
    // setTimeout(() => {
    //     plusOne.style.transition = 'transform 1s ease-out, opacity 0.9s linear'; // Set custom animation timings
    //     plusOne.style.transform = 'translateY(-300px)'; // Start moving up
    //     plusOne.style.opacity = '0'; // Fade out
    // }, 20); // Delay before animation starts
    
    // // Remove the +1 text element after the animation ends
    // setTimeout(() => {
    //     plusOne.remove();
    // }, 1500); // Total animation duration

    });

    // Prevent default action for focus to avoid highlighting
    coin.addEventListener('mousedown', (e) => {
        e.preventDefault();
    });

    // Disable right-click context menu
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });
});
