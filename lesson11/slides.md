![General Assembly](../assets/images/ga.png)
# FEWD LESSON 11

## FEWD - Arrays

### Instructors
Kevin Bluer & Jimmy Wong



## Agenda

* Build a Carousel
* Array
  * Declaration
  * Access
  * Modification
  * Properties
  * Iteration
* Homework



## An array is a collection of data

![accordion folder](../assets/images/array.png)



## Arrays

What if we had a collection of images that we wanted to display to the screen one at a time? 

How could we store all the images?

[Codepen.io](http://codepen.io/wyuenho/pen/AHxja?editors=001)



## Arrays

HTML

&lt;div id="gallery"&gt;&lt;/div&gt;

&lt;script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"&gt;&lt;/script&gt;



## Arrays

Javascript

```javascript
var image1 = "http://www.disneydreaming.com/wp-content/uploads/2010/06/Mickey-Mouse-3.jpg";
var image2 = "http://i936.photobucket.com/albums/ad203/dixeybaby212/mickey-mouse.gif";
var image3 = "http://cdnvideo.dolimg.com/cdn_assets/62d2a14bc0bbadf17da90dbc1e534b9587982d63.jpg";
var image4 = "http://vonbeau.com/images/uploads/free-mickey-mouse-pin.jpg";
var image5 = "http://cdnvideo.dolimg.com/cdn_assets/edf2e6347d64562285603dc2edf7286b4aaa1603.jpg";

$('#gallery').append('<img src="' + image1 + '">');
$('#gallery').append('<img src="' + image2 + '">');
$('#gallery').append('<img src="' + image3 + '">');
$('#gallery').append('<img src="' + image4 + '">');
$('#gallery').append('<img src="' + image5 + '">');
```



## What is an array?

```javascript
// INSTEAD OF ...
var image1 = "http://www.disneydreaming.com/wp-content/uploads/2010/06/Mickey-Mouse-3.jpg";
var image2 = "http://i936.photobucket.com/albums/ad203/dixeybaby212/mickey-mouse.gif";
var image3 = "http://cdnvideo.dolimg.com/cdn_assets/62d2a14bc0bbadf17da90dbc1e534b9587982d63.jpg";
var image4 = "http://vonbeau.com/images/uploads/free-mickey-mouse-pin.jpg";
var image5 = "http://cdnvideo.dolimg.com/cdn_assets/edf2e6347d64562285603dc2edf7286b4aaa1603.jpg";

// AN ARRAY OF IMAGES
var images = [
  "http://www.disneydreaming.com/wp-content/uploads/2010/06/Mickey-Mouse-3.jpg",
  "http://i936.photobucket.com/albums/ad203/dixeybaby212/mickey-mouse.gif",
  "http://cdnvideo.dolimg.com/cdn_assets/62d2a14bc0bbadf17da90dbc1e534b9587982d63.jpg",
  "http://vonbeau.com/images/uploads/free-mickey-mouse-pin.jpg",
  "http://cdnvideo.dolimg.com/cdn_assets/edf2e6347d64562285603dc2edf7286b4aaa1603.jpg"
];
```



## Array Notation

```javascript
var images = [
  "http://www.disneydreaming.com/wp-content/uploads/2010/06/Mickey-Mouse-3.jpg",
  "http://i936.photobucket.com/albums/ad203/dixeybaby212/mickey-mouse.gif",
  "http://cdnvideo.dolimg.com/cdn_assets/62d2a14bc0bbadf17da90dbc1e534b9587982d63.jpg",
  "http://vonbeau.com/images/uploads/free-mickey-mouse-pin.jpg",
  "http://cdnvideo.dolimg.com/cdn_assets/edf2e6347d64562285603dc2edf7286b4aaa1603.jpg"
];
```

Notation:

* Square bracket `[]` and each array item separated by comma `,`
* The last item SHOULD NOT HAVE comma
* Access a specific item in an array by index which starts from 0

```javascript
// Example
var image1 = images[0];
var image2 = images[1];
var image3 = images[2];
var image4 = images[3];
var image5 = images[4];
```



## Array index

```javascript
var cities = ['NYC', 'LA', 'SYD', 'LDN'];
```

![Array Indexing](../assets/images/unit_1/array_index_diagram.png)



## An array can store anything

Example

```javascript
var myArr = ['Hello', , 54.3, true];

console.log(myArr[0]); // prints Hello
console.log(myArr[1]); // prints undefined
console.log(myArr[2]); // prints 54.3
console.log(myArr[3]); // prints true
```



## Set a new value on an array item

```javascript
var cities = ['NYC', 'LA', 'SYD', 'LDN'];
cities[2] = 'HK';

console.log(cities);
```



## Array length

```javascript
var cities = ['NYC', 'LA', 'SYD', 'LDN'];
console.log(cities.length); // print 4
```



## Other examples

```javascript
// Declare an empty array
var cities = [];

// Add item to an array
cities.push('NYC')
cities.push('LA')

// An other way to declare an empty array
var fruits = new Array(); // Please don't do this
```

[More on Arrays](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array)



## Iterating an array

```javascript
var cities = ['NYC', 'LA', 'SYD', 'LDN'];

for (var i = 0; i < cities.length; i++) {
  // Manipulate the array item using element and index
};
```



## Iterating an array

Example:

```javascript
var cities = ['NYC', 'LA', 'SYD', 'LDN'];

for (var i = 0; i < cities.length; i++) {
  console.log('cities[' + i + ']: ' + cities[i]);
};
```



## Iterating an array

Let's go back to the Mickey example:

```javascript
var images = [
  "http://www.disneydreaming.com/wp-content/uploads/2010/06/Mickey-Mouse-3.jpg",
  "http://i936.photobucket.com/albums/ad203/dixeybaby212/mickey-mouse.gif",
  "http://cdnvideo.dolimg.com/cdn_assets/62d2a14bc0bbadf17da90dbc1e534b9587982d63.jpg",
  "http://vonbeau.com/images/uploads/free-mickey-mouse-pin.jpg",
  "http://cdnvideo.dolimg.com/cdn_assets/edf2e6347d64562285603dc2edf7286b4aaa1603.jpg"
]

for (var i = 0; i < images.length; i++) {
  $('#gallery').append('<img src="' + images[i] + '">');
};
```



## Iterating an array

Beware of [off-by-one error](http://en.wikipedia.org/wiki/Off-by-one_error)! If
you don't want to deal with the math, you can use
[$.each](http://api.jquery.com/jQuery.each/).

```javascript
$.each(images, function (index, value) {
  $('#gallery').append('<img src="' + images[index] + '">');
});

```



## Iterating an array

```javascript
$.each(images, function (index, value) {
  $('#gallery').append('<img src="' + value + '">');
});

```



## Homework (won't be graded)

### Image Carousel

![GeneralAssemb.ly](../assets/images/icons/exercise_icon_md.png)

Reversal Engineer [Bootstrap Carousel](http://getbootstrap.com/javascript/#carousel).

Especially the auto-cycling part.



## Reading

[Eloquent Javascript - Data Structures: Objects and Arrays](http://eloquentjavascript.net/04_data.html)
