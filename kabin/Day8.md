# 2026-07-11 — Full Stack Open: Part 1 — Complex State & Debugging

**Member:** Kabin Baniya
**Date:** 2026-07-11

---

## Topic
Full Stack Open — Part 1: Complex State, Arrays in State & Debugging React

---

## What I Learned Today

### Complex State — Objects
You can store objects in state, but always create a new object when updating — never mutate the existing one.

```jsx
const [clicks, setClicks] = useState({ left: 0, right: 0 })

const handleLeft = () => {
  setClicks({ ...clicks, left: clicks.left + 1 })
}
```

The spread operator `...clicks` copies all existing properties, then you override only what changed.

### Arrays in State
Store history or lists in state using arrays. Always create a new array — never push directly.

```jsx
const [history, setHistory] = useState([])

const handleClick = () => {
  setHistory(history.concat('clicked'))  // concat returns new array
}
```

Use `concat` instead of `push` — `push` mutates the original array which breaks React's rendering.

### Conditional Rendering
Render different UI based on state:

```jsx
const App = () => {
  const [show, setShow] = useState(false)

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <p>Now you see me</p>}
    </div>
  )
}
```

### Debugging React
- Use `console.log()` inside components to inspect values
- Open React DevTools in browser to inspect component tree and state
- If something doesn't render, check: is state updating? Is the prop being passed correctly?

```jsx
const App = () => {
  const [value, setValue] = useState(10)
  console.log('rendering with value:', value)  // fires on every render

  return <div>{value}</div>
}
```

### Rules of Hooks
- Only call hooks at the **top level** of a component — never inside loops, conditions, or nested functions
- Only call hooks inside React function components

---

## Resources Used
- [Full Stack Open — Part 1](https://fullstackopen.com/en/part1)
- [React Docs — Hooks Rules](https://react.dev/reference/rules/rules-of-hooks)

---

## Key Takeaways
- Always use spread or `concat` to update objects/arrays in state — never mutate directly
- Conditional rendering with `&&` is clean and idiomatic React
- `console.log` inside components is your first debugging tool
- Hooks have strict rules — break them and React will throw errors

---

## Questions / Challenges
- What is the difference between controlled and uncontrolled components?
- How does React know which `useState` call corresponds to which state variable?

---

## Next
- Continue of part 1
