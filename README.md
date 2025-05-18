# YouTube Unliker

A JavaScript-based browser script developed to remove all liked videos from a YouTube account's "Liked Videos" playlist in bulk.

## Features

- **Bulk Removal**: Automatically unlikes all currently loaded videos in the playlist.
- **Visual Feedback**: Displays a real-time progress bar indicating the count of disliked videos.
- **Neutral UI**: Employs subtle gray tones for a distraction-free progress interface.
- **Cross-Browser Compatibility**: Compatible with major desktop browsers.
- **Language Independence**: Functions independently of the YouTube interface language.

## Important Note

- **Permanent Changes**: Liked videos will be permanently removed. Ensure this action is intended before execution.

## Usage Instructions

1. **Open the "Liked Videos" Playlist**  
   Visit: [https://www.youtube.com/playlist?list=LL](https://www.youtube.com/playlist?list=LL)

2. **Open Developer Tools Console**  
   - Use `F12` or `Ctrl+Shift+I` (Windows/Linux)  
   - Use `Cmd+Option+I` (Mac)

3. **Enable Pasting (if required)**  
   In some browsers, pasting code into the console is disabled by default. If prompted:
   - Type `allow pasting` into the console and press `Enter`

4. **Execute the Script**  
   Paste the contents of [`youtube-unliker.js`](./youtube-unliker.js) into the browser console and press `Enter`

## How It Works

- Selects all video entries currently visible in the "Liked Videos" playlist.
- Attaches a fixed-position progress bar to the page for visual feedback.
- Iteratively opens the menu for each video and triggers the "Remove from Liked videos" action.
- Increments and updates the progress bar count after each successful removal.
- Cleans up the progress indicator upon completion.

## Disclaimer

This script is provided as-is, without any warranty. Use is at the user's own risk. The developer is not responsible for any outcomes resulting from its use.

## License

Licensed under the [MIT License](./LICENSE).