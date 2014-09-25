![General Assembly](../assets/images/ga.png)
# FEWD LESSON 9

## FEWD - jQuery

### Instructors
Kevin Bluer & Jimmy Wong



## Agenda
<aside class="notes"></aside>

* jQuery, jQuery, jQuery
* Wireframing & Prototyping



## jQuery __is__ JavaScript
<aside class="notes">30 Min</aside>



## jQuery
<aside class="notes"></aside>

jQuery is a cross-browser JavaScript library designed to simplify the client-side scripting of HTML.



## jQuery
<aside class="notes"></aside>

* jquery.com - A JavaScript library that makes DOM manipulation simple.
* Cross browser - works the same in all* browsers. 
* Allows:
  * Document traversal
  * CSS Manipulation
  * Event Handling
  * Animation
  * and more!



## Adding jQuery to your website
<aside class="notes"></aside>

Host your the JS file on your server

_&lt;script src="js/jquery-1.8.3.min.js"&gt;&lt;/script&gt;_

<br>

__OR__

<br>

Use the Google CDN

_&lt;script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"&gt;&lt;/script&gt;_

Make sure you have the __http__ protocol in the above URL.



## jQuery
<aside class="notes"></aside>

###$

The Dollar Sign



## jQuery
<aside class="notes"></aside>

Selectors are just like CSS

```$(".class").click();```



## jQuery
<aside class="notes"></aside>

Finding elements on a page, use selectors with the $ function:

```
$("#searchBox")

$(".errors")

$("p")
```

Returns HTML elements you have selected.



## Very brief look...("jquery")
<aside class="notes"></aside>

![GeneralAssemb.ly](../assets/images/icons/exercise_icon_md.png)

* Note where we've the jquery .js file
* Compare the syntax to how we were refer
* The different options to use a function



## `<head>` or `<body>`?
<aside class="notes"></aside>

* Putting it in `<head>`, need to wait for the .js to be completely loaded before the `<body>` is rendered.
* Putting just before the `</body>` can increase page load speed
* You can also consider making use of CDN like Google CDN



## $(document).ready();
<aside class="notes"></aside>

If you want to place the .js file inside the `<head>`, you need put your code inside
```$(document).ready();```

So your code will run after the DOM is completely loaded and you can select any tags in the `<body>` with any problem.



## Head || Body
<aside class="notes"></aside>

![GeneralAssemb.ly](../assets/images/icons/exercise_icon_md.png)

* Pay attention to what (and what doesn't load)



## jQuery API Documentation
<aside class="notes"></aside>

Everything you need to know is [here](http://api.jquery.com/): 

Example:
* [.attr()](http://api.jquery.com/attr/)
* [.css()](http://api.jquery.com/css/)



## Rewrite (and refactor) Color Switcher
<aside class="notes">Class ~ 60 Min</aside>

![GeneralAssemb.ly](../assets/images/icons/exercise_icon_md.png)

[Color Switcher in Javascript](http://codepen.io/kevinbluer/pen/vrfbJ)

[Color Switcher in jQuery](http://codepen.io/kevinbluer/pen/rfpEi)



## Divided Times
<aside class="notes">Class ~ 90 Min</aside>

![GeneralAssemb.ly](../assets/images/icons/exercise_icon_md.png)

Play with the following functions before u start:
* [.toggleClass()](http://api.jquery.com/toggleClass/)
* [.hasClass()](http://api.jquery.com/hasClass/)
* [.hide()](http://api.jquery.com/hide/)
* [.show()](http://api.jquery.com/show/)

And also:
* [.slideUp()](http://api.jquery.com/slideUp/)
* [.siblings()](http://api.jquery.com/siblings/)
* [.removeClass()](http://api.jquery.com/removeClass/)
* [.addClass()](http://api.jquery.com/addClass/)

* Start by exploring the functions on api.jquery.com
* We'll review on screen shortly



# Wireframing Tools
<aside class="notes"></aside>

* Purpose
* Low-to-high fidelity
* Balsamiq
* UXPin
* Sketch 3