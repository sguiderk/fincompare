# React Front-end Challenge - FinCompare
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
![](https://i.imgur.com/WJCei2L.png)
![](https://i.imgur.com/MUsQepE.png)
## Folder Structure


* the src/App contains all components 
* the src/api contains the api race 
* the src/config contains the configuration's url api and the setup for jest 
* the src/style contains all sass style 
* the src/test contains the script test
## Variables SASS 
Below is an example of how to use variables. You will notice I have all my variables in one document for easy access.

``	`$misc: (```
		```z-index-base:		10000```
	```);```


	```$duration: (```
		```menu:				0.5s,```
		```banner:				1s,```
		```transition:			0.2s```
	```);```


	``$size: (``
		``border-radius:		4px,``
		``element-height:		3.25rem,``
		``element-margin:		2rem,``
		``container-width:	80rem,``
		``header-height:		3.25rem,``
		``inner-width:		75rem,``
		``menu-width:			20rem``
	``);``


	``$font: (``
		``family:				('Raleway', Arial, Helvetica, sans-serif),``
		``family-fixed:		('Courier New', monospace),``
		``weight:				400,``
		``weight-light:		300,``
		``weight-xlite:		200,``
		``weight-bold:		600``
	``);``


	``$palette: (``
		``bg:					#ffffff,``
		``fg:					#444444,``
		``fg-bold:			#555555,``
		``fg-light:			#bbbbbb,``
		``border:				rgba(0,0,0,0.25),``
		``border-bg:			rgba(0,0,0,0.075),``
		``border-lt:			rgba(0,0,0,0.025),``
		``highlight:			accent1,``
		``success:            #d3f6d3,``

		``accent1: (``
			``bg:				#00b1ff,``
			``fg:				rgba(255,255,255,0.75),``
			``fg-bold:		#ffffff,``
			``fg-light:		rgba(255,255,255,0.4),``
			``border:			rgba(255,255,255,0.25),``
			``border-bg:		rgba(255,255,255,0.075),``
			``border-lt:		rgba(255,255,255,0.025),``
			``highlight:		accent1``
		``),``

		``accent2: (``
			``bg:				#111111,``
			``fg:				rgba(255,255,255,0.5),``
			``fg-bold:		#ffffff,``
			``fg-light:		rgba(255,255,255,0.4),``
			``border:			rgba(255,255,255,0.25),``
			``border-bg:		rgba(255,255,255,0.075),``
			``border-lt:		rgba(255,255,255,0.025),``
			``highlight:		accent1``
		``)``
	``);-color;``
``}``

## Resume App Technologies:
* React
* Axios
* react-collapsible-component
* node-sass
* sass-loader
* Jest + Enzyme
## How to install on your computer

`# Clone this git repo:`

`git clone github.com/sguiderk/fincompare.git`

`cd fincompare/`

`# install the depencies `

`npm install`

`run the application `

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

`docker build -t imagedincompare .`

Run container``
Now to run it:

`docker container run -it -p 3000:3000 imagedincompare`

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





