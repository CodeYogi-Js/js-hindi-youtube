# js-hindi-youtube
complete js



### **Dom in Javascript**
`DOM` is a JavaScript concept. DOM stands for `Document Object Model.`
It represents the HTML structure, where each element can be `manipulated (read, write, delete, and add)` using JavaScript. This is done with the help of the DOM concept.

`Window` in JavaScript is a `browser object.` It contains many things related to the browser environment.
Inside the `window object`, there is a `document object`.

The `document object is a part of the window object`.The `document object` gives access to the HTML content and allows JavaScript to `control and manipulate the web page`.

### **console.dir() and console.log()**
- `console.log()` is used to print values or messages in the console and is mainly used for debugging. It displays output in a readable format.

- `console.dir()` is used to display an object in detail, showing all its properties and methods. It is especially useful for inspecting DOM elements as JavaScript objects.

### **document.baseURI**
`document.baseURI` returns the base URL of the current document.
- It is a read-only property
- It shows the absolute URL
- Used to know from where the page is loaded

**example**
```js
console.log(document.baseURI);
```
**output**
```js
https://example.com/page.html
```

### **document.links**
`document.links` returns a collection of all links in the document.

- It includes only `<a>` and `<area>`elements
- Only links with href attribute are included
- It returns an HTMLCollection

**Example**
```js
console.log(document.links);
console.log(document.links.length);
console.log(document.links[0]);
```

**You can loop through it:**
```js
for (let link of document.links) {
  console.log(link.href);
}
```
*`document.baseURI` and `document.links` are document object properties that are used to perform specific tasks on the web page.*

### **Selecting elements**
1️⃣ `document.getElementById()` is a document object method used to select an HTML element by its id.
- It returns a single element
-  id must be unique
- If no element is found, it returns null

**Example**
```html
<div id="box"></div>
```
```js
const element = document.getElementById("box");
console.log(element);
```

2️⃣`document.getElementsByClassName()` is a document object method used to select HTML elements by their class name.
- It returns multiple elements
- The result is an HTMLCollection
- If no element is found, it returns an empty collection
- You must access elements using index

**Example**
```html
<p class="text">Hello</p>
<p class="text">World</p>
```
```js
const elements = document.getElementsByClassName("text");
console.log(elements);
console.log(elements[0]);
```

3️⃣`document.querySelector()` is a document object method used to select the first matching HTML element using a CSS selector.
- It returns only the first element
- Uses CSS selector syntax
- If no match is found, it returns null

**Example**
```js
document.querySelector("#box");
document.querySelector(".item");
document.querySelector("p");
```

4️⃣`document.querySelectorAll()` is a document object method used to select all matching HTML elements using a CSS selector.
- It returns multiple elements
- The result is a NodeList
- You can use forEach() directly

**Example**
```js
document.querySelectorAll(".item");
document.querySelectorAll("p");
```
```js
document.querySelectorAll("p").forEach(el => {
  console.log(el);
});
```

5️⃣`document.getElementsByTagName()` is a document object method used to select all HTML elements by tag name.
- It returns an HTMLCollection
- The collection is live
- Access elements using index

**Example**
```js
document.getElementsByTagName("p");
document.getElementsByTagName("div");
```
### ***HTMLCollection vs NodeList***


| Feature              | NodeList                                 | HTMLCollection                                             |
| -------------------- | ---------------------------------------- | ---------------------------------------------------------- |
| Type                 | A collection of nodes                    | A collection of HTML elements only                         |
| Includes             | Element nodes, text nodes, comment nodes | Only element nodes                                         |
| Excludes             | —                                        | Text nodes, comment nodes                                  |
| Commonly returned by | querySelectorAll(), childNodes           | children, getElementsByClassName(), getElementsByTagName() |

---



### ***Reading & changing content***
1️⃣`.id` is a property of an HTML element used to get or set the element’s id.
- Returns the id value as a string
- Can be used to read or change the id

**Example**
```html
<div id="box"></div>
```
```js
const el = document.getElementById("box");
console.log(el.id);      // "box"

el.id = "newBox";        // change id
```

2️⃣`.className` is a property of an HTML element used to get or set the element’s class value.
- Returns all classes as a string
- Used to read or overwrite classes

**Example**
```html
<div class="card active"></div>
```
```js
const el = document.querySelector(".card");
console.log(el.className);   // "card active"

el.className = "card disabled";
```
***❌ You cannot write element.class in JS, because class is a reserved keyword in JavaScript (used for class MyClass { ... } syntax).***

3️⃣`getAttribute()` is a method of an HTML element used to read the value of a specified attribute.
- Takes the attribute name as a string
- Returns the attribute value or null if not present

**Example**
```html
<a id="link" href="https://example.com">Example</a>
```
```js
const el = document.getElementById("link");
console.log(el.getAttribute("href")); // "https://example.com"
console.log(el.getAttribute("id"));   // "link
```

4️⃣`setAttribute()` is a method of an HTML element used to set or update the value of a specified attribute.
- Takes attribute name and value as arguments
- Can add new attributes or modify existing ones

**Example**

```js
const el = document.getElementById("link");
el.setAttribute("href", "https://google.com");
el.setAttribute("title", "Google Link");
```

5️⃣`.innerHTML` is a property used to get or set the HTML content inside an element.
* It reads **HTML + text**
* Can **add or replace HTML elements**
* Be careful with user input (security risk)
**Example**

```html
<div id="box"><b>Hello</b></div>
```

```js
const el = document.getElementById("box");
console.log(el.innerHTML);   // "<b>Hello</b>"

el.innerHTML = "<p>Hi</p>";
```
6️⃣`.innerText` is a property used to get or set the visible text content of an element.
* Returns **only visible text**
* Respects **CSS (display, visibility)**
* Ignores hidden text

**Example**
```js
console.log(el.innerText);
el.innerText = "Hello World";
```
7️⃣`.textContent` is a property used to get or set all text content of an element.**
* Returns **all text**, including hidden text
* Faster than `innerText`
* Does NOT care about CSS

**Example**

```js
console.log(el.textContent);
el.textContent = "Hello World";
```

---

> **`innerHTML`** is used to read or change HTML content inside an element.
> **`innerText`** is used to read or change only the visible text content.
> **`textContent`** is used to read or change all text content, including hidden text.


| Property      | Reads HTML | Reads Hidden Text | Affected by CSS |
| ------------- | ---------- | ----------------- | --------------- |
| `innerHTML`   | ✅          | ❌                 | ❌               |
| `innerText`   | ❌          | ❌                 | ✅               |
| `textContent` | ❌          | ✅                 | ❌               |
---
* `innerHTML` → **HTML + text**
* `innerText` → **visible text only**
* `textContent` → **all text**
---
### **style**
1️⃣`.style` is a property of an HTML element used to read or change inline CSS styles using JavaScript.
- It works with inline styles only
- CSS properties are written in camelCase
- Used to change styles dynamically

**Example**
```html
<div id="box"></div>
```
```js
const el = document.getElementById("box");

el.style.color = "red";
el.style.backgroundColor = "black";
el.style.fontSize = "20px";
```

2️⃣`.cssText` is a property of the `style` object used to get or set multiple inline CSS styles at once.
- It works with inline styles
- Styles are written as CSS text (string)
- Setting it overwrites all existing inline styles

**Example**
```js
const el = document.getElementById("box");

el.style.cssText = "color: red; background-color: black; font-size: 20px;";
```
**Reading styles**
```JS
console.log(el.style.cssText);
```

3️⃣`Using setAttribute("style")`

**Old-school but still valid.**
```js
el.setAttribute("style", "color: blue; font-size: 18px;");
```
**❌ Cons**
- Replaces previous inline styles
- Not recommended for modern apps

4️⃣`classList` is used to add, remove, toggle, and check CSS classes on an HTML element.

***VERY IMPORTANT*** `classList does NOT style anything itself. It only adds or removes class names. CSS does the styling.`
```html
<button id="btn">Click me</button>

<div id="box" class="box">
  I am a box
</div>
```
```css
.box {
  width: 150px;
  height: 150px;
  background: lightgray;
  margin-top: 10px;
}

.active {
  background: green;
}

.hidden {
  display: none;
}
```
```js
box.classList.add("active");//➕ add class

box.classList.remove("active");//➖ remove class

box.classList.toggle("active");//🔁 toggle class

box.classList.contains("active"); //❓ check class true / false
```
| Method       | Meaning                           |
| ------------ | --------------------------------- |
| `add()`      | Add a class                       |
| `remove()`   | Remove a class                    |
| `toggle()`   | Add if missing, remove if present |
| `contains()` | Check if class exists             |


5️⃣`setProperty()` is used to **change CSS variables using JavaScript**.
**
Think of CSS variables as **settings** and `setProperty()` as **changing those settings**.

**Example**
```css
:root {
  --main-color: blue;
}
```

```js
document.documentElement.style.setProperty("--main-color", "red");
```
This changes `--main-color` everywhere it’s used in CSS.

**Why use it?**

* Change **theme colors**, spacing, animation speed
* One JS change updates **many elements**
* Keeps **design in CSS**, logic in JS

**Simple rule:**

> Use ***setProperty()*** when you want **global style control**, not one element styling.

6️⃣`getComputedStyle()` is used to **read the final CSS styles of an element**.
It shows the **actual value** after CSS, classes, media queries, and browser defaults are applied.
**Example**
```js
const styles = window.getComputedStyle(box);

console.log(styles.color);
console.log(styles.fontSize);
```
**Why use it?**

* Check styles set by **CSS, not JS**
* Read **dynamic or responsive values**
* Useful for **animations, calculations, debugging**

**Simple rule:**

> Use `getComputedStyle()` when you want to **read styles**, not change them.

### **DOM tree navigation**
1️⃣`.children` is a property used to get all child elements of a parent element.
* Returns **only element nodes** (HTML elements)
* Ignores **text nodes and comments**
* Returns an **HTMLCollection**
* The collection is **live**

**Example**

```html
<ul id="list">
  <li>One</li>
  <li>Two</li>
</ul>
```

```js
const parent = document.getElementById("list");

console.log(parent.children);     // HTMLCollection
console.log(parent.children[0]);  // <li>One</li>
console.log(parent.children.length);
```

> **`.children`** is a property used to access all child elements of a parent element. It returns an HTMLCollection containing only element nodes.

**Important interview point ⚠️**

* `.children` ❌ does NOT include text nodes
* `.childNodes` ✅ includes text + comments + elements

---

2️⃣`.firstElementChild` is a property used to get the first child element of a parent element.**

* Returns **only an element node**
* Ignores text and comment nodes
* Returns **null** if no child exists

**Example**

```js
const parent = document.getElementById("list");
console.log(parent.firstElementChild);
```

---



3️⃣`.lastElementChild` is a property used to get the last child element of a parent element.

* Returns **only an element node**
* Ignores text and comment nodes
* Returns **null** if no child exists
 **Example** 

```js
console.log(parent.lastElementChild);
```

> **`firstElementChild`** returns the first child HTML element of a parent element.
> **`lastElementChild`** returns the last child HTML element of a parent element.
---
4️⃣`.parentElement` is a property used to get the parent HTML element of a given element. 
* Returns **only an element node**
* If no parent element exists, it returns **null**
* Skips non-element nodes

 **Example**

```html
<div id="box">
  <p id="text">Hello</p>
</div>
```

```js
const child = document.getElementById("text");
console.log(child.parentElement); // <div id="box">
```

---



> **`.parentElement`** is a property used to access the parent HTML element of a given element.

**Important interview point ⚠️** 

* `.parentElement` → returns **only element**
* `.parentNode` → may return **document or text node**
---
5️⃣`.nextElementSibling` is a property used to get the next sibling HTML element of an element.

* Returns **only element nodes**
* Skips text and comment nodes
* Returns **null** if no next element exists

**Example**

```js
const item = document.querySelector(".item");
console.log(item.nextElementSibling);
```

---



6️⃣`.previousElementSibling` is a property used to get the previous sibling HTML element of an element.

* Returns **only element nodes**
* Skips text and comment nodes
* Returns **null** if no previous element exists

**Example** 

```js
console.log(item.previousElementSibling);
```

**Interview-ready explanation (polished)**

> **`nextElementSibling`** returns the next HTML element at the same level.
> **`previousElementSibling`** returns the previous HTML element at the same level.

---

**One-line memory trick 🧠**

* `nextElementSibling` → **move right**
* `previousElementSibling` → **move left**

---

7️⃣`.childNodes` is a property used to get all child nodes of a parent node.

* Returns **all types of nodes**
  * element nodes
  * text nodes (spaces, line breaks)
  * comment nodes
* Returns a **NodeList**
* The NodeList is **live** (in most browsers)

**Example**

```html
<div id="box">
  <p>Hello</p>
  <!-- comment -->
</div>
```

```js
const parent = document.getElementById("box");

console.log(parent.childNodes);
console.log(parent.childNodes[0]); // text node (newline/space)
```

---

**Interview-ready explanation (polished)**

> **`.childNodes`** is a property used to access all child nodes of a parent node, including elements, text nodes, and comments.

---

## Important interview difference ⚠️

| Property     | Includes text nodes | Returns        |
| ------------ | ------------------- | -------------- |
| `children`   | ❌ No                | HTMLCollection |
| `childNodes` | ✅ Yes               | NodeList       |

---

**One-line memory trick 🧠**

> **`.childNodes` → everything inside (elements + text + comments)**

---
## **Creating & removing elements**
1️⃣**`document.createElement()` is a method used to create a new HTML element using JavaScript.**

* It only **creates** the element
* It does NOT add it to the page automatically
* You must insert it using methods like `append`, `appendChild`, etc.

**Example**

```js
const div = document.createElement("div");
div.innerText = "Hello World";

document.body.appendChild(div);
```

---

**Interview-ready explanation (polished)**

> **`document.createElement()`** is a DOM method used to create a new HTML element dynamically. The created element must be added to the DOM manually to appear on the page.

---

**Important interview point ⚠️**

* `createElement` → creates element
* `appendChild` / `append` → inserts element

2️⃣`appendChild()` is a DOM method used to add a node as the last child of a parent element.

* Adds the element **inside** the parent
* Moves the node if it already exists
* Returns the appended node

**Example**

```js
const parent = document.getElementById("box");
const div = document.createElement("div");

parent.appendChild(div);
```

**Interview line**

> `appendChild()` is used to add a node as the last child of a parent element.

---

3️⃣`document.createTextNode()` is a DOM method used to create a text node.**

* Used to add **text content safely**
* Prevents HTML injection
* Text must be inserted using `appendChild()`

**Example**

```js
const text = document.createTextNode("Hello World");
div.appendChild(text);
```
**Combined example (very interview-friendly)**

```js
const div = document.createElement("div");
const text = document.createTextNode("Hello");

div.appendChild(text);
document.body.appendChild(div);
```

## Interview-ready explanation (polished)

> **`appendChild()`** is used to insert a node as the last child of a parent element.
> **`createTextNode()`** is used to create a text node that can be added to the DOM.


## One-line memory trick 🧠

* `createTextNode` → **create text**
* `appendChild` → **attach node**

4️⃣`append()` is a DOM method used to add nodes or text at the end of a parent element.

* Can add **multiple nodes**
* Can add **text directly**
* Does NOT return anything
* More flexible than `appendChild()`

**Example**

```js
const parent = document.getElementById("box");

const div = document.createElement("div");
div.innerText = "Hello";

parent.append(div, " World");
```
**Interview-ready explanation (polished)**
> **`append()`** is a DOM method used to insert one or more nodes or text as the last child of a parent element.


## Important interview difference ⚠️

| Method          | Text allowed | Multiple nodes | Return    |
| --------------- | ------------ | -------------- | --------- |
| `appendChild()` | ❌            | ❌              | Node      |
| `append()`      | ✅            | ✅              | undefined |

> **append → add many, add text**
---
### **Edit and remove**

 `.outerHTML` is a property used to get or set the entire HTML of an element, including the element itself. 

* Reads **HTML + the element itself**
* Setting it **replaces the whole element**
* Works for **reading and changing content**

**Example** 

```html
<div id="box"><p>Hello</p></div>
```

```js
const el = document.getElementById("box");

console.log(el.outerHTML);
// <div id="box"><p>Hello</p></div>

el.outerHTML = "<section>New Content</section>";
```

📌 After setting `outerHTML`, the **original element is removed** from the DOM.

---

## Interview-ready explanation (polished)

> **`.outerHTML`** is a property used to read or replace the complete HTML of an element, including the element itself.

---

## Important interview difference ⚠️

| Property    | Includes element itself |
| ----------- | ----------------------- |
| `innerHTML` | ❌ No                    |
| `outerHTML` | ✅ Yes                   |

---

**One-line memory trick 🧠**

> **innerHTML → inside only**
> **outerHTML → inside + element**

---
2️⃣ `replaceWith()` is a DOM method used to replace an element with another node or text.** 

* Replaces the **element itself 
* Can replace with **element, text, or multiple nodes**
* The original element is **removed from the DOM**
* Modern and cleaner than `replaceChild()`

**Example **

```js
const oldEl = document.getElementById("old");

const newEl = document.createElement("div");
newEl.innerText = "New Element";

oldEl.replaceWith(newEl);
```

 **Replace with text **

```js
oldEl.replaceWith("Hello World");
```

 **Interview-ready explanation (polished)** 

> **`replaceWith()`** is a DOM method used to replace an existing element with a new element or text.

---

**mportant interview comparison ⚠️** 

| Method          | What it replaces  |
| --------------- | ----------------- |
| `innerHTML`     | Content inside    |
| `outerHTML`     | Element + content |
| `replaceWith()` | Element itself    |

---

**One-line memory trick 🧠**

> **replaceWith → remove old, insert new**

---
3️⃣`remove()` is a DOM method used to remove an element from the document.** 

* Removes the **element itself**
* No parent reference needed
* Modern and simple
* The element is removed permanently from the DOM

**Example**

```js
const el = document.getElementById("box");
el.remove();
```

---

**Interview-ready explanation (polished)**

> **`remove()`** is a DOM method used to delete an element directly from the DOM.

---

## Important interview comparison ⚠️

| Method          | Needs parent |
| --------------- | ------------ |
| `remove()`      | ❌ No         |
| `removeChild()` | ✅ Yes        |

---

**One-line memory trick 🧠**

> **remove → delete element directly**



## **Events (VERY important)**
1️⃣`addEventListener()` is a method used to attach an event handler to an element.

* It listens for a **specific event** (click, input, keydown, etc.)
* Executes a **callback function** when the event happens
* Allows **multiple event listeners** on the same element

**Syntax**

```js
element.addEventListener("event", function);
```

### Example

```html
<button id="btn">Click me</button>
```

```js
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  console.log("Button clicked");
});
```


2️⃣`event.target` refers to the element on which the event actually occurred.

* It tells **which element triggered the event**
* Very useful in **event delegation**

**Example**

```js
btn.addEventListener("click", function (event) {
  console.log(event.target);      // <button id="btn">
  console.log(event.target.id);   // "btn"
});
```

---

**Combined example (important 🔥)**

```html
<ul id="list">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
</ul>
```

```js
const list = document.getElementById("list");

list.addEventListener("click", function (event) {
  console.log(event.target);        // clicked <li>
  event.target.style.color = "red";
});
```

👉 Even though the event is added to `<ul>`,
👉 `event.target` tells **which `<li>` was clicked**.

---



3️⃣`event.currentTarget` refers to the element on which the event listener is attached.

* It is the **element handling the event**
* Always the same inside that listener
* Different from `event.target`

**Simple example**
```html
<ul id="list">
  <li>One</li>
  <li>Two</li>
</ul>
```

```js
const list = document.getElementById("list");

list.addEventListener("click", function (event) {
  console.log(event.target);        // <li> (clicked element)
  console.log(event.currentTarget); // <ul> (listener element)
});
```

---

## Key difference (🔥 interview point)

| Property              | Refers to                       |
| --------------------- | ------------------------------- |
| `event.target`        | Element that was clicked        |
| `event.currentTarget` | Element with the event listener |

---

## Interview-ready explanation (polished)

> **`event.currentTarget`** refers to the element to which the event handler is attached, while **`event.target`** refers to the element that triggered the event.

---


4️⃣`removeEventListener()` is used to remove an event listener that was previously added with `addEventListener()`.

* It stops the event from working
* The **same function reference** must be used
* Anonymous functions ❌ cannot be removed

---

## Basic example

```html
<button id="btn">Click</button>
```

```js
const btn = document.getElementById("btn");

function handleClick() {
  console.log("Button clicked");
}

btn.addEventListener("click", handleClick);

// remove event
btn.removeEventListener("click", handleClick);
```

---

## Important interview point ⚠️

❌ This will NOT work:

```js
btn.addEventListener("click", function () {
  console.log("Hi");
});

btn.removeEventListener("click", function () {
  console.log("Hi");
});
```

✅ Because both functions are **different references**.

> **addEventListener → start listening**
> **removeEventListener → stop listening**

---
**`event.preventDefault()` is used to stop the browser’s default behavior.**

* Commonly used in **forms**
* Prevents page reload on submit
* Gives JavaScript full control

### Example

```html
<form id="form">
  <input type="text" id="name">
  <button type="submit">Submit</button>
</form>
```

```js
const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Form submitted without reload");
});
```

---

## `.value`

**`.value` is a property used to get or set the value of input, textarea, or select elements.**

### Example

```js
const input = document.getElementById("name");

console.log(input.value); // read value
input.value = "Babu";     // set value
```

---

## `parseInt()`

**`parseInt()` is a JavaScript function used to convert a string into an integer number.**

* Removes non-number characters
* Returns `NaN` if conversion fails

### Example

```js
const num = "25";
console.log(parseInt(num)); // 25
```

With input value:

```js
const age = parseInt(input.value);
```

---

## Combined real example (🔥 interview-friendly)

```html
<form id="form">
  <input type="text" id="age">
  <button>Submit</button>
</form>
```

```js
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const ageValue = document.getElementById("age").value;
  const age = parseInt(ageValue);

  console.log(age);
});
```

---

## Interview-ready explanation (polished)

> **`event.preventDefault()`** stops the default browser behavior.
> **`.value`** is used to read or set input values.
> **`parseInt()`** converts string values into integer numbers.

---

## One-line memory trick 🧠

* `preventDefault()` → **stop browser**
* `.value` → **get input**
* `parseInt()` → **string → number**


If you’re asking **“how many parse functions exist in JavaScript?”** — here’s the clean, correct answer 👇

---

## JavaScript has **3 main “parse” functions**

### 1️⃣ `parseInt()`

👉 Parses an **integer** from a string

```js
parseInt("10px", 10); // 10
```

---

### 2️⃣ `parseFloat()`

👉 Parses a **decimal (floating-point) number** from a string

```js
parseFloat("10.75px"); // 10.75
```

---

### 3️⃣ `JSON.parse()`

👉 Parses **JSON string → JavaScript object**

```js
JSON.parse('{"name":"Babu","age":22}');
```

---

## Quick comparison 🧠

| Function       | Purpose                 |
| -------------- | ----------------------- |
| `parseInt()`   | String → Integer        |
| `parseFloat()` | String → Decimal        |
| `JSON.parse()` | JSON string → JS object |

---


# add later

## `setTimeout()`

**`setTimeout()` runs a function once after a specified delay.**

* Executes **only one time**
* Delay is in **milliseconds**
* Returns a **timer ID**

### Example

```js
setTimeout(() => {
  console.log("Runs once after 2 seconds");
}, 2000);
```

---

## `setInterval()`

**`setInterval()` runs a function repeatedly after a specified interval.**

* Executes **again and again**
* Interval is in **milliseconds**
* Returns a **timer ID**

### Example

```js
setInterval(() => {
  console.log("Runs every 1 second");
}, 1000);
```

---

## Clearing timers (important 🔥)

```js
const timeoutId = setTimeout(() => {
  console.log("Hello");
}, 3000);

clearTimeout(timeoutId);
```

```js
const intervalId = setInterval(() => {
  console.log("Tick");
}, 1000);

clearInterval(intervalId);
```

---

## Interview-ready explanation (polished)

> **`setTimeout()`** is used to execute a function once after a delay.
> **`setInterval()`** is used to execute a function repeatedly at fixed intervals.

---

## One-line memory trick 🧠

> **setTimeout → once later**
> **setInterval → repeat always**

---

### Verdict ✅

✔ Concept — **correct**
✔ Usage — **real-world ready**
✔ Interview-safe — **yes**

If you want next:

* `requestAnimationFrame`
* `clearTimeout` vs `clearInterval`
* JS event loop (🔥 interview topic)

Just say 😄
