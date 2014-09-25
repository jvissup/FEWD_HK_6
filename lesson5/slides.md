![General Assembly](../assets/images/ga.png)
# FEWD LESSON 5

## FEWD - Lab Session

### Instructors
Kevin Bluer & Jimmy Wong



## Agenda

* Homework
* Tools (Chrome & Web Developer)
	* Small Challenge
* CSS (Psuedo Classes)
* Hosting (using AWS S3)
* Lab
	* Pulling concepts together
	* Also we'll have plenty of time for individual Q&A



## Homework
<aside class="notes"></aside>

* Due in by midnight tonight
* Primary focus on layout
* Any difficulties (again there are NO silly questions)?
 	* Also we have an upcoming makeup session



## Development Tools



## Chrome Developer Tools
<aside class="notes"></aside>

* Who has used it during the development so far?
* The must-have tool in development!
* TODO get the Keyboard Shortcut in Muscle Memory



## Chrome Developer Tools

* Element Selection
* Device Emulator (Model, Resolution + Orientation, Sensors)
* Console
   * We’ll be seeing (and using) a lot more of this soon
   * Type “window” and expand
   * Type “window.alert(‘hello’)"



## Chrome Developer Tools - Elements Tab

* Selecting Elements
* You can change / try things on the fly
  * Google.com
  * Add a red border to every element
  * Refresh and it’s like it never happened
* Quick Challenge...



## Chrome Developer Tools - Challenges

* I'll say something and you have to use the developer tools to find it
* Go to google.com.hk



## 1. Width of the Google Logo



## 2. Border Color of the "Google Search" button



## 3. Padding of the outer "div" that contains the Google logo



## Chrome Developer Tools - Additional Tabs

* Network
  * Filters and Columns
  * Request and Response Headers
  * Preview
* Sources
  * All the assets that have been loaded by the page
* Timeline
  * Sequential listing of all the events



## Web Developer (Chrome Plugin)



## Web Developer (Chrome Plugin)

* Installation
  * Search "Chrome Web Developer"
  * Click "+" to add
* CSS Tab
  * Disable Styles
* Forms Tab
  * Populate Form
* Display Tab
  * ID and Classes



## CSS Zen Garden

* Last but not least (csszengarden.com)
* Great for both learning and inspiration
* Examples
   * http://www.csszengarden.com/221/
   * http://www.csszengarden.com/220/
   * http://www.csszengarden.com/219/



## CSS: Pseudo Classes



## CSS: Pseudo Classes
<aside class="notes"></aside>

###Used to add special effects to certain selectors, such as anchors:

* a:
* a:link
* a:visited
* a:focus
* a:hover
* a:active



## CSS: Pseudo Classes for Anchor
<aside class="notes"></aside>

###Additional examples

* first / last
* first-child / last-child
* before / after
* etc



## Let's take a look
<aside class="notes"></aside>

* http://codepen.io/kevinbluer/pen/mJkyx



## Uploading your sites (to AWS)
<aside class="notes"></aside>

* "You can host your entire static website on Amazon S3 for an inexpensive, highly available hosting solution that scales automatically to meet traffic demands."
* More info at http://aws.amazon.com/s3/
* Signup at https://aws.amazon.com/free
	* Note that it will need a credit-card so if that's an issue we can set you up with a directory after class
* Example at (with a custom domain): http://fewd.bluer.com/



## Setting Up S3
<aside class="notes"></aside>

* Once registered: https://console.aws.amazon.com/s3
* "Create bucket"
* Actions | Upload (try a page)
* Properties
	* Permission | Edit Bucket Policy (select the one from aws/aws.json and change the bucket name)
	* Static Website Hosting | Click Enable | Index Document as index.html



## Startup Matchmaker 
<aside class="notes"></aside>

![GeneralAssemb.ly](../assets/images/icons/exercise_icon_md.png)

* Look at the design [here](http://ga-students.github.io/FEWD_HK_4/lesson5/labs/startup_matchmaker/StartupMatchmaker.png) or /labs/startup_matchmaker/StartupMatchmaker.png



## Startup Matchmaker Approach
<aside class="notes"></aside>

* Start with a template
* Build up incrementally
	* Start with the header
	* Tagline
	* Section
	* Columns
	* Footer
* Tackle section-by-section (and then we'll do onscreen)



## Homework
<aside class="notes"></aside>

### Week3

* Begin Project Proposal + Wireframes (sketching or Balsamiq Mockups)
* Continue exploring the Startup Matchmaker
* [Front Row Video - How To Learn How To Code](https://generalassemb.ly/online/videos/programming-for-non-programmers-tech-speak/cinema?chapter=3)
* [Front Row Video - What Can You Do With JavaScript?](https://generalassemb.ly/online/videos/what-can-you-do-with-javascript/cinema?chapter=3)

<br>

### References
* [Front Row Video - Web Design For Non Designers](https://generalassemb.ly/online/videos/web-design-for-non-designers)
* The [Dash](https://dash.generalassemb.ly) Adventures