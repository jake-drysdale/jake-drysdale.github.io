// Wrap your code in an event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // Get the title element
    const titleElement = document.getElementById('typing-title');

    // Define the text you want to type in the animation
    const typingText = [
        // "Welcome to my portfolio.",
        // "I am a passionate researcher.",
        // "I enjoy creating music.",
        // Add more lines of text as needed
    ];

    // Time interval for typing animation (in milliseconds)
    const typingInterval = 100; // Adjust as needed

    // Start the typing animation
    let textIndex = 0;
    let charIndex = 0;

    function typeText() {
        if (textIndex < typingText.length) {
            if (charIndex < typingText[textIndex].length) {
                titleElement.textContent += typingText[textIndex].charAt(charIndex);
                charIndex++;
                setTimeout(typeText, typingInterval);
            } else {
                setTimeout(eraseText, 1000); // Pause after typing a line
            }
        } else {
            textIndex = 0; // Restart the animation loop
            setTimeout(typeText, typingInterval);
        }
    }

    function eraseText() {
        if (charIndex > 0) {
            titleElement.textContent = typingText[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseText, typingInterval / 2);
        } else {
            textIndex++;
            setTimeout(typeText, typingInterval);
        }
    }

    // Start the typing animation on page load
    typeText();
});
