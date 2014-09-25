![General Assembly](../assets/images/ga.png)
# FEWD LESSON 8

## FEWD - Functions

### Instructors
Kevin Bluer & Jimmy Wong



## Agenda
<aside class="notes"></aside>

* Review Temperature Converter
* Functions
* Cash Register
* Anonymous functions
* Rock Paper Scissors
* Homework



## Quick Review: Temperature Converter



## Functions
<aside class="notes"></aside>

* What is a function?
  * A well defined task
  * Reuseable
  * A function could return a value for further process
* Why we need a function?
  * The same task could be shared in different parts of the program
  * Scalable and easier to maintain
  * Treat function as a blackbox to make the code cleaner



## Functions
<aside class="notes"></aside>

**Syntax**

```
function functionName(arg1, arg2) {
  // Body of function
}

```

* keyword: _function_ (just like _var_ when declaring variable)
* function name: functionName
* input arguments: arg1, arg2 (Mutiple values are allowed)
* body of function: the code inside {} is executed when the function is called (similar to the {} in "if" and "for" statement.)



## Functions
<aside class="notes"></aside>

**Example**

```
function helloWorld() {
  console.log("Hello World");
}
```

* How to run this function in console?
  * helloWorld; 
  * OR
  * helloWorld();
* The first is a _reference_ the latter a function _call_



## Functions
<aside class="notes"></aside>

**Another example**

```
function addAndPrint(num1, num2) {
  var sum = num1 + num2;
  console.log(sum);
}
```



## Functions
<aside class="notes"></aside>

**The Return**

```
function functionName(arg1, arg2) {
  // Body of function

  return returnValue;
}

```

* keyword: function, return
* function name: functionName
* input arguments: arg1, arg2 (Mutiple values are allowed)
* body of fucntion: the code inside {} is executed when the function is called (similar to the {} in "if" and "for" statement.)
* return value: returnValue



## Functions
<aside class="notes"></aside>

**Example**

```
function add(num1, num2) {
  var sum = num1 + num2;
  return sum;
}
```



## Functions
<aside class="notes"></aside>

**Real life example** ([let's review](http://codepen.io/kevinbluer/pen/sKlAe))

```
function calculateTax(income, allowances) {
  var tax = 0;
  var taxRate = [0.02, 0.07, 0.12, 0.17];

  income = income - allowances;

  if (0 < income && income <= 40000) {
    tax = income * taxRate[0];
  } else if (40000 < income && income <= 80000) {
    tax = 40000 * taxRate[0] + (income - 40000) * taxRate[1];
  } else if (80000 < income && income <= 120000) {
    tax = 40000 * taxRate[0] + 40000 * taxRate[1] + (income - 80000) * taxRate[2];
  } else if (120000 < income) {
    tax = 40000 * taxRate[0] + 40000 * taxRate[1] + 40000 * taxRate[2] + (income - 120000) * taxRate[3];
  } else {
    console.log("Invalid input")
  }

  return tax;
}

```



# Events



## Events
<aside class="notes"></aside>

### [Javascript events](http://101.lv/learn/JSweek/ch5.htm) are action taken by the user on the DOM.

Example

* click
* change
* mouseover
* submit



## Events
<aside class="notes"></aside>

We can add a listner to an event and attach a function on it.

Example

```document.getElementById('link').onclick = linkIsClicked;```

* .onclick()
* .onchange()
* .onmouseover()
* .onsubmit()



## Events
<aside class="notes"></aside>

If you want to get more details about the event, add the event argument in the implementation.

```
document.getElementById('link').onclick = linkIsClicked;

function linkIsClicked(event) {
  console.log(event);
}
```



## Events
<aside class="notes"></aside>

Sometimes we may want to stop the default behavior is an event.

```
document.getElementById('link').onclick = linkIsClicked;

function linkIsClicked(event) {
  event.preventDefault();
}
```



# Cash Register
<aside class="notes"></aside>

![GeneralAssemb.ly](../assets/images/icons/exercise_icon_md.png)

* /labs/cash_register



# Anonymous function
<aside class="notes"></aside>

Sometime we could write a function without given it a name.

Example:

```
<button id="red">Red</button>
<button id="green">Green</button>
<button id="blue">Blue</button>
```



# Normal functions
<aside class="notes"></aside>

```
document.getElementById('red').onclick = updateBgRed;
document.getElementById('green').onclick = updateBgGreen;
document.getElementById('blue').onclick = updateBgBlue;

function updateBgRed() {
  document.getElementsByTagName('body')[0].style.backgroundColor = "red";
}

function updateBgGreen() {
  document.getElementsByTagName('body')[0].style.backgroundColor = "green";
}

function updateBgBlue() {
  document.getElementsByTagName('body')[0].style.backgroundColor = "blue";
}
```



# Anonymous function
<aside class="notes"></aside>

Using anonymous function can save some codes.

```
document.getElementById('red').onclick = function() { updateBg("red") };
document.getElementById('green').onclick = function() { updateBg("green") };
document.getElementById('blue').onclick = function() { updateBg("blue") };

function updateBg(color) {
  document.getElementsByTagName('body')[0].style.backgroundColor = color;
}
```



# Rock Paper Scissors
<aside class="notes"></aside>

![GeneralAssemb.ly](../assets/images/icons/exercise_icon_md.png)

* Use the "obfuscated" version as a reference
* Program in pairs (XP Programming Style)
* Any questions on anything, just ask!
* Tip: the homework will be to complete RPS



# Homework
<aside class="notes"></aside>

* Complete Rock Paper Scissors
* Ask questions...