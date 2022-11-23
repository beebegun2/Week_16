import { updateTodo } from "../utils/fetch_api_funcs"
import { NewTodo } from "./NewTodo"

export const NewTodosList = (props) => {

  const onChangeToInProgress = (changingTodo) => {
    const newTodos = props.newTodos.filter((newTodo) => newTodo.id !== changingTodo.id)
    props.setNewTodos(newTodos)
    updateTodo({...changingTodo, status: 'inProgress'})
  }

  return (
    <>
      {
        props.newTodos.map((newTodo, i) => (
          <NewTodo key={i} newTodo={newTodo} onChangeToInProgress={onChangeToInProgress} />
        ))
      }
    </>
  )
}