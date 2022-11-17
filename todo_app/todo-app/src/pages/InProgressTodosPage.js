import { useEffect, useState } from "react"
import { InProgressTodosList } from "../components/InProgressTodosList"
import { getAllTodosByStatus } from "../utils/fetch_api_funcs"

export const InProgressTodosPage = () => {

  const [inProgressTodos, setInProgressTodos] = useState([])

  useEffect(() => {
    getAllTodosByStatus(setInProgressTodos, 'inProgress')
  }, [])

  return (
    <div>
      <h2>In Progress Todos Page</h2>
      <InProgressTodosList inProgressTodos={inProgressTodos} setInProgressTodos={setInProgressTodos} />
    </div>
  )
}