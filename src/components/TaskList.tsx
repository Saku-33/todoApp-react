/** @jsx jsx */
import React from 'react'
import { Task } from './Types'
import TaskItem from './TaskItem'
import { jsx, css } from '@emotion/core';

type Props = {
    tasks: Task[]
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const listStyle = css({
    listStyle: "none"
});

const TaskList: React.FC<Props> = ({ tasks, setTasks }) => {

    const handleDone = (task: Task) => {
        setTasks(prev => prev.map(t =>
            t.id === task.id
                ? { ...task, done: !task.done }
                : t
        ))
    }

    const handleDelete = (task: Task) => {
        setTasks(prev => prev.filter(t =>
            t.id !== task.id
        ))
    }

    return (
        <div>
        {
            tasks.length <= 0 ? '登録されたTODOは有りません。' :
            <ul css={listStyle}>
                {tasks.map(task => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        handleDelete={handleDelete}
                        handleDone={handleDone}
                    />
                ))}
            </ul>
        }
        </div>
    )
}
 
export default TaskList