# REGEX (Regular Expression) – COMPLETE FOUNDATION NOTES

## 1. What is Regex?

Regex = a pattern (rule) used to match text.

**Think:**

> “I define rules → JavaScript checks if a string follows them”

**Example:**

```js
/abc/  // string should contain "abc"
```

---

## 2. Basic Structure

```js
/pattern/
```

**Example:**

```js
/abc/.test("abcdef") // true
```

---

## 3. `.test()` Method

**Syntax:**

```js
regex.test(string)
```

**Returns:**

* `true`  → match found
* `false` → no match

**Example:**

```js
/abc/.test("abc") // true
/abc/.test("xyz") // false
```

---

## 4. Anchors (Position, not characters)

* `^` → Start of string
* `$` → End of string

**Examples:**

```js
/^a/.test("apple")   // true
/^a/.test("banana")  // false

/e$/.test("apple")   // true
/e$/.test("hero")    // false
```

**Full match:**

```js
/^abc$/.test("abc")   // true
/^abc$/.test("xabc")  // false
```

---

## 5. Character Classes

* `[a-z]` → lowercase letters
* `[A-Z]` → uppercase letters
* `[0-9]` → digits
* `[a-zA-Z]` → all letters

**Example:**

```js
/[a-z]/.test("b") // true
```

**Negation:**

* `[^abc]` → NOT a, b, c

```js
/[^a]/.test("b") // true
```

---

## 6. Quantifiers (How many times?)

* `+` → 1 or more

```js
/a+/.test("aaa") // true
```

* `*` → 0 or more

```js
/a*/.test("") // true
```

* `?` → optional (0 or 1)

```js
/colou?r/.test("color")  // true
/colou?r/.test("colour") // true
```

* `{n}` → exact count

```js
/a{3}/.test("aaa") // true
```

* `{n,m}` → range

```js
/a{2,4}/.test("aaa") // true
```

---

## 7. Special Shortcuts

* `\d` → digit (0–9)

```js
/\d/.test("5") // true
```

* `\D` → NOT digit
* `\w` → letters + digits + `_`
* `\W` → NOT word
* `\s` → whitespace
* `\S` → NOT whitespace

---

## 8. Dot (.)

* `.` → any character (except newline)

```js
/a.c/.test("abc") // true
/a.c/.test("axc") // true
```

---

## 9. OR Operator (`|`)

```js
/cat|dog/.test("dog") // true
```

---

## 10. Grouping `()`

```js
/(ab)+/.test("abab") // true
```

---

## 11. Escape `\`

Used to treat special characters as normal.

```js
/\./.test(".") // true
```

---

## 12. Flags

* `i` → case-insensitive

```js
/abc/i.test("ABC") // true
```

* `g` → global
* `m` → multiline

---

## 13. Most Important Regex (Your Case)

```js
/^[a-zA-Z]+$/
```

**Meaning:**

* `^` → start
* `[a-zA-Z]` → only letters
* `+` → one or more
* `$` → end

**Final:**

> Only letters allowed, full string, at least one character

---

## 14. Output Examples

| Input     | Result |
| --------- | ------ |
| "babu"    | true   |
| "Babu"    | true   |
| "babu123" | false  |
| "123"     | false  |
| "   "     | false  |
| ""        | false  |

---

## 15. VERY IMPORTANT CONCEPT

**Without anchors:**

```js
/[a-zA-Z]+/.test("123abc456") // true
```

**With anchors:**

```js
/^[a-zA-Z]+$/.test("123abc456") // false
```

**Reason:**

* Without `^ $` → partial match allowed
* With `^ $` → full string must match

---

## 16. Mental Model (Best for memory)

Regex = 3 parts:

1. Anchors → where
2. Characters → what
3. Quantifiers → how many

---

## 17. Real Useful Patterns

**Only letters:**

```js
/^[a-zA-Z]+$/
```

**Letters + space (full name):**

```js
/^[a-zA-Z ]+$/
```

**Only numbers:**

```js
/^[0-9]+$/
```

---

## FINAL SUMMARY (Quick Revision)

* `^` → start

* `$` → end

* `[]` → allowed characters

* `[^]` → not allowed

* `+` → 1 or more

* `*` → 0 or more

* `?` → optional

* `.` → any character

* `\d` → digit

* `\s` → space

* `|` → OR

* `()` → group

* `.test()` → returns true/false


