# Expense Tracker App

A modern, responsive expense tracking application built with vanilla JavaScript, Tailwind CSS, and Font Awesome icons. Easily manage and monitor your daily expenses with a clean, intuitive interface.

## Features

- ✨ **Add Expenses**: Quickly log new expenses with name, amount, category, and date
- 📊 **Track Totals**: Real-time calculation of total expenses and item count
- 🎯 **Categorize**: Organize expenses by category (Food, Entertainment, Utilities, etc.)
- 🗑️ **Delete Entries**: Remove expenses from your list with a single click
- 📱 **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- 🎨 **Modern UI**: Clean and professional interface powered by Tailwind CSS
- 📋 **Detailed List**: View all expenses in an organized table format with date, description, category, and amount

## Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3/Tailwind CSS**: Responsive styling and utility-first framework
- **JavaScript (ES6+)**: Interactive functionality and dynamic DOM manipulation
- **Font Awesome 6.4**: Icon library for visual enhancements

## Installation

1. Clone the repository:
```bash
git clone https://github.com/ClydeCenteno1/Expense-Tracker.git
```

2. Navigate to the project directory:
```bash
cd Expense-Tracker
```

3. Open `index.html` in your web browser:
```bash
# On Windows
start index.html

# On macOS
open index.html

# On Linux
xdg-open index.html
```

## Usage

1. **Add an Expense**:
   - Enter the expense name (e.g., "Groceries")
   - Input the amount spent
   - Select a category from the dropdown
   - Choose the date of the expense
   - Click "ADD EXPENSE" to record it

2. **View Expenses**:
   - All expenses are displayed in the table below the form
   - The total expenses and item count are updated automatically
   - Expenses are sorted by the order they were added

3. **Delete an Expense**:
   - Click the trash icon in the "ACTION" column next to any expense
   - The expense will be removed immediately and totals will recalculate

## How It Works

### Core Functionality

- **Form Submission**: The application captures expense data through a form and stores it in a JavaScript array
- **Dynamic Updates**: When an expense is added or removed, the UI updates in real-time
- **Data Validation**: Amount inputs are validated to ensure numeric values
- **Total Calculation**: Uses the `reduce()` method to calculate total expenses efficiently
- **Event Delegation**: Single event listener handles delete operations for all expenses using event delegation pattern

### Data Structure

Each expense is stored as an object with the following properties:
```javascript
{
  id: "unique-uuid",
  date: "YYYY-MM-DD",
  name: "Expense Name",
  amount: 0.00,
  category: "category-name"
}
```

## Project Structure

```
Expense Tracker APP/
├── index.html      # Main HTML file with form and table structure
├── app.js          # JavaScript logic for managing expenses
└── README.md       # Project documentation
```

## Features Roadmap

- [ ] **Local Storage**: Persist expenses between browser sessions
- [ ] **Edit Functionality**: Modify existing expenses
- [ ] **Search & Filter**: Find expenses by date range, category, or amount
- [ ] **Charts & Analytics**: Visualize spending patterns with charts
- [ ] **Export Data**: Download expense data as CSV or PDF
- [ ] **Budget Alerts**: Set spending limits and receive notifications
- [ ] **Dark Mode**: Toggle between light and dark themes

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Feel free to fork this repository and submit pull requests with improvements.

## License

This project is open source and available under the MIT License.

## Author

**Clyde Centeno**
- GitHub: [@ClydeCenteno1](https://github.com/ClydeCenteno1)

---

**Created**: 2026
**Last Updated**: July 9, 2026
