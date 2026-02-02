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
`document.link`s returns a collection of all links in the document.

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

