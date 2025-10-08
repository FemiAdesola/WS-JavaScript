# Workshop 1

## Human to Dog Years Convertion
> This is a simple JavaScript function that can converts a person's age into "dog years."  
For this example, **A human year = 7 dog years**.
<details>
<summary>👉Click to expand and see the details</summary>
<details>
<summary>👉Click to expand and see the details</summary>

### Usage

#### For HTML
+ Write right click **WS1-JavaScript.html** file
+ Choose **Open with Live server** if you have it.
+ Press <strong>F12</strong> or right-click, 
    + Choose <strong>Inspect</strong> , 
        + then choose <strong>Console</strong> to see the output.</p>

```javascript
// Import the function or paste the function into the project
function humanToDogYears(age) {
  if (isNaN(age) ) {
    return "";
  } else if (age <=0) {
    return "invalid and it cannot be calculated, please provide a valid non-negative number for age and number greater than 0.";
  }

  return age * 7;
}
```
###
```js
// Testing the function:
const age = 3;
console.log("When the age of human is " + age + ", a dog age is " + humanToDogYears(age) + " years."); // Output: 77
```

### Features

+ Converts human years into dog years.

+ Handles invalid input (non-numbers or negative values).

+ Works with both whole numbers and decimals.

### Output Example

| Human Age | Dog Age (Years) |
| --------- | ------- |
| 1         | 7       |
| 2.5       | 17.5    |
| 10        | 70      |
</details>

---
## Debugging Challenge – Exercise 2
> This exercise demonstrates debugging a small piece of JavaScript code embedded in an HTML file. The original code contained several errors that caused it to fail. The goal was to **find and fix** these issues.
<details>
<summary>👉Click to expand and see the details</summary>

### Check fixed Code
[Debugging.js](/WS1-JavaScript/Debugging.js)

### What Was Fixed?
+ Semicolons
  + Added missing semicolons (;) for clarity and consistency
+ Undefined variable Joe
  + Changed let l = Joe; to let l = "Joe"; (make it string).
+ String syntax error
  + Missing closing quotation mark around j. 
    + Fixed console.log("j); to console.log("j");, 
+ Array loop out of range
  + Changed loop condition from i <= 3 to i < arr.length to avoid undefined.
</details>

</details>
<br>
<br>

# Workshop 2: Hands-On DOM and BOM Exercises

> This project contains a series of JavaScript exercises designed to practice **DOM (Document Object Model)** and **BOM (Browser Object Model)** manipulation in a web page. Each exercise demonstrates different aspects of interacting with the browser and dynamically updating the page content.
<details>
<summary>👉Click to expand and see the details</summary>

## Files

* `WS2-JavaScript-DOM-BOM.html` – The main HTML file that includes the JavaScript.
* `WS2-JavaScript-DOM-BOM.js` – Contains all five exercises in sequence.

## How to Run

1. Download the files to your local machine.
2. Open `WS2-JavaScript-DOM-BOM.html` in any modern web browser.
3. Follow the on-screen prompts (`confirm` dialogs) to proceed through each exercise.
4. The exercises run in order, and some require user interaction to continue.




---

## Exercises Overview
> Each exercise wait for the user to click “OK” before moving to the next one

<details>
<summary>👉Click to expand and see the details</summary>

### **Exercise 1: Document Write**

* Writes a message to the page:

  ```
  Hello, this is my first DOM manipulation exercise.
  ```
* Demonstrates basic DOM writing using `document.write()`.

### **Exercise 2: Repeating Text**

* Prompts the user to continue with a `confirm` dialog.
* Writes a line of text to the page 30 times using a loop:

  ```
  This is line 1
  This is line 2
  ...
  This is line 30
  ```
* Shows how to dynamically create and append elements to the document.

### **Exercise 3: Conditional Browser Redirection**

* Prompts the user to continue.
* Checks the user's browser using `navigator.appName`.
* If the browser is Mozilla (`Netscape`), opens a media page in a new tab:

  * `https://www.mozilla.org/en-GB/`
* Otherwise, displays a message indicating the browser is not Mozilla.

### **Exercise 4: Confirmation Dialog**

* Prompts the user to continue.
* Shows a confirm dialog asking: `"Are you a student?"`.
* Displays the user's response (`true` or `false`) on the page.
* Logs the result in the console.

### **Exercise 5: Random Image Display**

* Prompts the user to continue.
* Selects a random image from a predefined array:

  * `https://placehold.co/600x400/000000/FFFFFF`
  * `https://placehold.co/600x400/FF0000/000000`
  * `https://placehold.co/600x400/008000/FFFFFF`
* Displays the selected image on the page.

---



## Notes

* Some exercises rely on user confirmation (`confirm`) to proceed.
* `document.write()` is used for demonstration purposes but is **deprecated** in modern web development. Consider using DOM manipulation methods (`appendChild`, `textContent`) for production code.
---
</details>
</details>

<br>
<br>

# Workshop 3: JavaScript Events
> This demonstrates **basic JavaScript event handling** in HTML, using both inline event attributes and modern event listeners. Each HTML file shows different ways to interact with events like `onclick`, `onmouseover`, `onfocus`, and more.

<details>
<summary>👉Click to expand and see the details</summary>

## Files and Explanations

### 1. **Named Functions for Events**
**File:** ` HTML_Events_Functions.html`  
- Uses a **named function** `showBrowserInfo()` to display browser details using the **`navigator` object**.  
- Demonstrates `navigator.appCodeName` and `navigator.appName`.  
- Triggered when clicking a button.  

---

### 2. **Browser Compatibility**
**File:** `HTML_Browser_Compatibility.html`  
- Shows how to attach an event handler using **`addEventListener`** (modern browsers) and **`attachEvent`** (older IE).  
- Button click displays `"Compatible!"` message, updating on repeated clicks.  
- Demonstrates **cross-browser compatibility checks**.  

---

### 3. **Dynamic Listeners**
**File:** `HTML_Dynamic_Event_Listeners.html`  
- Adds a click listener dynamically to an `<h1>` element.  
- Alerts `"Hello World!"` when clicked.  
- Includes a **Remove Listener** button that removes the event listener using `removeEventListener`.  

---

### 4. **HTML Event Attributes**
**File:** `HTML_Events_Attributes.html`  
- Demonstrates inline event attributes:  
  - `onsubmit` on a form (prevents reload).  
  - `onmouseover` / `onmouseout` on a button.  
  - `onclick` and `onfocus` on inputs.  
- Shows simple event handling without JavaScript functions.  

---

### 5. **Basic HTML Events**
**File:** `HTML_Events_Common.html`  
- Demonstrates:  
  - `window.onload` event.  
  - `onclick` on a button.  
  - `onchange` on an input field.  
  - `ondblclick` on a paragraph.  
  - `onmouseover` / `onmouseout` for hover effects.  
- Shows **difference between inline handlers and JavaScript functions**.  

---

### 6. **Multiple Listeners**
**File:** `HTML_Multiple_Dynamic_Event_Listeners.html`  
- Shows the difference between:  
  - Assigning multiple `onclick` functions (only the last one runs).  
  - Using `addEventListener` to attach multiple event handlers (all run).  
- Example prints `"Third!"` and `"Fourth!"` messages to the page.  

---

### 7. **Common Events List**
**File:** `HTML_Using_Common_JS_Events.html`  
- Demonstrates several commonly used events:  
  - `onload` (page load alert).  
  - `onchange` on a dropdown.  
  - `onmouseover` / `onmouseout` on an image (changes source).  
  - `onkeydown` on an input (alerts on every key press).  
- Good overview of **frequently used DOM events**.  

---

## How to Use
1. Save the `.html` files.  
2. Open them in your browser or with **Live Server (VS Code)**.  
3. Interact with elements (click, hover, type, etc.) to trigger events.  

---

## Key Concepts Covered
- Inline event attributes (`onclick`, `onfocus`, `onmouseover`, etc.)  
- `window.onload` to run code after page loads  
- Named vs anonymous functions in event handling  
- Adding/removing listeners with `addEventListener` and `removeEventListener`  
- Browser compatibility with `attachEvent` (legacy IE)  
- Common events: `onclick`, `ondblclick`, `onchange`, `onmouseover`, `onmouseout`, `onkeydown`  

---
</details>
<br>
<br>

# Workshop 4: JavaScript DOM Scripting
> This demonstrates a series of simple HTML and JavaScript examples that demonstrate **core DOM manipulation techniques** and the creation of a basic **Single Page Application (SPA)** using pure JavaScript — without any external libraries or frameworks.

<details>
<summary>👉Click to expand and see the details</summary>

## Files and Explanations


### 1. **DOM Introduction (`DOM_API.html`)**
Demonstrates how to:
- Access HTML elements using `getElementById` and `getElementsByClassName`.
- View content in the browser console.

**Key Concepts:**
```js
document.getElementById("main-title");
document.getElementsByClassName("intro-text");
```

---
### 2. **Finding Elements (`HTML_Finding_Elements.html`)**
Shows various methods to locate elements in the DOM:
- `getElementById`
- `getElementsByClassName`
- `getElementsByTagName`
- `querySelector`
- `querySelectorAll`

**Example:**
```js
const allListItems = document.querySelectorAll("ul li");
```

---
### 3. **Changing Content & Attributes (`Changing_Content_and_Attributes.html`)**
Demonstrates how to dynamically modify:
- Text and HTML content (`textContent`, `innerHTML`)
- Attributes (`setAttribute` for `src`, `href`, etc.)

**Example:**
```js
imageElement.setAttribute("src", "https://picsum.photos/id/237/150/150");
linkElement.textContent = "Visit W3Schools";
```

---
### 4. **Dynamic Element Creation (`Creating_and_Adding_Elements.html`)**
Shows how to create new elements on the fly:
- Create new paragraphs or list items using `createElement()`
- Append them to the document using `appendChild()`

**Example:**
```js
const paragraph = document.createElement("p");
paragraph.textContent = "This is a new paragraph!";
document.body.appendChild(paragraph);
```

---
### 5. **Dynamic Styles & Animations (`Manipulate_CSS_properties.html`)**
Demonstrates how to:
- Toggle CSS classes dynamically with JavaScript.
- Apply simple CSS animations using `@keyframes`.

**Example:**
```js
paragraph.classList.toggle("highlight");
fadeHeading.classList.add("fade-in");
```

---
### 6. **Single Page Application (SPA) (`Web_Pages_and_SPA.html`)**
A complete working example of a **Single Page Application** built with vanilla JavaScript.

**Features:**
- One HTML file acting as an entire app.
- Navigation between “Home”, “About”, and “Contact” sections **without reloading**.
- Uses DOM manipulation to dynamically replace content.

**Core Logic:**
```js
const pages = {
  home: `<h2>Home</h2><p>Welcome to our SPA!</p>`,
  about: `<h2>About</h2><p>This app uses DOM manipulation to change content dynamically.</p>`,
  contact: `<h2>Contact</h2><p>Reach us at info@example.com</p>`
};

function navigate(page) {
  content.innerHTML = pages[page];
}
```
</details>