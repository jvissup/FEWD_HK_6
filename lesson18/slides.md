![General Assembly](../assets/images/ga.png)
# FEWD LESSON 18
## FEWD - Guest Speaker and Node.js

### Instructors
Kevin Bluer & Jimmy Wong



## Agenda

* Guest Speaker - Karen Farzam
* Open Topic - Node.js
* Final Project Check-In
* Open Topic - D3.js



## Guest Speaker - Karen Farzam



## Server-side JavaScript with Node.js



## Topics

* Client-side JS vs Server-side JS
* Node “Hello World”
* Node Concepts
* Quick Review Express
* Node “Hello Universe”
* Hosting (with Heroku)



## Client-side vs Server-side JS



## Client-side JS

* Everything we've covered so far (e.g. HTML, CSS, AND JavaScript)
* "JavaScript is used in billions of Web pages to add functionality, validate forms, communicate with the server, and much more"



## Server-side (and beyond) JS

* Essentially JavaScript running outside of a browser (web, desktop, cli, etc)
* "Node.js is a software platform for scalable server-side and networking applications."
* Powering the JavaScript renaissance



## Node.js

* The Node.js runtime is supported on Mac OS X, Windows and Linux
* Essentially command-line interface / apps (as opposed to script executed in a browser)
* Uses Chrome’s V8 Engine (the JavaScript engine that runs inside Google Chrome)



## Node.js vs ...	

* Before Node you’d have had to use different languages for the back-end and front-end of an application. E.g...
  * Ruby / Rails
  * PHP
  * Java
  * Python
  * Etc



## Node.js Hello World

```
var http = require('http');
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
```



## Node.js Installation & Example

![GeneralAssemb.ly](../assets/images/icons/exercise_icon_md.png)

* Install from the following: http://nodejs.org
* Example in "example_code/node_landing"
* Install the dependencies at the CLI (using "npm install")
* We'll be reviewing everything in more depth shortly :)



## Node.js Concepts



## Syntax

* It’s just JavaScript!
* With some additional concepts / keywords
* Modules & Exports (which you use to “expose” internally scoped functions / help code organization and sharing)



## Core Modules

* Provide additional functionality (equivalent to the "document" object in client-side JS)
* Examples
  * Fundamentals (Globals, STDIO, Timers, Modules Events, Buffers, Streams
  * Network I/O (HTTP, HTTPS, URL, Query, Strings, Net) 
  * File System I/O (File System, Path)
  * Terminal/Console (REPL, Readline, TTY)
  * Misc (Crypto, TLS/SSL, etc)



## Event Loop

* Similar to client-side JS, where a button might have an onClick event...
```
fs.readFile('/etc/passwd', function(err, data){
  console.log(data);
});
```
* ...Node extends this idea to server-side operations (e.g. “when you start an operation like reading a file, you can pass control to back to Node and have your code run when the data has been read”)



## Heroku Overview

* Popular PaaS (Platform as a Service)
* Also supports Ruby, Python, Java, PHP
* Great free tier (supports custom domains)
* Feel free to host your own projects there too :)



## Packages & NPM

* Node packages (and the NPM registry) are truly awesome
* Essentially huge (and very active) library of packages hosted at https://www.npmjs.org 
* Some sample commands:
```
$ npm install <package name> <-g>
$ npm install express
$ npm update
$ npm ls <-g>
```



## Packages & NPM

* Listings at the following:
  * https://www.npmjs.org/ 
  * https://nodejsmodules.org/
* Popular (examples)
  * Express (we’ll look at shortly)
  * Mongoose
  * Underscore 



## Node.js Lab - Publish Your Project So Far

![GeneralAssemb.ly](../assets/images/icons/exercise_icon_md.png)

* Register with Heroku (www.heroku.com)
* Install the Heroku Toolbelt (toolbelt.heroku.com)
* heroku create <optional name>
* Take the example and publish your own project to Heroku



## Introducing Express.js

* "Fast, unopinionated, minimalist web framework for node"
* One of the most starred and “depended upon” packages in the NPM registry
* Hosted at: https://github.com/strongloop/express
* Can be used for single page applications, web sites, hybrids, or public HTTP APIs
* Best thought of as a simple + powerful building block in building sophisticated web applications



## Express.js Additional

* Routing
* HTTP helpers (redirection, caching, etc)
* View system supporting 14+ template engines (Jade, EJS, etc) 



## Node.js 2x Examples

![GeneralAssemb.ly](../assets/images/icons/exercise_icon_md.png)

* Let's explore two examples
* "example_code\dyanmic-pages"
* "example_code\login"



## Node.js Next Steps

* Checkout (our website / welcome to contribute)
  * https://github.com/hongkongjs/www
* Online Learning Resources / Books
  * http://book.mixu.net/node/  
* Explore MEAN
  * Mongo, Express Angular, Node
  * http://www.mean.io 
* Additional Learning Frameworks
  * http://jedireza.github.io/drywall/




## Final Project Check-In



## D3.JS



## D3.JS - What is it?

* "...a magical chunk of JavaScript code that helps you express data visually on the web..."
* Data Driven Documents (D3)
* Library for creating data visualizations (although this somewhat undersells it)
* Renders in a browser...uses HTML, CSS, JavaScript, SVG



## Background

* Announced in 2011
* Created and maintained by Mike Bostock (supported by Vadim Ogievetsky and Jeff Heer)
* Where is it used?
  * Github
  * New York Times (which is where the author works)
  * Square
  * Simple



## D3.JS Flow

* Loads the data into the browsers memory
* Binds data to elements within the document (DOM)
* Transforms elements by interpreting the bound "datum" and setting visual properties accordingly
* Transitions elements between states in response to user input



## What it doesn't do...

* Provide out of the box visualizations, charts, etc
* Support older browsers (which keeps the codebase clean and free of hacks)
* Work with bitmaps, primarily vector (SVG) based
* Hide your original data (given it's all executed client side…if you're data can't be shared, don't use D3)



## What's possible?

* [Wealth of Nations](http://cdn.bluer.com/presentations/d3/visualizations/nations/nations.html)
* [InfoGraphics](http://cdn.bluer.com/presentations/d3/visualizations/infographic/photos.html)
* [New York Fashion Week](http://www.nytimes.com/newsgraphics/2013/09/13/fashion-week-editors-picks/)
* [Facebook IPO Visualization](http://www.nytimes.com/interactive/2012/05/17/business/dealbook/how-the-facebook-offering-compares.html)
* [Github Graphs](https://github.com/ga-students/FEWD_HK_6/graphs/contributors) 
* [Choropleth](http://bl.ocks.org/mbostock/4060606)
* [Pan & Zoom](http://bl.ocks.org/d3noob/5193723)
* [Repulsion](http://bl.ocks.org/mbostock/3231307)



## Check out the [Playground](http://phrogz.net/JS/d3-playground/#BlankDefault)