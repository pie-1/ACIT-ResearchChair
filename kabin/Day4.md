# 2026-07-07 — Full Stack Open: Browser Console & Developer Tools

**Member:** Kabin Baniya
**Date:** 2026-07-07

---

## Topic
Full Stack Open : Using the Browser Console and Developer Tools

---

## What I Learned Today

### Opening the Console
The browser console is accessed via **F12** or **Ctrl + Shift + I** (Chrome/Firefox). It is one of the most important tools for any web developer — it shows errors, logs, network activity, and lets you run JavaScript live in the browser.

### Console Tab
The Console tab displays:
- JavaScript errors and warnings from the page
- Output from `console.log()` calls in your code
- Any network or resource loading errors
git add .
You can also type and execute JavaScript directly in the console — useful for testing small snippets without editing your source files.

```js
console.log('hello from the console')  // prints output
console.error('something broke')       // prints in red
console.warn('heads up')               // prints in yellow
```

### Network Tab
The Network tab shows every HTTP request the browser makes — HTML, CSS, JS, images, JSON. For each request you can see:
- The URL and request method (GET, POST, etc.)
- Status code (200 OK, 404 Not Found, etc.)
- Response headers and body
- Time taken for the request

This is how you verify that your frontend is actually fetching data from the right endpoint and getting the right response back.

### Elements Tab
The Elements tab shows the live DOM — the actual HTML structure of the page as the browser sees it after JavaScript has run. This is different from the source HTML file — JavaScript may have added, removed, or modified elements dynamically.

### Why This Matters
Understanding DevTools is not optional — it is how you debug. When something breaks, the console tells you what, the network tab tells you where the data went wrong, and the elements tab shows you what actually rendered. Every debugging session starts here.

---

## Resources Used
- [Full Stack Open — Part 0](https://fullstackopen.com/en/part0)
- [Chrome DevTools Docs](https://developer.chrome.com/docs/devtools/)

---

## Key Takeaways
- **Console tab** — run JS live, see errors and logs
- **Network tab** — inspect every HTTP request and response
- **Elements tab** — see the real DOM after JS has modified it
- `console.log()` is your first debugging tool — use it constantly
- Status codes matter: 200 = OK, 404 = not found, 500 = server error

---

## Questions / Challenges
- How do you filter the Network tab to show only JSON/API requests?
- What is the difference between the Sources tab and the Elements tab?

---

## Next
- Practice using DevTools on a live site
