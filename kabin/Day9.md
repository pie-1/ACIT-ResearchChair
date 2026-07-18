# 2026-07-12 — Full Stack Open: Part 1 — Props, Fragments & Rendering Rules

**Member:** Kabin Baniya
**Date:** 2026-07-12

---

## Topic
Full Stack Open — Part 1: Props in Detail, Fragments & What React Can/Cannot Render

---

## What I Learned Today

### Props — Passing Data to Components
Props are passed as attributes and received as an object inside the component.

```jsx
const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <Hello name='Maya' age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}
```

- String props → `name='Maya'`
- JavaScript expressions → `age={26 + 10}` (must use curly braces)
- Variables → `name={name}`

### Component Names Must Be Capitalized
React treats lowercase components as HTML elements, not custom components.

```jsx
// Wrong — React treats this as a plain HTML <footer> element
const footer = () => <div>created by kabin</div>

// Correct — React renders the custom component
const Footer = () => <div>created by kabin</div>
```

### Root Element Rule
Every component must return a single root element. Returning multiple elements at the top level throws an error.

```jsx
// Wrong — multiple root elements
const App = () => {
  return (
    <h1>Greetings</h1>
    <Hello name='Maya' />
  )
}
```

**Fix 1 — wrap in a div:**
```jsx
const App = () => (
  <div>
    <h1>Greetings</h1>
    <Hello name='Maya' />
  </div>
)
```

**Fix 2 — use a Fragment (no extra div in DOM):**
```jsx
const App = () => (
  <>
    <h1>Greetings</h1>
    <Hello name='Maya' />
  </>
)
```

Fragments are cleaner — they avoid adding unnecessary `div` elements to the DOM.

### Do Not Render Objects
React can render primitive values (strings, numbers) in JSX — but not objects directly.

```jsx
// Wrong — renders nothing, throws error in console
const friends = [{ name: 'Peter', age: 4 }]
<p>{friends[0]}</p>

// Correct — access individual primitive properties
<p>{friends[0].name} {friends[0].age}</p>
```

The error message: **"Objects are not valid as a React child"** — means you tried to render an object directly. Always access the specific property you want to display.

### Always Keep the Console Open
This is a core habit the course enforces. Errors in React are clear and informative — but only if you see them. If the page looks blank or broken, the console tells you exactly why.

---

## Resources Used
- [Full Stack Open — Part 1](https://fullstackopen.com/en/part1)
- [React Docs — Fragments](https://react.dev/reference/react/Fragment)

---

## Key Takeaways
- Props are just an object — access values with `props.name`, `props.age` etc.
- Component names **must** start with a capital letter
- Always wrap JSX in a single root element — use `<>...</>` to avoid extra divs
- Never render objects directly in JSX — only primitives (strings, numbers)
- Console open at all times — non-negotiable

---

## Questions / Challenges
- Can you destructure props directly in the function parameter instead of using `props.x`?
- What is the difference between `<Fragment>` and `<>...</>`?

---

## Next
- Props destructuring
