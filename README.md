# Calaska.org
Website for the Calaska Culture Camp, a Culture Camp for Alaska Natives held in Northern California.

## Technologies Used
* HTML 5
* CSS 3
* Javascript
* Bootstrap 3
* Sass
* Gulp
* FontAwesome

*Note: I used the bootstrap and fontawesome cdn because I tested the implementation against hosting them myself and found the cdn to be faster because of a reduced server latency.

## About
This was my first project coming out of a long break from front-end development.  The site is fully responsive at all screen resolutions.  I was trying to use minimal javascript to ensure a quick loading spped so I managed to get the mobile menu working without js.  It was also a last minute project so the scss is a bit sloppy for my taste.  

Also, if you click/tap on one of the images in the past events section a photo gallery will pop up.  I had a thumbnail for each image originally but that caused too many http requests so I changes it to one gallery image.  I will be refactoring the code and implimenting the site into a CMS.  Once they have more content for me to add.

## Page Speed Analysis
PageSpeed Insights Mobile 71/100, Desktop 89/100    |    GTMetrix 99%   |   Pingdom 96%

Possible Optimizations:
* Eliminate render-blocking JavaScript and CSS in above-the-fold content

Optimizations being used:
* Avoid landing page redirects
* Enable compression
* Leverage browser caching
* Minify CSS
* Minify HTML
* Minify JavaScript
* Optimize images
* Prioritize visible content
* Reduce server response time

I have found a script to defer the loading of some of the render-blocking files, but most are part of the layout so I have not implemented it. 
