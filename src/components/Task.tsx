import React from 'react'
import { ITask } from '../Interfaces'

interface Props {
  task: ITask
  removeTask(taskToRemove: string): void
}
const Task = ({ task, removeTask }: Props) => {
  return (
    <div className = "task">
      <div className = "content">
        <span> { task.taskName } </span>
        <span> { task.deadline } </span>
      </div>
      <button onClick={() => {
        removeTask(task.taskName)
      }}> X </button>
    </div>
  )
}
export default Task