# js-hindi-youtube
complete js



### **Dom in Javascript**
`DOM` is a JavaScript concept. DOM stands for `Document Object Model.`
It represents the HTML structure, where each element can be `manipulated (read, write, delete, and add)` using JavaScript. This is done with the help of the DOM concept.

`Window` in JavaScript is a `browser object.` It contains many things related to the browser environment.
Inside the `window object`, there is a `document object`.

The `document object is a part of the window object`.The `document object` gives access to the HTML content and allows JavaScript to `control and manipulate the web page`.

### **console.dir()**
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