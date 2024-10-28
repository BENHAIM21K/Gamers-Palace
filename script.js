// Select all tab links and tab content sections
const tabs = document.querySelectorAll('.tab-link');
const contents = document.querySelectorAll('.tab-content');

// Add click event listener for each tab
tabs.forEach(tab => {
    tab.addEventListener('click', e => {
        e.preventDefault();
        const target = document.getElementById(tab.dataset.tab); // Correct target selection

        // Remove active classes from all tabs and content
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        // Add active class to the clicked tab and corresponding content
        tab.classList.add('active');
        target.classList.add('active');
    });
// Splash Screen Functionality
document.addEventListener('DOMContentLoaded', () => {
    const enterButton = document.getElementById('enter-button');
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');

    // Hide splash screen on button click and show main content
    enterButton.addEventListener('click', () => {
        splashScreen.style.display = 'none';
        mainContent.style.display = 'block'; // Ensure main content is visible
        document.body.classList.remove('no-scroll'); // Allow scrolling if previously disabled
    });
});

// Tab functionality
const tabs = document.querySelectorAll('.tab-link');
const contents = document.querySelectorAll('.tab-content');

// Add click event listener for each tab
tabs.forEach(tab => {
    tab.addEventListener('click', e => {
        e.preventDefault();
        const target = document.getElementById(tab.dataset.tab);

        // Remove active classes from all tabs and content
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        // Add active class to the clicked tab and corresponding content
        tab.classList.add('active');
        target.classList.add('active');
    });
});
// Select the audio element and the toggle button
const audio = document.getElementById('background-audio');
const toggleButton = document.getElementById('audio-toggle-button');

// Function to toggle mute/unmute and update button text
function toggleAudio() {
    if (audio.muted) {
        audio.muted = false;
        toggleButton.textContent = 'Mute';
    } else {
        audio.muted = true;
        toggleButton.textContent = 'Unmute';
    }
}

// Optional: Automatically set initial state if audio is muted by default
document.addEventListener('DOMContentLoaded', () => {
    if (audio.muted) {
        toggleButton.textContent = 'Unmute';
    } else {
        toggleButton.textContent = 'Mute';
    }
});
})
