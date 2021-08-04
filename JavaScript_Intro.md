 # Introduction to JavaScript

**JavaScript**: (standardized version called ECMAScript) a cross-platform, object-oriented scripting language used to make webpages interactive (e.g., having complex animations, clickable buttons, popup menus, etc.) 
	It contains standard library of objects (Array, Date & Math) & Core set of language elements: 

*__Client-side JS__*: extends core language by supplying objects to control a browser and its *Document Object Model (DOM)*(Jquery): allows applicatioin to place elements on an HTML form and respond to user events, form input, page nav., mouse clicks.

*__Server-side JS__*: extends core language by supplying objects relevent to running JS on the server: *Node.js* allows application to communicate with a database, provide continuity info. from 1 invocation to another of the application, perform file Manipulation on a server. 

Although JavaScript is similar in ways to Java- they are fundamentally different! 

* JS supports a runtime system based on small number of data types representing numeric, Boolean, and string values. 

* Has a prototype-based model which provides dynamic inheritance - can vary for individual objects. 

* support functions without and special declarative requirements. 

* JS is a free-form language: You do not have to declare all variables, classes, and methods. Nor be concerned with implementing interfaces



# Input Output

**_Any text editor can be used_** 

You can either embed JS code directly inside HTML file or you can put a line in the HTML file thatg will include the external JS file. 
 *__<script></script>__* tag is how to embed: place when/where you want the JS to load in the HTML file. 

Basic Output: 

* alert(): will show a pop-up in the browser with the text.

* document.write(): function to change the content of the page

* console.log(): help developers debug code by viewing in the console. 

Inputs:

prompt(): Will show pop-up window with text provided as 1st param. and with a textbox user can fill in. When user presses "OK" the value in box will be returned by "prompt".

confirm(): this pop-up is not an input method but allows developer to ask yes or no. OK/yes = true, cancel/esc/no= false


# Variables of JS

**Variables**- are *containers* for storing data aka **VALUE**. They must be identified with **unique names (identifiers)** and are **case-sensitive (camelCase)** is what is used in JS. 

General rules for creating identifiers are:

1. can contain letters, digits, underscores and dollar signs.

2. MUST begin with a letter. can also begin with $  and _ .


Keywords:

* var: declares a value although does not have to be declared before use due to **hoisting** 

* let: decalres value, however, cannot be re-declared, must be declared before use and has a block scope. 

* const: declares value, cannot be re-declared or reassigned. also has block scope. 

( = ) is the **assignment operator**
