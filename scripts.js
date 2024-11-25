// Select the hamburger menu and navigation links
const hamburger = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

// Check if elements are loaded properly
if (hamburger && navLinks) {
    // Add a click event listener to the hamburger menu
    hamburger.addEventListener('click', () => {
        console.log("Hamburger menu clicked!"); // Debugging log
        navLinks.classList.toggle('open'); // Toggle the 'open' class
    });
} else {
    // Log errors if elements are not found
    console.error("Error: Could not find 'hamburger-menu' or 'nav-links' in the DOM.");
}
