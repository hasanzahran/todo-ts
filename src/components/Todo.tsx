import React from 'react'

interface todoItem {
    todoBody: {
        id: string,
        text: string,
        completed: boolean
    }
    checkUncheckTodo: (id: string) => void
    removeTodo: (id: string) => void
}

const Todo: React.FC<todoItem>= ({todoBody, checkUncheckTodo, removeTodo}) => {
    return (
        <li className={`${todoBody.completed ? "completed-todo": "uncompleted-todo"} todo-container`}>
            {todoBody.text}
            <div className="todo-actions">
                <button onClick={() => checkUncheckTodo(todoBody.id)}>Completed</button>
                <button onClick={() => removeTodo(todoBody.id)}>Delete</button>
            </div>
        </li>
    )
}

export default Todo