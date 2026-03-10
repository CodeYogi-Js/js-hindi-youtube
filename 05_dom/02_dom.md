## Event Propagation

Event propagation is the process by which an event travels through the Document Object Model (DOM) when it is triggered.

When a user performs an action such as clicking an element, the event does not stay only on that element. Instead, it moves through different phases in the DOM hierarchy.

There are three phases of event propagation:

1. Capturing phase
2. Target phase
3. Bubbling phase

---

## Event Capturing

Event capturing is the first phase of event propagation.

In this phase, the event travels from the top of the DOM tree down to the target element.

The flow starts from:

document → html → body → parent elements → target element

Capturing happens when the third parameter of `addEventListener()` is set to `true`.

---

## Target Phase

The target phase occurs when the event reaches the actual element that triggered the event.

This is the element on which the user performed the action (for example, clicking a button).

---

## Event Bubbling

Event bubbling is the final phase of event propagation.

In this phase, the event travels from the target element back up to the top of the DOM tree.

The flow is:

target element → parent elements → body → html → document

By default, most events in JavaScript follow the bubbling phase.

---

## Conclusion

Event propagation describes how an event moves through the DOM in three phases: capturing, target, and bubbling.

Capturing moves from parent to child.
Bubbling moves from child to parent.

Understanding event propagation is important for handling events properly, especially when working with nested elements or implementing event delegation.
Here is the **theory-type answer** you can write in exams or interviews 👇

---

## Event Propagation

Event propagation is the process by which an event travels through the Document Object Model (DOM) when it is triggered.

When a user performs an action such as clicking an element, the event does not stay only on that element. Instead, it moves through different phases in the DOM hierarchy.

There are three phases of event propagation:

1. Capturing phase
2. Target phase
3. Bubbling phase

---

## Event Capturing

Event capturing is the first phase of event propagation.

In this phase, the event travels from the top of the DOM tree down to the target element.

The flow starts from:

document → html → body → parent elements → target element

Capturing happens when the third parameter of `addEventListener()` is set to `true`.

---

## Target Phase

The target phase occurs when the event reaches the actual element that triggered the event.

This is the element on which the user performed the action (for example, clicking a button).

---

## Event Bubbling

Event bubbling is the final phase of event propagation.

In this phase, the event travels from the target element back up to the top of the DOM tree.

The flow is:

target element → parent elements → body → html → document

By default, most events in JavaScript follow the bubbling phase.

---



## `insertAdjacentElement()`

👉 Inserts an **existing element** at a specific position **relative to another element**

### Syntax

```js
element.insertAdjacentElement(position, newElement);
```

### Positions (VERY important)

| Position        | Meaning              |
| --------------- | -------------------- |
| `"beforebegin"` | before the element   |
| `"afterbegin"`  | inside → first child |
| `"beforeend"`   | inside → last child  |
| `"afterend"`    | after the element    |

---

### Example

```html
<div id="box">
  <p>Old</p>
</div>
```

```js
const box = document.getElementById("box");
const span = document.createElement("span");
span.textContent = "New";
```

```js
box.insertAdjacentElement("beforeend", span);
```

**Result**

```html
<div id="box">
  <p>Old</p>
  <span>New</span>
</div>
```

---

## `after()`

👉 Inserts **after the element (as a sibling)**

### Syntax

```js
element.after(nodeOrText);
```

---

### Example

```js
box.after("After Box");
```

**Result**

```html
<div id="box">...</div>
After Box
```

---

## Key differences 🔥

| Feature          | insertAdjacentElement | after()      |
| ---------------- | --------------------- | ------------ |
| Position control | ✅ Very detailed       | ❌ Only after |
| Inside element   | ✅ Yes                 | ❌ No         |
| Outside element  | ✅ Yes                 | ✅ Yes        |
| Accepts text     | ❌ No (elements only)  | ✅ Yes        |
| Modern & clean   | 😐 Verbose            | ✅ Very clean |

---

## When to use what 👇

### Use `after()` when:

* You just need to insert **after**
* Simpler, cleaner code

### Use `insertAdjacentElement()` when:

* You need **precise control**
* Inserting **inside or outside**

---

## Memory trick 🧠

> **after() = only after**
> **insertAdjacentElement() = before / after / inside**

---

## Modern JS tip 🔥

Prefer:

* `before()`, `after()`, `append()`, `prepend()` → **clean & readable**
* `insertAdjacentElement()` → **power tool**

