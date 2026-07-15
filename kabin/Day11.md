# 2026-07-14 — Full Stack Open: Part 1 — Wrap Up & Exercises 1.1

**Member:** Kabin Baniya
**Date:** 2026-07-14

---

## Topic
Full Stack Open — Part 1: Finishing Object Rendering Rules & Starting Exercises

---

## What I Learned Today

### Clearing Console Errors
After fixing a bug, always:
1. Press 🚫 in the console to clear old error messages
2. Reload the page
3. Make sure no new errors appear

Never ignore red console errors and keep coding — fix first, continue after.

### Arrays of Primitives Can Be Rendered
React can render arrays if they contain primitive values like strings or numbers:

```jsx
const App = () => {
  const friends = ['Peter', 'Maya']
  return (
    <div>
      <p>{friends}</p>
    </div>
  )
}
```

This works but outputs `PeterMaya` with no spacing — not ideal. The proper way to render lists comes in Part 2 using `.map()`.

### Quick Rules Summary — What React Can Render

| Value | Renderable |
|---|---|
| String | ✅ |
| Number | ✅ |
| Array of strings/numbers | ✅ (but careful) |
| Object | ❌ |
| Array of objects | ❌ |

---


---

## Key Takeaways
- Clear console errors after every fix — don't let them pile up
- Arrays of primitives render but aren't clean — use `.map()` in Part 2
- Never render objects directly — always access primitive properties

---

