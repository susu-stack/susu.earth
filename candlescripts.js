const gifPlayer = document.getElementById('gifPlayer');

// Define an array with the paths or filenames of the GIFs
const gifList = [
'candle1.gif',
'candle2.gif',
'candle3.gif',
'candle4.gif',
'candle5.gif',
'candle6.gif',
'candle7.gif',
'candle8.gif',
'candle9.gif',
'candle10.gif',
'candle11.gif',
'candle12.gif',
'candle13.gif',
'candle14.gif',
'candle15.gif',
'candle16.gif',
'candle17.gif',
'candle18.gif',
'candle19.gif',
'candle20.gif',
'candle21.gif',
'candle22.gif',
'candle23.gif',
'candle24.gif',
'candle25.gif',
'candle26.gif',
'candle27.gif',
'candle28.gif',
'candle29.gif',
'candle30.gif',
'candle31.gif',
'candle32.gif',
'candle33.gif',
'candle34.gif',
'candle35.gif',
'candle36.gif',
'candle37.gif',
'candle38.gif',
'candle39.gif',
'candle40.gif',
'candle41.gif',
'candle42.gif'
];

let currentGifIndex = 0;  // Start at the first GIF

// Function to play through the GIFs in sequence
function playGifSequence() {
    // Set the src of the gifPlayer to the current GIF path in the array
    gifPlayer.src = gifList[currentGifIndex];

    // Increment the index, and if it exceeds the length of gifList, reset to 0
    currentGifIndex++;
    if (currentGifIndex >= gifList.length) {
        currentGifIndex = 0;  // Loop back to the first GIF
    }

    // Set the interval for switching GIFs (e.g., 2 seconds)
    setTimeout(playGifSequence, 30000);  // Change 2000 to control the speed (2 seconds here)
}

// Start playing the GIF sequence once the page loads
window.onload = playGifSequence;