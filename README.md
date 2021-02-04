# PROJECT 4 README <!-- omit in toc -->

## Overview

_**Crate Digger** is a full-stack webapp built using the "React on Rails" stack. It provides information on where famous songs got their samples. Users will be able to look up songs to see if they've been sampled, and checkout songs that use the same sample. The site has full-crud and uses a RESTful JSON API. This is my fourth and final project for a 'Software Engineering Immersive' course at General Assembly. The inspiration for this project is whosampled.com(https://www.whosampled.com/)_

Deployed site: 
_React front-end site: http://fresh-worm.surge.sh/_
_Heroku back-end site: https://cratedigger2-api.herokuapp.com/samples_

<br>

## MVP

### Goals

- _4 datatables: one for songs that have been sampled (with relevant information such as the artist,producer, and year released, and if they contain samples), one for songs in which the samples appear, one for producers and the songs they have worked on, and a table to join songs and samples_ 
- _Have full crud: eg, users can submit songs that have been sampled or contain samples_
- _Have a working searchbar where users can search for songs and producers._
- _Have a detail page where users can edit or delete a song._


<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _React is a JavaScript library for frontent development_ |
|   React Router   | _This allows you to handle routes in a React app_ |
| Ruby on Rails    | _This is a server side framework written in Ruby._ |
| axios    | _This is a library that is used for making API calls._ |
| cors    | _Helps connect the frontend to the backend._ |


<br>

### Client (Front End)

#### Wireframes

Whimsical link: https://whimsical.com/crate-digger-GG3AD9rJCquxBowM3wm2AA

Desktop Landing Page:

![alt text](https://github.com/DavidVergheseProgrammer/CrateDigger/blob/main/pics/Screenshot%202021-01-28%20at%201.13.48%20AM.png "Wireframe for Desktop Landing Page")

Tablet, Landing Page:

![alt text](https://github.com/DavidVergheseProgrammer/CrateDigger/blob/main/pics/Screenshot%202021-01-28%20at%201.26.56%20AM.png "Wireframe for Tablet, Landing Page")

Mobile Landing page:

![alt text](https://github.com/DavidVergheseProgrammer/CrateDigger/blob/main/pics/Screenshot%202021-01-28%20at%201.10.08%20AM.png "Wireframe for Mobile Landing Page")

Desktop, 'Add song' page

![alt text](https://github.com/DavidVergheseProgrammer/CrateDigger/blob/main/pics/Screenshot%202021-01-28%20at%201.14.00%20AM.png "Wireframe for Desktop, 'Add song' page")

Desktop, 'All Songs' page

![alt text](https://github.com/DavidVergheseProgrammer/CrateDigger/blob/main/pics/Screenshot%202021-01-28%20at%2011.50.04%20AM.png "Wireframe for Desktop, 'All Songs' page")

Desktop, 'Search Results' page

![alt text](https://github.com/DavidVergheseProgrammer/CrateDigger/blob/main/pics/Screenshot%202021-01-28%20at%2011.54.24%20AM.png "Wireframe for Desktop, 'Search Results' page")

Desktop, 'Song Detail' page

![alt text](https://github.com/DavidVergheseProgrammer/CrateDigger/blob/main/pics/Screenshot%202021-01-28%20at%209.15.10%20AM.png "Wireframe for Desktop, 'Song Detail' page")

Desktop, 'Editing song' page

![alt text](https://github.com/DavidVergheseProgrammer/CrateDigger/blob/main/pics/Screenshot%202021-01-28%20at%2012.12.23%20PM.png "Wireframe for Desktop, 'Song Detail' page")


#### Component Hierarchy

``` structure

src
|__ components/
    |__ Card/
       |__ Card.jsx
       |__ Card.css
    |__ Footer/
       |__ Footer.jsx
       |__ Footer.css
    |__ Header/
       |__ Header.jsx
       |__ Header.css
|__ containers/
    |__ Container/
       |__ Container.jsx
       |__ Container.css
|__ Layouts/
    |__ Layout.jsx
    |__ Layout.css
|__ screens/
    |__ Add/
       |__ Add.jsx
       |__ Add.css
    |__ Detail/
       |__ Detail.jsx
       |__ Detail.css
    |__ Editing/
       |__ Editing.jsx
       |__ Editing.css
    |__ Listing/
       |__ Listing.jsx
       |__ Listing.css
|__ services/
    |__ api-config.js
    |__ songs.jsx

```

#### Component Tree

Figma link: https://www.figma.com/file/ijAjLad8c0m3fUxeAPb684/Untitled

![alt text](https://github.com/DavidVergheseProgrammer/CrateDigger/blob/main/pics/Screenshot%202021-01-28%20at%2010.15.56%20AM.png "Component Tree")



[Component tree](url)

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Researching songs    |    L     |     1.5 hrs      |     1hr     |     1hr   |
| Setting up Rails    |    H     |     3 hrs      |     5hrs     |    5hrs   |
| Setting up React |    H     |     3 hrs      |     5hrs     |     5hrs    |
| Setting up CRUD functions |    H     |     3 hrs      |     5hrs     |     5hrs    |
| Writing song descriptions |    L     |     2 hrs      |     1.5hr     |     1.5hr  |
| Graphic Design |    L     |     2 hrs      |     2hr     |     2hr    |
| Mobile Responsiveness |    H    |     3 hrs      |     1hr     |     1hr    |
| Debugging    |    H     |     3 hrs      |     4hr    |    4h    |
| Testing |    H     |     3 hrs      |     2hr     |     2hr    |
| Cleaning up the code       | Moderate |      2hrs      |      2hr       | 2hr            |
| Pseudocode                 |   Low    |      1hr       |      0.5hr     |     0.5hr    |
| Feedback                   | Moderate |      2hrs      |       1hr    |    1hr     |
| Incorporating Suggestions  | Moderate |      1hrs      |     1hr      |    1hr     |
| Preparing for presentation | Moderate |      1hr       |      0.5hr       |     0.5hr     |
| TOTAL               |          |     30.5 hrs      |     31.5hrs     |     31.5hrs    |

<br>

### Server (Back End)

#### ERD Model
Lucid chart link: https://lucid.app/lucidchart/1f470e7b-8921-490e-9d65-43201f871f91/edit?page=0_0#?folder_id=home&browser=icon

![alt text](https://github.com/DavidVergheseProgrammer/CrateDigger/blob/main/pics/Screenshot%202021-01-28%20at%203.29.09%20PM.png "Wireframe for Desktop, 'Song Detail' page")


<br>

***

## Post-MVP

- Have a built-in music visualizer. 
- Include information about songs that contain the same chords, or similar melodies or lyrics. 
- Sort function: eg sort songs by the number of times they have been sampled.
- Authorization.
***

## Code Showcase

```
def create
    @song_producer = Producer.create(song_producer_params)
    @sample_producer = Producer.create(sample_producer_params)
    @sample = Sample.new(sample_params)
    @sample.producer = @sample_producer
    @sample.save
    @song = Song.new(song_params)
    @song.producer = @song_producer
    @song.save

    if @song.save && @sample.save
      @songssample = SongsSample.new(song: @song, sample: @sample)
    if @songssample.save
      render json: @songssample, include: [{song: {include: :producer}}, {sample: {include: :producer}}], status: :created
    else
      render json: @songssample.errors, status: :unprocessable_entity
    end
  end
end
```

> I am proud of this as it is a custom function that creates 5 entries in 5 different tables at once.

## Code Issues & Resolutions

> I had issues with the create page, as it requires creating 5 entries in 5 different tables. I had to create the custom function you see above in my 'songssamples' controller. I recieved lots of help from Corey and Jeremy on this problem. Initially, I tried to approach this problem using lots of JS logic in React, but Corey showed me how to approach this problem using custom controllers in Rails. I also had to use a lot of trial and error as well. 

> I had issues with the edit page. Similar to the create page, it also requires editing entries in 5 tables at once. I had to approach this by looking at how to edit each item individually. It still isn't perfect, but it is at least functional. 

> Styling. This wasn't really a major issue, but it was one that was important to me. I really wanted to create something that looked sleek and modern. I used a tip that Gary mentioned in his P3 presentation, using an eyedropper, to pick the color scheme. I used this image, _https://c1.zzounds.com/media/productmedia/fit,600by600/quality,85/ddj-sz2-top-s-0af81adc4882fd292dc56a6329321373.jpg_ as my color guide. I also tried to pick a font that would be similar to the 'serato' logo you see on it. 



