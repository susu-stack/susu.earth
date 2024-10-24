// Optional script, not required for video to play
const video = document.getElementById('loopVideo');

// Event listener to ensure video loads properly
video.addEventListener('loadeddata', () => {
    console.log('Video loaded successfully.');
});

video.addEventListener('error', (error) => {
    console.error('Error loading video:', error);
});