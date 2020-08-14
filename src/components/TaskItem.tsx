/** @jsx jsx */
import React from 'react'
import { Task } from './Types'
import { jsx, css } from '@emotion/core';

type props = {
    task: Task
    handleDone: (task:Task) => void
    handleDelete: (task:Task) => void
}


const TaskItem: React.FC<props> = ({task, handleDone, handleDelete}) => {

    return (
        <li>
            <input
                type="checkbox"
                onClick={() => handleDone(task)}
            ></input>
            <span>{task.title}</span>
            <button
                onClick={() => handleDelete(task)}
            >削除</button>
        </li>
    )
}

export default TaskItem