# 1️⃣ What JavaScript does before running code

JavaScript first **creates variables in memory**.

But it treats them **differently**.

| Variable | Memory value       |
| -------- | ------------------ |
| `var`    | `undefined`        |
| `let`    | created but locked |
| `const`  | created but locked |

The **locked time** is called **Temporal Dead Zone**.

---

# 2️⃣ Example with `var`

```javascript
console.log(a)
var a = 10
```

Memory phase:

```
a = undefined
```

Execution:

```
console.log(a) → undefined
```

So **no error**.

---

# 3️⃣ Example with `let`

```javascript
console.log(a)
let a = 10
```

Memory phase:

```
a = created but locked
```

Execution:

```
Error
```

Because variable is still in **Temporal Dead Zone**.

---

# 4️⃣ Very Simple Analogy

Think of **three containers**.

### `var`

```
Container exists
but empty
```

So checking it → **undefined**

---

### `let` / `const`

```
Container exists
but locked 🔒
```

If you open before time → **error**

---

# 5️⃣ One Simple Rule

```
var   → empty container
let   → locked container
const → locked container
```

---

✅ **Final Answer**

> `var` has no Temporal Dead Zone because it is initialized with `undefined`.
> `let` and `const` stay in the Temporal Dead Zone until their declaration line, so accessing them earlier causes an error.



# Trick Question

What will be the output?

```javascript
let a = 10;

function test() {
  console.log(a);
  let a = 20;
}

test();
```

---

# Most beginners think

```
10
```

Because `a` outside the function is **10**.

But that is **wrong ❌**

---

# Actual Output

```
ReferenceError
```

---

# Why this happens

Inside the function we wrote:

```javascript
let a = 20;
```

Because of this, JavaScript **creates a new variable `a` inside the function scope**.

During the memory phase:

```
function scope
a → created but not initialized
```

So when this line runs:

```javascript
console.log(a)
```

The variable `a` is still inside the **Temporal Dead Zone**, so JavaScript throws **ReferenceError**.

---

# Visual Timeline

```
function start
      ↓
a exists but locked (TDZ)
      ↓
console.log(a) → ERROR
      ↓
let a = 20
```

---

# Compare with `var`

```javascript
var a = 10;

function test() {
  console.log(a);
  var a = 20;
}

test();
```

Output:

```
undefined
```

Because `var` becomes:

```javascript
function test() {
  var a;
  console.log(a);
  a = 20;
}
```

---

# Simple Rule to Remember

```
var  → hoisted + undefined
let  → hoisted + Temporal Dead Zone
const → hoisted + Temporal Dead Zone
```

---

