# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Sahana Ilenchezhian**

Time spent: **4** hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [x] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](http://g.recordit.co/EdKtxzxuoJ.gif)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

- I didn't like the black border on the buttons so I referred to this stack overflow to set them as transparent (https://stackoverflow.com/questions/2506844/how-do-i-make-a-transparent-border-with-css/2506870)
- I used this resource (https://www.w3schools.com/cssref/pr_background-image.asp) to look at the css property for background images and settings
- I used this resource (https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/math/random) to help me generate a random integer in JavaScript

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

   When I was testing this submission, I noticed that in every third round regardless of whether the user chose the right button or not, the alert depicting the game was lost kept popping up. After patiently walking through the functionality of each method from startGame() and onwards, I noticed that I had not initialized the guessCounter to 0 in startGame() and I do not reset the guessCounter to 0 on each round. After making these changes, I was able to overcome this error and play the game to the end. Another challenge that I faced was in rendering the pictures when the button was active. When I simply set the background to an image in the button:active section of the css, I noticed that the rendering was broken and very rough. After experimenting a bit, I realized that the quality of hover was much more smooth and decided to replace active with hover. A draw back of using hover, is that even when I don't click on the button, the image is shown. That said, for me, that was a risk I was willing to take instead of having slow loading and broken images with active. However, given more time, I definitely would have liked to find a fix without either of the tradeoffs. Another challenge that I noticed was when I was randomizing the patterns using Math.random, it was generating floating point numbers. Used to programming in java, I tried to cast the result of Math.random to int, and then realized that that type of casting was not possible in JavaScript. To resolve this, I used the resource on the guide and their use of the Math.floor function in combination with the Math.random function to get a random integer. Altogether, I learnt a lot from the various challenges I faced and debugged during this submission.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
   Below I've listed a few questions/concerns I had while completing this submission:

   1. I'm used to programming with ReactJS, and as such, I was wondering what are the tradeoffs between using ReactJS and the way used in this submission to build web pages?
   2. I noticed how the assets in glitch don't save the image jpegs to the local directory but instead generate a cdn link for each image. What are the pros and cons to generating
      images from the local directory versus generating them using the url property? Is one way faster than the other?
   3. I found that I struggled quite a bit to get a good color combination and styling for the website. How do you recommend getting practice with UI/UX? Are there any templates or
      color schemes out there for web developpers to adopt to their own website?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

   If I had more time to work on this project, I would finish the two optional features that I didn't get a chance to complete. I would also try to improve the color scheme and style of the webite. I would also try and match the color scheme of the pictures and the color of each button. I would also try to make the transitions when the button is active or is lit much more smoother. I would also try adding a point system and display the user's all time high score on the page. I would also try and give the user the chance to randomize the memory pattern and choose the difficulty of the memory game by giving them the option to choose the size of the memory pattern and the speed of the sequence. I would also love to experiment with rendering animations on the page when the user wins or loses instead of alerts.

## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
