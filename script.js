// Optional script, not required for video to play
const video = document.getElementById('loopVideo');

// Event listener to ensure video loads properly
video.addEventListener('loadeddata', () => {
    console.log('Video loaded successfully.');
});

video.addEventListener('error', (error) => {
    console.error('Error loading video:', error);
});

// Trigger a fake pop-up and then redirect to the real page
const triggerFakePopup = document.getElementById('triggerFakePopup');
triggerFakePopup.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior

    // Create a small fake pop-up to pre-trigger the browser's pop-up handling
    const fakePopup = window.open("", "_blank", "width=100,height=100");

    if (fakePopup) {
        // If the pop-up is allowed, close it immediately and proceed to the real page
        fakePopup.close();
        window.location.href = "https://susu.earth/the-calm-wind-shapes-the-boat";
    } else {
        // If pop-up is blocked, provide feedback or try again
        alert("Please allow pop-ups to proceed.");
    }
});