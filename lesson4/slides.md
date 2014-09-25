![General Assembly](../assets/images/ga.png)
# FEWD LESSON 4

## FEWD - Advanced CSS Continued

### Instructors
Kevin Bluer & Jimmy Wong



## Agenda

* Questions and Recap
* Advanced CSS Selectors
* CSS Specificity
* Lab 1
* CSS Positioning
* Lab 2



## Advanced CSS Selector
<aside class="notes">Kit ~ 15 min</aside>

* element
* \*
* \#X, .Y
* X Y, X > Y
* X + Y and X ~ Y
* X[attr]
* X[attr=value], X[attr|=value], X[attr*=value], X[attr^=value], X[attr$=value], X[attr~=value]
* X:link, X:visited, X:hover, X:active
* X:not(Y)
* [Pseudo Classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
* [Pseudo Elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)



## Sibling Combinators

### X + Y

Selects Adjacent Element

```css
.first-born + .second-born {
  color: red;
}
```

```html
<div class="parent">
	<div class="first-born">1st</div>
	<div class="second-born">2nd</div>
</div>
```



## Sibling Combinators

### X ~ Y

Selects All Siblings

```css
.first-born ~ div {
  color: red;
}
```

```html
<div class="parent">
	<div class="first-born">1st</div>
	<div>2nd</div>
	<div>3rd</div>
</div>
```



## Attribute Selectors

* [attr]

	Represents an element with an attribute name of attr.
  
* [attr=value]

	Represents an element with an attribute name of attr and whose value is
    exactly "value".



## Attribute Selectors

* [attr~=value]

	Represents an element with an attribute name of attr whose value is a
    whitespace-separated list of words, one of which is exactly "value".

* [attr|=value]

	Represents an element with an attribute name of attr. Its value can be
    exactly “value” or can begin with “value” immediately followed by “-”
    (U+002D). It can be used for language subcode matches.



## Attribute Selectors

* [attr^=value]

	Represents an element with an attribute name of attr and whose value is
    prefixed by "value".

* [attr$=value]

	Represents an element with an attribute name of attr and whose value is
    suffixed by "value".
	
* [attr*=value]

	Represents an element with an attribute name of attr and whose value
    contains at least one occurrence of string "value" as substring.



## CSS Specificity

* [Specifics on CSS Specificity](http://css-tricks.com/specifics-on-css-specificity/)
* [MDN CSS Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)



## Positioning

1. Absolute Positioning
2. Fixed Positioning
3. Relative Positioning
4. Stacking Contexts
5. Floating and Clearing



## Absolute Positioning

* [Containing Block](http://reference.sitepoint.com/css/containingblock)
* `position: absolute`
* `top`, `bottom`, `left`, `right`



## Fixed Positioning

* `position: fixed`

	Same as absolute positioning, but the containing block is always the
    viewport.



## Relative Positioning

* `position: relative`

	Content flow normally, like the default value, `position: static`, but
    shifted vertically and/or horizontally depending on `top`, `bottom`, `left`,
    `right`.



## Stacking Contexts

* Web pages are 2D, but boxes are 3D.
* Absolutely for fixed positioned elements may overlap.
* Starts at 0, negative numbers move block back, positive to front.

```
z-index: 999;
```



## Floats

<img src="../assets/images/float-example.png" width="768">

[Reference](http://www.nytimes.com/2014/08/07/world/africa/who-weighing-emergency-decree-on-ebola.html?ref=world)



## Characteristics of Floats

* Non-floated content "float" around floated boxes, but other boxes in flow
[completely ignore them](http://jsbin.com/azuwul/1/edit)
* A floated box is taken out of the flow, doesn’t affect the block-level boxes
  around it.
* Floated box is shifted to the left or right until its *margin edge* touches the
  *padding edge* of the **containing block**
* No [Margin Collapsing](http://www.sitepoint.com/web-foundations/collapsing-margins/)

```
float: left|right|none;
```



## Clearing

Used to force an element to start below any floated elements.

```
clear: left|right|both;
```
Why? Because the floated element is taken out of the normal flow, so its
dimension isn't taken account by it's containing block, i.e. parent shorted than
child.



## Clearfix

In short:

```
.clearfix {
	overflow: auto;
}
```

But...

[micro clearfix hack](http://nicolasgallagher.com/micro-clearfix-hack/)




## Homework

### Fashion Blog Part 2

<a href="../lesson4/labs/fashion_blog_part2.png"><img src="../lesson4/labs/fashion_blog_part2.png" width="768"></a>



### Reading

* [Learn CSS Layout](http://learnlayout.com/)
* [Absolute Centering](http://www.smashingmagazine.com/2013/08/09/absolute-horizontal-vertical-centering-css/)
* [Multi-column Layouts](http://alistapart.com/article/multicolumnlayouts)
