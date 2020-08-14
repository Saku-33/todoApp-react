/** @jsx jsx */
import React, { useState } from 'react'
import { Task } from './Types'
import { jsx, css } from '@emotion/core';
 
type Props = {
    tasks: Task[]
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const inputStyle = css({
    width: "80%",
    padding: "10px 15px",
    fontsize: "20px",
    borderRadius: "3px",
    border: "2px solid #ddd",
    boxSizing: "border-box"
});

const buttonStyle = css({
    width: "15%",
    padding: "6px 15px",
    fontsize: "20px",
    borderRadius: "3px",
    border: "2px solid #ddd",
    boxSizing: "border-box",
    marginLeft: "10px"
});
 
const TaskInput: React.FC<Props> = ({ tasks, setTasks }) => {
    const [inputTitle, setinputTitle] = useState<string>('')
    const [count, setCount] = useState<number>(tasks.length + 1)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setinputTitle(e.target.value)
    }
 
    const handleSubmit = () => {
        setCount(count + 1)

        const newTask:Task = {
            id: count,
            title: inputTitle,
            done: false
        }
        if(newTask.title !== ""){
            setTasks([newTask, ...tasks])
            setinputTitle('')
        }

    }

    return (
        <div>
            <input
                css={inputStyle}
                type='text'
                value={inputTitle}
                onChange={handleInputChange}
            ></input>
            <button
                css={buttonStyle}
                onClick={handleSubmit}
            >登録</button>
        </div>
    )
}
 
export default TaskInput