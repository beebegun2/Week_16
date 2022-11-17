import { useEffect, useState } from 'react';
import { NewTodosList } from '../components/NewTodosList';
import { getAllTodosByStatus } from '../utils/fetch_api_funcs';

export const NewTodosPage = () => {

  const [newTodos, setNewTodos] = useState([])

  useEffect(() => {
    getAllTodosByStatus(setNewTodos, 'new')
  },[])

  return (
    <div>
      <h2>New Todos Page</h2>
      <NewTodosList newTodos={newTodos} setNewTodos={setNewTodos} />
    </div>
  )
}