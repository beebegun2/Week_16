import { updateTodo } from "../utils/fetch_api_funcs"
import { InProgressTodo } from "./InProgressTodo"

export const InProgressTodosList = (props) => {

  const onChangeToComplete = (changingTodo) => {
    const inProgressTodos = props.inProgressTodos.filter((inProgressTodo) => inProgressTodo.id !== changingTodo.id)
    props.setInProgressTodos(inProgressTodos)
    updateTodo({...changingTodo, status: 'complete'})
  }

  return (
    <>
      {
        props.inProgressTodos.map((inProgressTodo, i) => (
          <InProgressTodo key={i} inProgressTodo={inProgressTodo} onChangeToComplete={onChangeToComplete} />
          ))
      }
    </>
  )
}