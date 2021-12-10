# CS 601 

# Doyle B. Johnson

# Term Project

## (Week 1 Description)

Description of assignment:

- Has seven (7) web pages using consistent navigation
- Uses at least five semantic elements per page 
- Embeds two videos on the Sample Projects page
- Three paragraphs of text on About Me page
- Includes at least 26 images
- Has a table for the Education degree listing
- Has four lists
- Includes 26 external links

To run:

​	Launch index.html from any browser



## (Week 2 Description)

Week two updates and additions:

- Updated img html with "width" and "height"
- Added "main.css" stylesheet and link to each page
- Formatted main semantic elements
- Style first letter of each main paragraph ("main p:first-letter")
- Style links
- Style table, and move logo/links into table cell for university name and align logo and name
- Set images and videos to auto-adjust size as screen size changes
- Use media query to change four settings based on screen size; for narrow screens:
  - Change background color to blue
  - Reduce font size
  - Remove footer
  - Add link at bottom of page to top navigation bar

To run:

​	Launch index.html from any browser



## (Final Project Description)

- Added two additional pages with travel photo slide show, and a "Now and Then" gallery for a total of nine pages
- Added javascript to every page
- Added Vue to hobbies.html/hobbies.js, nowthen.html/nowthen.js pages
- Changed default background to blue, and change to white for narrow screens
- All CSS written by hand; images and video auto sized using "object-fit: cover"; screen narrowing handled by @media query for screen size
- Specific javascript additions:

  - index - resize and change image using mouseover
  - about - show/hide buttons for photos; added "Law Firm Experience" that uses fetch to get law firm JSON data from JSON file
  - education - buttons to play or mute music on mouseover events for the photo and university logos; university logos are also links to specific program websites
  - patents - hovering over each link shows a cover sheet for each patent; clicking on link goes to patent on Google patent site
  - cases - three buttons highlight the list with different colors, and button can clear decoration
  - projects - embedded video, and pdf project presentation; buttons change between "show" and "hide" for each project
  - photos - travel photo slide show, with next and previous buttons
  - nowthen - Vue page; uses Vue to change images on moueover and mouseout events
  - hobbies - Vue page; uses Vue to create slide show for each hobby by clicking on the photos
- Key additions: 

  - Audio on hover
  - Captions all update with image changes
  - fetch/JSON
  - Vue
- ES6 additions:

  - let/const
  - String templates
  - Destructuring (about.html file to make the data table)
  - async/await (ECMAScript 2017)
- Final counts:

  - Files:
    - html: 9
    - javascript: 9
    - css: 1
    - images: 86
    - audio files: 6
    - pdfs: 3
    - videos: 1
    - json: 1
  - External links: 26
  - Lists: 4
  - Tables: 2
- Validation:
  - CSS validates with no errors
  - JSON validates with no errors
  - HTML - Vue syntax issues noted, but no others
  - Javascript - JSLint only warns on Vue syntax
  - Site tested with Firefox, Chrome and Edge but NOT Safari
