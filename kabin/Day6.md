# 2026-07-09 — Full Stack Open: Part 0 Submitted + Part 1 Begins

**Member:** Kabin Baniya
**Date:** 2026-07-09

---

## Topic
Full Stack Open — Part 0 Submission & Part 1: Introduction to React

---

## Part 0 — Submitted ✅

Completed and submitted all 6 Part 0 exercises on the Full Stack Open platform.

**GitHub:** https://github.com/kabincs9/fullstackopen/tree/main/part0

Exercises covered:
- **0.4** — New note diagram (traditional web app)
- **0.5** — Single Page App diagram
- **0.6** — New note in Single Page App diagram

All diagrams written in Mermaid syntax and pushed to GitHub.

---

## Part 1 — Introduction to React

### What is React?
React is a JavaScript library for building user interfaces. Instead of manipulating the DOM directly, you build **components** — reusable pieces of UI — and React handles rendering them efficiently.

### Setting Up with Vite
```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```

Vite is a modern build tool that makes React development fast — hot reload, instant server startup, and no configuration needed to get started.

### Components
A React component is a JavaScript function that returns JSX — a syntax that looks like HTML but compiles to JavaScript.

```jsx
const Hello = () => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}
```

### JSX
JSX lets you write HTML-like syntax inside JavaScript. It is not HTML — it compiles to `React.createElement()` calls under the hood. Every JSX element must have a single root element.

### Props
Props are how you pass data into a component from its parent.

```jsx
const Hello = (props) => {
  return <h1>Hello, {props.name}</h1>
}

// Usage
<Hello name="Kabin" />
```

---

## Resources Used
- [Full Stack Open — Part 1](https://fullstackopen.com/en/part1)
- [React Docs](https://react.dev/)
- [Vite Docs](https://vitejs.dev/)

---

## Key Takeaways
- React is component-based — build small pieces, compose them into big UIs
- JSX is not HTML — it compiles to JavaScript
- Props flow **down** from parent to child — one direction only
- Vite makes setup fast — no webpack config needed

---

## Questions / Challenges
- When does a component re-render — what triggers it?
- Can a component pass data back up to its parent?

---

## Next
- Learn React state with `useState`
- Handle events (onClick, onChange)
- Complete Part 1 exercises