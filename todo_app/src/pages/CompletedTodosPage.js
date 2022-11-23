import { useEffect, useState } from "react"
import { CompletedTodosList } from "../components/CompletedTodosList"
import { getAllTodosByStatus } from "../utils/fetch_api_funcs"

export const CompletedTodosPage = () => {

  const [completedTodos, setCompletedTodos] = useState([])

  useEffect(() => {
    getAllTodosByStatus(setCompletedTodos, 'complete')
  }, [])

  return (
    <div>
      <h2>Completed Todos Page</h2>
      <CompletedTodosList completedTodos={completedTodos} setCompletedTodos={setCompletedTodos} />
    </div>
  )
}