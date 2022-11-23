const mockapiURL = process.env.REACT_APP_MOCK_API_URL

// TODO: handle functionality of good and bad responses on the fetch calls

// setTodos: setter to set the component state with an array of todos
// status: is string 'newTodo' || 'in-progress' || 'completed'
export const getAllTodosByStatus = async (setTodos, status) => {
  const res = await fetch(mockapiURL)
  if (res.status === 200) {
    const dataArray = await res.json()
    const filteredArray = dataArray.filter((todo) => todo.status === status)
    setTodos(filteredArray)
  }
  else {
    console.log(res.statusText)
  }
}

export const createNewTodo = async (todoBody) => {
  const res = await fetch(mockapiURL, {
    headers: {'Content-Type': 'application/json'},
    method: 'POST',
    body: JSON.stringify(todoBody)
  })
  if (res.status === 201) {
    return
  }
  else {
    console.log(res.statusText)
  }
}

export const updateTodo = async (todo) => {
  const res = await fetch(`${mockapiURL}/${todo.id}`, {
    headers: {'Content-Type': 'application/json'},
    method: 'PUT',
    body: JSON.stringify(todo)
  })
  if (res.status === 200) {
    return
  }
  else {
    console.log(res.statusText)
  }
}

export const deleteTodo = async (todoId) => {
  const res = await fetch(`${mockapiURL}/${todoId}`, {
    method: 'DELETE'
  })
  if (res.status === 200) {
    return
  }
  else {
    console.log(res.statusText)
  }
}