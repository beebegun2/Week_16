import { deleteTodo } from "../utils/fetch_api_funcs"
import { CompletedTodo } from "./CompletedTodo"

export const CompletedTodosList = (props) => {

  const onDeleteTodo = (completedTodoId) => {
    const completedTodos = props.completedTodos.filter((completedTodo) => completedTodo.id !== completedTodoId)
    props.setCompletedTodos(completedTodos)
    deleteTodo(completedTodoId)
  }

  return (
    <>
      {
        props.completedTodos.map((completedTodo, i) => (
          <CompletedTodo key={i} completedTodo={completedTodo} onDeleteTodo={onDeleteTodo} />
        ))
      }
    </>
  )
}