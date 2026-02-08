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

