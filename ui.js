// Get all the panel elements
const panels = document.getElementsByClassName('panel');

// Loop through each panel element
for (let i = 0; i < panels.length; i++) {
    const panel = panels[i];
    // Get the play button within the current panel
    const playBtn = panel.querySelector('.play-btn');
    

    // Add a click event listener to the play button
    playBtn.addEventListener('click', () => {
        // Play the video
        video.play();
        // Add a red background color to the panel
        panel.style.backgroundColor = 'red';
    });
}


