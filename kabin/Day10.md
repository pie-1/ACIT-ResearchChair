# 2026-07-13 — Full Stack Open: Part 1 — Do Not Render Objects

**Member:** Kabin Baniya
**Date:** 2026-07-13

---

## Topic
Full Stack Open — Part 1: Why You Cannot Render Objects in React

---

## What I Learned Today

### The Problem
Consider this code that tries to print friends' names and ages:

```jsx
const App = () => {
  const friends = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ]

  return (
    <div>
      <p>{friends[0]}</p>
      <p>{friends[1]}</p>
    </div>
  )
}
```

Nothing appears on the screen. The page is blank.

### Why It Fails
`friends[0]` is an object — `{ name: 'Peter', age: 4 }`. React cannot render objects directly inside JSX. Only **primitive values** (strings, numbers, booleans) can be rendered in curly braces.

The console throws:
> **Objects are not valid as a React child**

This is why keeping the console open is non-negotiable — without it, you just see a blank page with no clue why.

### The Fix
Access the individual primitive properties instead of the whole object:

```jsx
const App = () => {
  const friends = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ]

  return (
    <div>
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
    </div>
  )
}
```

Now it renders correctly — because `friends[0].name` is a string and `friends[0].age` is a number, both of which React can render.

### The Rule
| What you can render | Example |
|---|---|
| String | `{'hello'}` |
| Number | `{42}` |
| Boolean (careful) | `{true}` renders nothing |
| Array of primitives | `{['a', 'b']}` |
| **Object** | ❌ throws error |

---

## Key Takeaways
- Never put a full object inside JSX curly braces — always access a specific property
- The error **"Objects are not valid as a React child"** means you tried to render an object
- Console open at all times — a blank page is not a silent success

---

## Questions / Challenges
- What happens if you try to render `null` or `undefined` in JSX?
- How would you render a whole list of friends cleanly using `.map()`?

---

## Next
- Rendering lists with `.map()`
- Keys in React lists
- Continue Part 1 exercises