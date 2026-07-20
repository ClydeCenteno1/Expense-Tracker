# Expense Tracker

A clean, table-based expense tracker with full CRUD — add, view, edit, and delete expenses, with a running total and item count updated live.

**Live demo:** [clydecenteno1.github.io/Expense-Tracker](https://clydecenteno1.github.io/Expense-Tracker)

## Overview

Log an expense with a name, amount, category, and date, and it lands in a running table alongside a live total. Every row can be edited in place via a modal dialog or removed entirely — no page reloads, no backend, everything managed in memory.

## Features

- **Full CRUD** — Create, Read, Update, and Delete expenses entirely client-side
- **Native `<dialog>` modal for editing** — clicking the edit icon opens the browser's built-in modal dialog pre-filled with that expense's data, rather than a custom-built overlay
- **Live totals** — total expense amount and item count recalculate automatically after every add, edit, or delete
- **Input safety** — the amount field guards against non-numeric input, defaulting to `0` rather than letting `NaN` slip into a calculation
- **Category dropdown** — expenses are tagged (Food, Entertainment, Utilities, Transport, Health) for at-a-glance organization
- **Unique, stable IDs** — every expense gets a `crypto.randomUUID()` on creation, so edit/remove actions always target the correct row even after the list changes

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5, native `<dialog>` element |
| Styling | [Tailwind CSS](https://tailwindcss.com/) (via CDN) |
| Icons | [Font Awesome 6.4](https://fontawesome.com/) |
| Interactivity | Vanilla JavaScript (`app.js`) |
| Hosting | GitHub Pages |

No build step, no framework, no backend — the entire app is static HTML/CSS/JS with all data held in a single in-memory array.

## How it works

**Rendering without a framework** — instead of using `innerHTML` template strings (as in some of my other vanilla JS projects), this one builds each row with `document.createElement` and `.append()`, which keeps element references clean for attaching data attributes:

```js
const removeBtn = (id) => {
    const icon = document.createElement("span")
    icon.classList.add("fa-solid", "fa-trash-can", "cursor-pointer")
    icon.dataset.action = "removeBtn"
    icon.dataset.id = id
    return icon
}
```

**Event delegation for row actions** — one listener on the table container handles both edit and delete clicks, identifying the action and target row via `data-action` / `data-id`:

```js
listContainer.addEventListener("click", (e) => {
    const id = e.target.dataset.id
    const action = e.target.dataset.action

    if (action === "removeBtn") {
        expense = expense.filter(item => id !== item.id)
        totalItems()
        renderList()
    }
    if (action === "editBtn") {
        // populate modal with matched expense, open dialog
    }
})
```

**Editing via the native `<dialog>` element** — rather than building a custom modal from scratch (overlay div, manual open/close state, click-outside-to-close logic), the edit form lives inside a `<dialog>` element and is controlled with the built-in `.showModal()` / `.close()` methods. The currently-edited expense's ID is tracked in a single `currentEditingId` variable so the submit handler knows which record to update.

**Calculating the total** — a straightforward `reduce()` over the expense array keeps the running total in sync with whatever's currently in the list:

```js
const calculateTotal = () => {
    const total = expense.reduce((total, expend) => {
        return total + expend.amount
    }, 0)
    return total
}
```

## Project Structure

```
Expense-Tracker/
├── index.html      # Page markup, form, table, and edit modal
└── app.js          # CRUD logic, rendering, and event delegation
```

## Running Locally

No installation needed — it's a static site.

1. Clone the repo:
   ```
   git clone https://github.com/ClydeCenteno1/Expense-Tracker.git
   ```
2. Open `index.html` directly in a browser, or serve it locally (e.g. with the VS Code "Live Server" extension).

## Known Limitations

- Data is held in memory only — refreshing the page clears all expenses (no `localStorage` persistence yet)
- There are two elements with `id="totalExpenses"` in the markup (one in the summary card, one in the table footer) — both get updated since `totalDisplay()` uses `querySelectorAll`, but duplicate IDs are invalid HTML and worth renaming one to a unique ID or class

## Credits

Built by [Clyde Centeno](https://github.com/ClydeCenteno1) as a CRUD/DOM-manipulation practice project.
