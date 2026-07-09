const expenseForm = document.querySelector("form")
const expenseNameInput = document.querySelector("#expenseName")
const amountInput = document.querySelector("#amount")
const categoryInput = document.querySelector("#category")
const dateInput = document.querySelector("#date")
const listContainer = document.querySelector("#listContainer")
const tableHead = document.querySelector("#tableHead");
const table = document.querySelector("table")

let expense = []

// Date, Name, Amount, Category
const date = () => {
    return dateInput.value
}

const expenseName = () => {
    return expenseNameInput.value
}

const expenseAmount = () => {
    if (isNaN(amountInput.value)) {
        return amountInput.value = 0
    } else {
        return Number(amountInput.value)
    }
}

const category = () => {
    return categoryInput.value
}

//Total Items
const totalItems = () => {
    let totalItems = expense.length
    document.querySelector("#totalItem").textContent = totalItems
}

//Remove Btn
const removeBtn = (id) => {
    const i = document.createElement("i")
    i.classList.add("fa-solid", "fa-trash-can","cursor-pointer")
    i.dataset.action = "removeBtn"
    i.dataset.id = id
    return i
}

//Edit Btn

const editBtn = (id) => {
    const i = document.createElement("i")
    i.classList.add("fa-solid", "fa-pen","cursor-pointer")
    i.dataset.action = "editBtn"
    i.dataset.id = id
    return i
}


// Reset Inputs
const resetInputs = () => {
    dateInput.value = ""
    expenseNameInput.value = ""
    amountInput.value = ""
    categoryInput.value = "category"
}

// Table Heading
const oldHeading = () => {
    tableHead.innerHTML = `
    <tr>
        <th>DATE</th>
        <th>DESCRIPTION</th>
        <th>CATEGORY</th>
        <th>AMOUNT ($)</th>
        <th>ACTION</th>
    </tr>
    `
}

// Calculate and Display Data
const totalDisplay = (total, id) => {
    const elements = document.querySelectorAll(id)
    for (let element of elements) {
        element.textContent = `$${total}`
    }
}

const calculateTotal = () => {
    const total = expense.reduce((total, expend) => {
        return total + expend.amount
    }, 0)
    return total
}
// Creates new table data
const newTd = (value) => {
    const newCell = document.createElement("td")
    newCell.textContent = value
    return newCell
}

// Render list to table
const renderList = () => {

    listContainer.innerHTML = ""
    listContainer.append(tableHead)
    oldHeading()
    totalDisplay(calculateTotal(), "#totalExpenses")
    for (let expenseData of expense) {
        const newCell = document.createElement("tr")
        newCell.classList.add("border", "border-black", "my-10")

        const date = newTd(expenseData.date)
        date.classList.add("text-center")

        const name = newTd(expenseData.name)
        name.classList.add("text-center")

        const category = newTd(expenseData.category)
        category.classList.add("text-center")

        const amount = newTd(`$${expenseData.amount}`)
        amount.classList.add("text-center")

        const id = expenseData.id
        const removeButton = removeBtn(id)
        const editButton = editBtn(id)
        const btnContainer = document.createElement("div")
        btnContainer.classList.add("flex","items-center","justify-center","gap-2")
        btnContainer.append(removeButton,editButton)

        
        
        newCell.append(date, name, category, amount, btnContainer)
        listContainer.append(newCell)
    }
}

//Submit form
expenseForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const newExpense = {
        id: crypto.randomUUID(),
        date: date(),
        name: expenseName(),
        amount: expenseAmount(),
        category: category()
    }
    expense.push(newExpense)
    totalItems()
    resetInputs()
    renderList()
})


//Event delegation
listContainer.addEventListener("click", (e) => {
    const id = e.target.dataset.id
    const action = e.target.dataset.action

    if (action === "removeBtn") {
        expense = expense.filter(item => id !== item.id)
        totalItems()
        renderList()
    }
    if (action === "editBtn") {
        const idMatch = expense.find(item => id === item.id)
        const newName = prompt("Edit your expense name:", idMatch.name)
        
        if(newName !== ""){
        idMatch.name = newName.trim()
        renderList()
        }
    }
})


