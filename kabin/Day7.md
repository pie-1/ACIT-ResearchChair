# 2026-07-10 — Full Stack Open: Part 1 — React State & Events

**Member:** Kabin Baniya
**Date:** 2026-07-10

---

## Topic
Full Stack Open — Part 1: Component State & Event Handling

---

## What I Learned Today

### useState Hook
State is data that changes over time inside a component. React provides the `useState` hook to manage it.

```jsx
import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}
```

- `count` — current state value
- `setCount` — function to update it
- `0` — initial value
- Every time state updates, React **re-renders** the component

### Event Handling
Events in React are handled inline using JSX attributes like `onClick`, `onChange`, `onSubmit`.

```jsx
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)
```

Always pass the function reference — do not call it directly:
```jsx
// Correct
<button onClick={handleClick}>Click</button>

// Wrong — calls immediately on render
<button onClick={handleClick()}>Click</button>
```

### Lifting State Up
When multiple components need access to the same state, move the state to their closest common parent and pass it down via props.

```jsx
const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Display count={count} />
      <Button handleClick={() => setCount(count + 1)} text="+" />
    </div>
  )
}
```

---

## Resources Used
- [Full Stack Open — Part 1](https://fullstackopen.com/en/part1)
- [React Docs — useState](https://react.dev/reference/react/useState)

---

## Key Takeaways
- `useState` returns a value and a setter — always use the setter to update state
- State change triggers a re-render — React updates only what changed
- Never mutate state directly — always use the setter function
- Lift state up when multiple components need the same data

---

## Questions / Challenges
- What happens if you call the setter multiple times in one event?
- When should you use multiple `useState` calls vs one object?

---

## Next

- Continue Part 1 exercises