const form = document.getElementById('form')
const input = document.getElementById('input')
const todos = document.getElementById('todos')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    addTodo()
})

function addTodo(todo) {
    let todoText = input.value
    

    if(todo) {
        todoText = todo.text
    }

    if(todoText) {
        const todoEl = document.createElement('li')

        todoEl.innerText = todoText

        todos.appendChild(todoEl)
        input.value = ''

        if (todo && todo.completed) {
            todoEl.classList.toggle('completed')
        }

        todoEl.addEventListener('click', () => todoEl.classList.toggle('completed'))

        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()

            todoEl.remove()
        })
    }
}