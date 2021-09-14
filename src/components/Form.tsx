import React, { useRef, useState } from 'react'

interface todo  {
    addNewTodo: (todoText: string) => void,
}

const Form: React.FC<todo> = ({addNewTodo}) => {
    const [error, setError] = useState(false);

    const textInput = useRef<HTMLInputElement>(null)

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        if(!textInput.current!.value) {setError(true); return}
        addNewTodo(textInput.current!.value);
        setError(false);
        textInput.current!.value = "";
    }

    return (
        <form onSubmit={submitHandler}>
            <input className={!error ? "": "error-msg"} name="todoInput" ref={textInput} />
        </form>
    )
}

export default Form