import React from 'react'
import Todo from './Todo'

interface TodosProps {
    items: {
        id: string,
        text: string,
        completed: boolean
    }[],
    checkUncheckTodo: (id: string) => void,
    removeTodo: (id: string) => void
}

const TodoList: React.FC<TodosProps> = ({items, checkUncheckTodo, removeTodo}) => {
    return (
        <ul className="todo-list">
            {items.map(el => (
                <Todo checkUncheckTodo={checkUncheckTodo} removeTodo={removeTodo} key={el.id} todoBody={el} />
            ))}
        </ul>
    )
}

export default TodoList
