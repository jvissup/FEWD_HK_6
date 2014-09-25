![General Assembly](../assets/images/ga.png)
# FEWD LESSON 15

## FEWD - Forms

### Instructors
Kevin Bluer & Jimmy Wong



## Agenda

* Forms
* Form Controls
* Building an application form



## Forms

How we can get data from users.

![](../assets/images/unit_2/forms.png)



## Forms

*	Wrapper for data collection elements

	*	Text fields
	*	Dropdown select boxes
	*	Radio Buttons
	*   Checkboxes
	*	etc



## Forms

Tells the page:

*	Where to send the data
*	How to send it
*	What is being sent



## Form Tag

```html
<form action="" method="POST" enctype="application/x-www-form-urlencoded">
	...
</form>
```

Available Attributes

*	Action (URL to send data to, default to the same page URL)
*	Method (POST, GET)
*	Enctype (multipart/form-data if uploading files)

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)



## Inputs

```html
<input />
```

*	Place between `<form></form>` tag
*	Attributes
	*	`type` (text,submit,password,email,checkbox,button,radio,file,etc)
	*	`name` (Used server side)
	*	`value`
	*	`placeholder` (HTML 5)
*	Gotchas
	*	The font-family for an input is not inherited!!!
	*	This can lead to funny sizing issues on Macs vs. PCs where the default font is not the same

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)



## Text

```html
<input type="text" />
```
Use value to set initial text

![](../assets/images/unit_2/forms.png)



## Email (HTML 5)

```html
<input type="email" />
```
Allows browser to autofill field

![](../assets/images/unit_2/email.png)



## Password

```html
<input type="email" />
```
Hides characters as typed

![](../assets/images/unit_2/password.png)



## Submit vs File vs Button

*	Value is button text. Defaults to submit in chrome, submit query in IE ```<input type="submit" value="Submit">```

*	Creates clickable button ```<input type="button">```

*	Creates a file upload element ```<input type="file">```



## Button vs Input Button vs Input Submit

http://codepen.io/wyuenho/pen/eqAyw?editors=101

* `<input type="button" value="Button">` is the same as `<button type="button">Button</button>`

* `<button>Submit</button>` is the same as `<input type="submit">`

* `<input type="reset" value="Reset Button">` is the same as ```<button type="reset">Reset Button</button>```

* Input is harder to style

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)



## Select and Option

![](../assets/images/unit_2/select.png)



## Select and Option

```html
<select name="select">
  <option value="value1">Value 1</option> 
  <option value="value2" selected>Value 2</option>
  <option value="value3">Value 3</option>
</select>
```


[MDN <select>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)
[MDN <option>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option)



## Labels

Information about the input field should be put in a ```<label>``` tag

To tie the two together choose one of these methods:

```html
<label>Name <input type="text" name="yourName"></label>
```

OR

A label that is associated with a control via __for__ will be clickable too

```html
<label for="yourName">Name</label>
<input type="text" name="yourName" id="yourName">
```

<small>Note: Clicking the label text in either case places the focus in the input field (great for radio buttons)</small>


[MDN reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)



## Styling

*	Can’t be styled directly
	* Checkboxes, File upload inputs, Radio buttons

*	Number of ways to do this *instructor can cover all or just choose one
	1. Opacity 0 on the element, set it’s height and width to define clickable
       area, set the height and width of its parent to be the same as the input
       (don’t forget position relative). Style the parent.
	2. Hide the element, style a corresponding label how you wante the element to appear
	3. Try using pseudo elements and the selector :checked for no JS switching
       between checked and unchecked images used for styling



![GeneralAssemb.ly](../assets/images/icons/exercise_icon_md.png)
## GA Application Form

[HTML &lt;optgroup&gt; Tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup)

[HTML &lt;textarea&gt; Tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)



## Optional: Fieldset/Legend

`<fieldset>`
Wrapper for grouped form elements
Ex: First, middle, last name text fields

`<legend>`
Goes inside fieldset
Defines the grouping term for the fieldset

```
<fieldset>
	<legend>Your Name</legend>
	<input type="text" name="first_name">
	<input type="text" name="middle_name">
	<input type="text" name="last_name">
</fieldset>
```



## Optional: GET Requests

* GET request encodes data as part of URL
* POST encodes data as part of the payload



## Optional: Validation

* [Simple validation](http://www.the-art-of-web.com/html/html5-form-validation/) is provided by HTML5
* Use simple if/else statements
* Or a validation library like [Parsley.js](http://parsleyjs.org/doc/index.html)
* [HTML 5 form validation polyfills](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-browser-Polyfills#web-forms)
