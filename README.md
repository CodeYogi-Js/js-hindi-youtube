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