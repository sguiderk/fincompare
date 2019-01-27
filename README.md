# React Front-end Challenge - FinCompare
This single page application that presents a list that shows the F1 world champions starting from 2005 until 2015. Clicking on an item shows the list of the winners for every race for the selected year.
## What’s Included?
* This app has everything to build a modern single-page React app:
* React, JSX, es2015, boilerplate and Flow syntax support.
* Language extras beyond es2015 like the object spread operator.
* Auto prefixed CSS, so you don’t need -webkit- or other prefixes.
* preprocessor scripting language Sass  
* A fast-interactive unit test runner with built-in support for coverage reporting with Jest and Enzyme.
* A live development server that warns about common mistakes.

## Component app 
The app has 6 components Header, Content, SectionListRace ,SectionSeason , loading and footer 
* header component gets the header 
* content component gets the content 
* SectionSeason component gets the select list contains the season from 2005 until 2015 
* SectionListRace component get the list of races ( raceName,url, date , Circuit.circuitName, Circuit.url )  uses and drivers (  givenName,familyName,url ,dateOfBirth ,nationality )  Ergast API in format json 
* Loading component get animation loading while the sectionListRace load data 
* Footer  component get the footer content
## Screen shot and demonstration of this app 

![](https://i.imgur.com/L1yb1hal.png)

![](https://i.imgur.com/n0VqH4al.png)

![](https://i.imgur.com/TtjLhxtl.png)

the app is responsive 

Tablet device 

![](https://i.imgur.com/nRlsaJxl.png)

Mobile device

![](https://i.imgur.com/u89b0mWl.png) 

## Folder Structure
>
>     |   config-overrides.js
>     |   Dockerfile
>     |   package.json
>     |   README.md
>     +---public
>     |       favicon.ico
>     |       index.html
>     |       manifest.json
>     | fincompare_blu.svg
>     |src
>     |   index.js
>     +---api
>     |       Race.js
>     +---app
>     |       App.js
>     |       Content.js
>     |       Footer.js
>     |       Header.js
>     |       Loading.js
>     |       registerServiceWorker.js
>     |       SectionListRace.js
>     |       SectionSeason.js
>     +---config
>     |       Environments.js
>     |       setupTests.js
>     +---styles
>     |   |   main.scss
>     |   +---base
>     |   |       _page.scss
>     |   |       _reset.scss
>     |   |       _typography.scss
>     |   +---components
>     |   |       _accordion.scss
>     |   |       _actions.scss
>     |   |       _box.scss
>     |   |       _button.scss
>     |   |       _driver.scss
>     |   |       _form.scss
>     |   |       _grid.scss
>     |   |       _highlights.scss
>     |   |       _icon.scss
>     |   |       _icons.scss
>     |   |       _inner.scss
>     |   |       _list.scss
>     |   |       _loading.scss
>     |   |       _race.scss
>     |   |       _wrapper.scss
>     |   +---layout
>     |   |       _footer.scss
>     |   |       _header.scss
>     |   |       _main.scss
>     |   \---libs
>     |           _breakpoints.scss
>     |           _flexgrid.scss
>     |           _functions.scss
>     |           _grid.scss
>     |           _mixins.scss
>     |           _vars.scss
>     |           _vendor.scss
>     |           
>     \---test
>         |   App.test.js
>              


* the src/App contains all components 
* the src/api contains the api race 
* the src/config contains the configuration's url api and the setup for jest 
* the src/style contains all sass style 
* the src/test contains the script test

## Resume App Technologies:
* React
* Axios
* react-collapsible-component
* node-sass
* sass-loader
* Jest + Enzyme
## How to install on your computer

`# Clone this git repo:`

`git clone https://github.com/sguiderk/fincompare.git`

`cd fincompare/`

`# install the depencies `

`npm install`

`# run the application `

`npm start `

Then it will open http://localhost:3000 and the application will be running.

## Test
The script of test app.test.js contains 17 cases of test and 11 of them are used with
Snapshot, it test to automate process and create unit tests that can easily be overwritten and managed through time, and for the 6 We check if the api work perfectly and check the render of title and section with toEqual() function.
## To Run Tests

`npm test`

![](https://i.imgur.com/hhkxH1t.png)

## How to install on docker
I’ve provided the possibility to run this app under docker 
Build container
Now let's build it:

`docker build -t imagefincompare .`

Run container``
Now to run it:

`docker container run -it -p 3000:3000 imagefincompare`

Then it will open http://yourhost:3000 and the application will be running.

## Component used for this app

**_Axios :_** Promise based HTTP client for the browser and node.js
Link package : [link](https://www.npmjs.com/package/axios)

_**React-collapsible-component :**_ ReactJs collapsible accordion component. Light, simple and functional. Allows expand and collapse html content. Ready for use in your ReactJs application. 
Link package :  [link](https://www.npmjs.com/package/react-collapsible-component)

_**Node-sass :**_ Node-sass is a library that provides binding for Node.js to LibSass, the C version of the popular stylesheet preprocessor, Sass.
Link package :  [link](https://www.npmjs.com/package/node-sass).

_**sass-loader :**_ Loads a Sass/SCSS file and compiles it to CSS.
Link package :  [link](https://www.npmjs.com/package/sass-loader).

_**Jest  : **_Loads a Sass/SCSS file and compiles it to CSS.
Link package :  [link](https://www.npmjs.com/package/jest).

_**Enzyme :**_ Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output.
Link package :  [link](https://www.npmjs.com/package/enzyme).





