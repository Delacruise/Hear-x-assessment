# hear_x_assessment

> Hear-X Assesment by Luke Daffue
Thank you for the opportunity.

## Build Setup

``` bash
# install latest stable VUE version
npm install vue

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## How to test application
Open terminal
Go to the project folder
Type npm run dev
Open browser with url -> localhost:8080 
Follow application instructions

## NOTES
There were three items I was not able to complete successfully.
1) Progressbar
The progressbar is not functioning the way it is meant to be. It is supposed to increment as each individual file download is completed. Unfortunately, I was not able to figure out how to listen for a click event on the SAVE AS window. Currently, it's just linked to a timeout function that simulates progress.

If I had more time I would try to rather find another way of approaching the problem. Maybe downloading all the files in a zip file via ajax/axios and then monitoring header to see when it's complete. Or maybe look for vue plugin that already has already been developed.

I assume the files only had to be downloaded for testing purposes because it was not needed for the application to continue as expected. 

2) Channel balancing 
I was not able to figure out how to programmatically channel the sound between left and right ear. Current the sound is just played twice for both ears. 

I lost a lot of time trying to solve this problem, but unfortunately, I still don't have a clue.

3) Unit Testing
Unfortunately unit testing was last on my priority list... and then I ran out of time.  

Obviously, If I had more time I would have focused more on the items above. Other items I would have focused on would have been the design. The current design is a bit bland and not crisp enough. I would also have liked to add a bit more bells and whistles, especially on the final results section.

I would have wanted it to be more analytical. Reaction time per click per ear. Graphical percentage indication per ear. History test log that is saved against the patient name. This data can then be used to compare tests and more animations.