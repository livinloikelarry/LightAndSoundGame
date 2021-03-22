# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Yuvia Leon**

Time spent: ** 6 ** hours spent in total

Link to project: (https://glitch.com/edit/#!/spangle-boundless-nut)

## Required Functionality

The following **required** functionality is complete:

- [ X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [ X] "Start" button toggles between "Start" and "Stop" when clicked.
- [ X] Game buttons each light up and play a sound when clicked.
- [ X] Computer plays back sequence of clues including sound and visual cue for each button
- [ X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [ X] User wins the game after guessing a complete pattern
- [ X] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [ X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [ X] Buttons use a pitch (frequency) other than the ones in the tutorial
- [ X] More than 4 functional game buttons
- [ X] Playback speeds up on each turn
- [ X] Computer picks a different pattern each time the game is played
- [ ] Player only loses after 3 mistakes (instead of on the first mistake)
- [ ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![]()

* please note I have attached part 1, 2, and 3 of my game demo. The gif that includes a half-screen of code was added on because I found that whenever I opened my game in a full size window the sound would not play. However, if kept at half-page the sound works nicely. I'm not sure if others encountered this issue or if it has to do with my browser settings

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
   used this link to understand setTimeout():
   https://www.w3schools.com/jsref/met_win_settimeout.asp 
   used this link to check syntax for array: 
   https://www.tutorialsteacher.com/javascript/javascript-array
   used this link for math.random: 
   https://www.tutorialsteacher.com/javascript/javascript-array

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
   
   I have very minimal experience with Javascript, CSS, and HTML. Upon starting the assigned project I was really excited to delve into these languages. I admired the finished look of the example project, and I was delighted at the thought of being able to create a game of my own. A product of my labor, created by my brain…. and Codepath’s useful guide. Unlike other programming projects I have completed, I could visibly see the functionality that I was implementing. My excitement propelled me forward and I worked on the project for 2 hours. I then chose to focus on my coursework, and classes which meant I didn’t touch the project for a week. This is where the challenge came in. When I returned to my half finished project, the previously clear game structure seemed to have lost its clarity. The syntax on the page held less meaning than it did before. My project was exactly as I had left it but it was I, not my code, who had undergone a change. Naturally, I felt a tinge of panic. I let a little bit of doubt creep into my mind and I wondered if I would be able to see this project through. However, instead of calling it quits I allowed myself a couple of minutes to calm down, and think rationally. Oftentimes when faced with a difficult challenge the fear of failure keeps us from starting. I knew that I was only experiencing these feelings of doubt and panic because I didn’t want to fail at this. Afterall, there were no other repercussions. Nobody except me would even know if I applied for this opportunity. I decided to step out of that “fear-of-failure” mindset and I came up with a plan for how I would move forward. My first task was to read through the steps that I had already completed. As I read through the material, I looked at the corresponding code I had written. When I got to a method that I did not understand I made sure to Google the documentation of the method. I was glad that I consumed the materials slowly, even though I had the urge to pick up where I left off. As a result, I felt confident in my ability to carry out the rest of the project. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
   
   1)The project that we created was simple in its design and intractability with users. However, my limited knowledge of Cybersecurity has taught me to be weary of what a user can do. From a web developer perspective, are there certain rules or precautions that are generally taken to protect a user’s information or limit what a malicious user can do? 2) Creating a simple website seems to be one part of the puzzle. I have a better understanding of the way a site is made up of pieces, such as buttons, sound, and user-interaction. Together, these form a visual whole. What is the bigger picture? What is allowing all of these technologies to interact? I have a feeling this has to do with backend programming. I don’t think I understand what goes on “behind the scenes” but this is something I am eager to be introduced to. 3) Lastly, in an academic setting it is rare for students to collaborate on code. However, in the workplace it is precisely this collaboration that allows things to get done. What does collaboration look like in the web development world? How do multiple people come together to effectively work on a single project?   

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
   
   In order to get a better sense of how I would improve my game, I asked my family to play a couple of rounds. It was a really fun activity for us, and I was able to think of a couple of additional features that would provide a better user experience. My game currently uses a dialog box that lets the user know whether they won or lost. I would implement an “cheering noise” audio that plays when the game is won. Additionally, I would like for there to be falling confetti on the page. Although, I do not yet know if that sort of animation is easily implemented. I would also like to refactor the playClueSequence( ) function so that it can reveal more than 1 new box in a single turn. Ideally, I would reveal 2 new boxes during each turn. For an added challenge I would like for 1 or more of my boxes to change color (but remain in the same spot and play the same sound) in the middle of a game. I noticed that my little brother repeated the sequence of colors to himself as the game progressed. How sneaky of me to try to trip him up! 


## License

    Copyright Yuvia Leon

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
