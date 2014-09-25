![General Assembly](../assets/images/ga.png)
# FEWD LESSON 12

## FEWD - Objects

### Instructors
Kevin Bluer & Jimmy Wong



## Agenda

* Improve on our Image Carousel
* Object
  * Declaration
  * Access
  * Modification
  * Iteration
  * `this`, methods and basic object-oriented programming
* Homework



## An object is a dictionary

```javascript
var dictionary = {
	apple: "A fruit that is red and delicious",
	orange: "A round fruit that is orange and citrusy"
	...
};
```



## Objects

Lets revisit our image carousal

[Codepen.io](http://codepen.io/wyuenho/pen/Avfjg?editors=101)



## Objects

Initially we had this mess

```javascript
var image0 = "http://www.disneydreaming.com/wp-content/uploads/2010/06/Mickey-Mouse-3.jpg";
var image1 = "http://i936.photobucket.com/albums/ad203/dixeybaby212/mickey-mouse.gif";
var image2 = "http://cdnvideo.dolimg.com/cdn_assets/62d2a14bc0bbadf17da90dbc1e534b9587982d63.jpg";
var image3 = "http://vonbeau.com/images/uploads/free-mickey-mouse-pin.jpg";
var image4 = "http://cdnvideo.dolimg.com/cdn_assets/edf2e6347d64562285603dc2edf7286b4aaa1603.jpg";

$('#gallery').append('<img src="' + image0 + '">');
$('#gallery').append('<img src="' + image1 + '">');
$('#gallery').append('<img src="' + image2 + '">');
$('#gallery').append('<img src="' + image3 + '">');
$('#gallery').append('<img src="' + image4 + '">');
```



## What is an array?

```javascript
// INSTEAD OF ...
var image0 = "http://www.disneydreaming.com/wp-content/uploads/2010/06/Mickey-Mouse-3.jpg";
var image1 = "http://i936.photobucket.com/albums/ad203/dixeybaby212/mickey-mouse.gif";
var image2 = "http://cdnvideo.dolimg.com/cdn_assets/62d2a14bc0bbadf17da90dbc1e534b9587982d63.jpg";
var image3 = "http://vonbeau.com/images/uploads/free-mickey-mouse-pin.jpg";
var image4 = "http://cdnvideo.dolimg.com/cdn_assets/edf2e6347d64562285603dc2edf7286b4aaa1603.jpg";

// AN OBJECT OF IMAGES
var images = {
  "image0": "http://www.disneydreaming.com/wp-content/uploads/2010/06/Mickey-Mouse-3.jpg",
  "image1": "http://i936.photobucket.com/albums/ad203/dixeybaby212/mickey-mouse.gif",
  "image2": "http://cdnvideo.dolimg.com/cdn_assets/62d2a14bc0bbadf17da90dbc1e534b9587982d63.jpg",
  "image3": "http://vonbeau.com/images/uploads/free-mickey-mouse-pin.jpg",
  "image4": "http://cdnvideo.dolimg.com/cdn_assets/edf2e6347d64562285603dc2edf7286b4aaa1603.jpg"
};
```



## Object Notation

```javascript
var images = {
  "mickeyUSA": "http://www.disneydreaming.com/wp-content/uploads/2010/06/Mickey-Mouse-3.jpg",
  "mickeySheley": "http://i936.photobucket.com/albums/ad203/dixeybaby212/mickey-mouse.gif",
  "minnie": "http://cdnvideo.dolimg.com/cdn_assets/62d2a14bc0bbadf17da90dbc1e534b9587982d63.jpg",
  "mickey": "http://vonbeau.com/images/uploads/free-mickey-mouse-pin.jpg",
  "mickeyBlue": "http://cdnvideo.dolimg.com/cdn_assets/edf2e6347d64562285603dc2edf7286b4aaa1603.jpg"
};
```

Notation:

* Braces `{}` and each item separated by comma `,`
* Each item inside an object is a `key: value` pair.
* The last item SHOULD NOT HAVE comma
* Access a specific item in an object by a **string** key

```javascript
// Example
var firstImage = images["mickeyUSA"];
```



## An Object can Store Anything

Example

```javascript
var myObj = {
	str: 'Hello',
	none: undefined,
	num: 54.3,
	bool: true
};

console.log(myObj["str"]); // prints Hello
console.log(myObj["none"]); // prints undefined
console.log(myObj["num"]); // prints 54.3
console.log(myObj["bool"]); // prints true
```

Like a multi-type array, generally a bad idea.


## Set a new Item on an Object

```javascript

var airportCodes = {
	"JFK": "John F. Kennedy, NYC",
	"HKG": "Hong Kong International Airport",
	"SFO": "San Francisco Internaltional Airport"
};

cities['LHR'] = "London Heathrow";
cities.CDG = "Paris Charles de Gaulle Airport"; // more about this syntax later
```



## Removing an Item from an Object

```javascript
// Delete a key value pair
delete cities["LHR"];
```



## Iterating an Object

```javascript
var airportCodes = {
	"JFK": "John F. Kennedy, NYC",
	"HKG": "Hong Kong International Airport",
	"SFO": "San Francisco Internaltional Airport"
};

for (var key in airportCodes) {
	console.log(key + ": " + airportCodes[key]);
}
```



## Iterating an Object

Let's go back to the Mickey example:

```javascript
var images = {
  "mickeyUSA": "http://www.disneydreaming.com/wp-content/uploads/2010/06/Mickey-Mouse-3.jpg",
  "mickeySheley": "http://i936.photobucket.com/albums/ad203/dixeybaby212/mickey-mouse.gif",
  "minnie": "http://cdnvideo.dolimg.com/cdn_assets/62d2a14bc0bbadf17da90dbc1e534b9587982d63.jpg",
  "mickey": "http://vonbeau.com/images/uploads/free-mickey-mouse-pin.jpg",
  "mickeyBlue": "http://cdnvideo.dolimg.com/cdn_assets/edf2e6347d64562285603dc2edf7286b4aaa1603.jpg"
};

for (var key in images) {
  $('#gallery').append('<img src="' + images[key] + '" alt="' + key + '">');
};

// Or in jQuery
$.each(images, function (key, value) {
  $('#gallery').append('<img src="' + value + '" alt="' + key + '">');
});
```



## Why Objects Instead of Arrays?

Use arrays when you need to things that have natural orders.

Use objects when you need to attach a name instead of an index to collection
items.




## Another Reason - Object Oriented Programming

[Codepen.io](http://codepen.io/wyuenho/pen/Gkbfp)




## Homework (won't be graded)

### Image Carousel

![GeneralAssemb.ly](../assets/images/icons/exercise_icon_md.png)

Reversal Engineer [Bootstrap Carousel](http://getbootstrap.com/javascript/#carousel).

Especially the auto-cycling part.



## Reading

[MDN - Objects](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object)

[Eloquent Javascript - Data Structures: Objects and Arrays](http://eloquentjavascript.net/04_data.html)
