import React, { FC, ChangeEvent, useState } from 'react'
import './App.css'
import { ITask } from './Interfaces'
import Task from './components/Task'

const App: FC = () => {
  const [task, setTask] = useState<string>("")
  const [deadline, setDeadline] = useState<number>(0)
  const [taskList, setTaskList] = useState<ITask[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.target.name === "task" ? setTask(event.target.value) : setDeadline(Number(event.target.value)) // event.target.value returns either string or undefined
  }
  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline }
    setTaskList([...taskList, newTask])
    setTask("")
    setDeadline(0)
  }

  return (
    <main className="App">
      <section className = "header">
        <div className = "inputContainer">
          <input type = "text" name = "task" placeholder = "Task..." value = {task} onChange = {handleChange} />
          <input type = "number" name = "deadline" placeholder = "Deadline (in Days)..." value = {deadline} onChange = {handleChange} />
        </div>
        <button onClick = {addTask}>Add Task</button>
      </section>
      <section className = "taskList">
        {taskList.map((task: ITask, key: number) => {
          return <Task key = {key} task = {task} />
        })}
      </section>
    </main>
  );
}

export default App;
