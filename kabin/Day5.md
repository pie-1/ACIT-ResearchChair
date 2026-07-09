# 2026-07-08 — Full Stack Open: Part 0 — Completed

**Member:** Kabin Baniya
**Date:** 2026-07-08

---

## Topic
Full Stack Open — Part 0: Completion — Forms, HTTP Methods & Fundamentals Wrap-Up

---

## What I Learned Today

### How HTML Forms Work
When a user submits a form, the browser sends an HTTP POST request to the server with the form data in the request body. The server processes it and typically responds with a redirect (status 302), which tells the browser to make a new GET request to a different URL.

This is the classic web pattern:
1. User fills form → browser sends **POST**
2. Server handles data → responds with **302 redirect**
3. Browser follows redirect → sends **GET**
4. Server responds with updated page

### HTTP Methods
| Method | Purpose |
|---|---|
| GET | Fetch/read data — no side effects |
| POST | Send data to server — creates or updates something |
| PUT | Replace a resource entirely |
| DELETE | Remove a resource |

GET requests should never change server state. POST is used when you want to send data that modifies something.

### REST and Stateless Communication
HTTP is **stateless** — the server does not remember previous requests. Every request must carry all the information needed to process it. This is why cookies, tokens, and sessions exist — to maintain state across stateless HTTP requests.

### Traditional vs Single Page Apps — Final Comparison

**Traditional app:**
- Every action = full page reload
- Server renders HTML for every request
- Slower, more bandwidth

**Single Page App (SPA):**
- One initial HTML load, then JS takes over
- Data fetched as JSON via API calls
- DOM updated dynamically — no reloads
- Faster, more responsive

### Part 0 — Complete
Covered everything in Part 0:
- How browsers load web apps (HTML → CSS → JS → JSON)
- HTTP request/response cycle
- Sequence diagrams for traditional apps and SPAs
- Browser DevTools (Console, Network, Elements)
- HTML Forms and POST requests
- Stateless HTTP and why sessions exist

---

## Resources Used
- [Full Stack Open — Part 0](https://fullstackopen.com/en/part0)
- [MDN HTTP Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

---

## Key Takeaways
- Forms use POST, page loads use GET — never mix these up
- HTTP is stateless — state management is the developer's responsibility
- SPAs are faster because they avoid full page reloads entirely
- Part 0 is the mental model everything else in web dev builds on

---

## Questions / Challenges
- How does the server validate that a POST request is legitimate and not forged?
- What is CSRF and why does it matter for forms?

---

## Next
- Submit Part 0 exercises on Full Stack Open
- Start **Part 1 — Introduction to React**
- Set up Vite project, learn components, JSX, and props