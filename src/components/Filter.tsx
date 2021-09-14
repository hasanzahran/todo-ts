import React, {useRef} from 'react'

interface filterProps {
    filterTodos: (filter: string) => void
}

const Filter: React.FC<filterProps> = ({filterTodos}) => {
    const selectInput = useRef<HTMLSelectElement>(null);

    const getValue = (e: React.FormEvent) => {
        e.preventDefault();
        filterTodos(selectInput.current!.value);
    }
    return (
        <form>
            <select className="todo-filter" ref={selectInput} onChange={getValue}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="notcompleted">Not completed</option>
            </select>
        </form>
    )
}

export default Filter
