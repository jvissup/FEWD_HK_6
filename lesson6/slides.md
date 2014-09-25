![General Assembly](../assets/images/ga.png)
# FEWD LESSON 6

## FEWD - Intro Programming

### Instructors
Kevin Bluer & Jimmy Wong



## Agenda

* Utilities, Templates, & Frameworks
* Introduction To Programming
* Pseudo Code (Rock Paper Scissors)
* What JS can do?
* Color Switcher  
* Traffic Light
* Wireframing
* Homework



# Utilities, Templates, & Frameworks



## Utilities, Templates, & Frameworks
* Many Types (HTML, CSS, JavaScript)
* From very minimal (such as reset.css) to the more fully featured (Twitter Bootstrap)
* Why? To provide "building blocks" for your sites and applications
* Great way to learn best practices (documentation, examples, etc)
* SAVE YOU LOTS OF PAIN :)



## Utilities, Templates, & Frameworks Examples
* Simple Utilities ([reset.css](http://meyerweb.com/eric/tools/css/reset/), [normalize.css](http://necolas.github.io/normalize.css/))
* More Fully Fledged Frameworks ([HTML5BP](http://html5boilerplate.com/), [Twitter Bootstrap](http://getbootstrap.com/), [Foundation](http://foundation.zurb.com/), [Skeleton](http://www.getskeleton.com/))
* JavaScript ([jQuery](http://jquery.com/), [Zepto](http://zeptojs.com/), [Underscore](http://underscorejs.org/))
* There are LOTS more out there



## Looks take a look...Utilties
* [Reset.css](http://meyerweb.com/eric/tools/css/reset/) - "goal of a reset stylesheet is to reduce browser inconsistencies in things like default line heights, margins and font sizes of headings, and so on"
* [Normalize.css](http://necolas.github.io/normalize.css/) - More comprehensive and "precisely targets only the styles that need normalizing". Also built into a lot of frameworks (as we'll see next)



## Looks take a look...Templates & Frameworks
* [HTML5BP](http://html5boilerplate.com/) / [H5BP Showcase](http://h5bp.net/)
* [Twitter Bootstrap](http://getbootstrap.com/) / [Love Bootstrap](http://lovebootstrap.com/) + [Built With Bootstrap](http://builtwithbootstrap.com/) + [Wrap Bootstrap](https://wrapbootstrap.com/)
* [Foundation](http://foundation.zurb.com/) / [Responsive Gallery](http://zurb.com/responsive?framework_id=1)
  * Note that the Responsive Gallery also lists a great selection of the other frameworks 
* [Startup Framework](http://designmodo.com/startup/)



## However...
* No heavy usage of the frameworks throughout the course :)
* As such feel free to being exploring + gathering your own time
* Also feel free to use samples such as the [Startup Matchmaker](/lesson6/startup_matchmaker/index.html) 



## Quick Aside: Code Reuse
* Snippets (begin gathering) + And note the Snippets Library in Sublime (Ctrl + S)
  * Let's try it out
  * Sublime | Tools + New Snippet
  * Add something (note the CDATA and tabTrigger)
  * Save as .sublime-snippet
* Site Templates (also explore and gather)
* Also try and aspire to be [DRY](https://en.wikipedia.org/wiki/Don't_repeat_yourself) (Don't Repeat Yourself) 



# Introduction To Programming



## Program
A __program__ is a set of instructions that you write to tell a computer what to do

---

## Programming

__Programming__ is the task of writing those instructions in a language that the computer can understand.



## Becoming A Programmer

It isn't about the programming language. It is about changing how you think.

We have to know how the computer thinks to change how we think.

---

##How Computers ‘Think’

The short answer is that they don’t think.

The slightly longer answer is that while computers don’t think, they act as if they do, by sequentially executing simple instructions.

The only things a computer knows are the things we tell it.



## Pseudo Code

* A script of a computer program
* It's just like a wireframe of a program



## Pseudo Code

### Example - Wage calculator

Here is the business logic

* Hourly rate
  * $500/hr if work within 4 hours
  * $600/hr if more than 4 hours
  * Bonus $500 if work more than 8 hours



## Pseudo Code

```
// variable
get working_hours

// calculate
if working_hours <= 4
  wage = working_hours x 500
else if working_hours <= 8
  wage = working_hours x 600
else if working_hours > 8
  wage = working_hours x 600 + 500
```



## Pseudo Code
<aside class="notes"></aside>

### What does this program do?

```
target_temperature = 26
repeat forever:
  current_temperature = get_sensor_reading
  if (target_temperature - 1) > current_temperature,
    turn_on_heater
  if target_temperature <= current_temperature,
    turn_off_heater
```



## Pseudo Code
<aside class="notes"></aside>

### Flow chart helps too!

* [Fix the lamp](http://ils.indiana.edu/faculty/smilojev/teaching/s515spring2012/2012springprojects/session11/img/flowchart1.jpg)
* [Golf or Home](http://www.pacestar.com/images/sampfc.gif)
* [Alarm War](http://www.edrawsoft.com/images/examples/Process-Flowchart.png)

<br>
[Flowchart symbols](http://www.wiley.com/college/busin/icmis/oakman/outline/chap05/images/f5_02.gif)



# Rock Paper Scissors
<aside class="notes"></aside>

### Can you write a robot which can play Rock Paper Scissors with u?

![GeneralAssemb.ly](../assets/images/icons/exercise_icon_md.png)

* Write a flow diagram (or pseudo code block)
* Work in groups of 2-3



## What JS can do?
<aside class="notes"></aside>

* [Introduction](https://generalassemb.ly/online/videos/what-can-you-do-with-javascript)
* Click Events
* Manipulation of the DOM (Document Object Model)
* Javascript Games
* Animation
* Awesome Stuff with Data



## Spot the JavaScript?

* [Impress](http://bartaz.github.io/impress.js/#/bored)
* [Form Validation](http://parsleyjs.org/doc/examples/simple.html)
* [D3JS](http://d3js.org/)
* [Twitter Bootstrap](http://getbootstrap.com/javascript/) 



## A few JS basics

* JavaScript is more of a "real" programming language (unlike HTML and CSS)
* Interpreted at runtime by the client browser (unlike "compiled programming")
* "Created in 10 days in May 1995 by Brendan Eich, then working at Netscape and now of Mozilla"
* Going through a big renaissance of late :)
* Can be including in your page in very much the same way that CSS can
  * Although typically it's in a separate .js files



[Color Switcher](http://codepen.io/kevinbluer/pen/vrfbJ)
<aside class="notes"></aside>

### Let's read some JS code

![GeneralAssemb.ly](../assets/images/icons/code_along.png)

* Let's add another color option together



[Traffic Light](http://codepen.io/kevinbluer/pen/gfhJz)
<aside class="notes"></aside>

### Be an engineer and the traffic light

![GeneralAssemb.ly](../assets/images/icons/exercise_icon_md.png)

* Build on the mental model of how JS works with HTML and CSS
* Don't worry too much about the syntax itself (we'll be diving in later)



## Wireframing
* "A page schematic or screen blueprint, is a visual guide that represents the skeletal framework of a website", [Wikipedia](https://en.wikipedia.org/wiki/Website_wireframe)
* Lots of tools and approaches (important to find the ones that work best for you)
* [Paper](https://en.wikipedia.org/wiki/Paper) (dead trees variety), [Adobe Ideas](https://itunes.apple.com/hk/app/adobe-ideas/id364617858?mt=8), [Balamiq Mockups](http://balsamiq.com/products/mockups/), [UXPin](http://uxpin.com/)



## Homework

* Begin Project Wireframeing (any of the tools mentioned)
  * Concept Stage
  * 2-3 Core Screens
* Spend some time organizing exploring frameworks, organizing your code / snippets, etc
* If you haven't watched...
  * [Front Row Video - How To Learn How To Code](https://generalassemb.ly/online/videos/programming-for-non-programmers-tech-speak/cinema?chapter=3)
  * [Front Row Video - What Can You Do With JavaScript?](https://generalassemb.ly/online/videos/what-can-you-do-with-javascript/cinema?chapter=3)
* :)