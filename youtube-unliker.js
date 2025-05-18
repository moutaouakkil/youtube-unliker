async function removeAllLikedVideosWithProgress() {
  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  
  // collect all video elements currently loaded in the playlist
  const videos = Array.from(document.querySelectorAll('ytd-playlist-video-renderer'));
  let removed = 0;

  // create a fixed-position container for the progress indicator
  const progressBarContainer = document.createElement('div');
  progressBarContainer.style.position = 'fixed';
  progressBarContainer.style.top = '10px';
  progressBarContainer.style.left = '50%';
  progressBarContainer.style.transform = 'translateX(-50%)';
  progressBarContainer.style.backgroundColor = '#f9f9f9';
  progressBarContainer.style.border = '1px solid #ccc';
  progressBarContainer.style.padding = '10px';
  progressBarContainer.style.zIndex = '10000';
  progressBarContainer.style.width = '300px';
  progressBarContainer.style.textAlign = 'center';
  progressBarContainer.style.fontFamily = 'Arial, sans-serif';
  progressBarContainer.style.fontSize = '14px';
  progressBarContainer.style.color = '#333';

  // initialize the text element to display the count of disliked videos
  const progressText = document.createElement('div');
  progressText.innerText = `Disliked videos: 0`;
  progressBarContainer.appendChild(progressText);

  // create the background of the progress bar
  const progressBar = document.createElement('div');
  progressBar.style.height = '10px';
  progressBar.style.width = '100%';
  progressBar.style.backgroundColor = '#e0e0e0';
  progressBar.style.marginTop = '10px';
  progressBar.style.borderRadius = '5px';
  progressBarContainer.appendChild(progressBar);

  // create the fill element that will visually represent progress
  const progressFill = document.createElement('div');
  progressFill.style.height = '100%';
  progressFill.style.width = '0%';
  progressFill.style.backgroundColor = '#999';
  progressFill.style.borderRadius = '5px';
  progressBar.appendChild(progressFill);

  // add the progress bar to the document body
  document.body.appendChild(progressBarContainer);

  // iterate through each video and remove it from the liked playlist
  for (let i = 0; i < videos.length; i++) {
    const video = videos[i];
    const menuButton = video.querySelector('#button[aria-label]');
    if (menuButton) {
      menuButton.click();
      await sleep(500); // wait for the menu to open

      // find the 'Remove from Liked videos' option in the menu
      const menuItems = document.querySelectorAll('ytd-menu-service-item-renderer');
      for (let item of menuItems) {
        const text = item.innerText || item.textContent;
        if (text && text.toLowerCase().includes('remove from')) {
          item.click();
          removed++;
          progressText.innerText = `Disliked videos: ${removed}`;
          const progressPercent = ((removed / videos.length) * 100).toFixed(2);
          progressFill.style.width = `${progressPercent}%`;
          await sleep(1000); // wait for the action to complete
          break;
        }
      }
    }
  }

  // update the progress text to indicate completion
  progressText.innerText = `All liked videos have been removed.`;
  await sleep(3000); // allow the user to read the final message
  document.body.removeChild(progressBarContainer); // remove the progress bar from the page
  console.log('All liked videos have been removed.');
}

removeAllLikedVideosWithProgress();