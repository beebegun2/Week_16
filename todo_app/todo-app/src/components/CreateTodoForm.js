import {useState} from 'react';
import { Button, Form } from 'react-bootstrap';
import { createNewTodo } from '../utils/fetch_api_funcs';

export const CreateTodoForm = () => {

  const [todoText, setTodoText] = useState('')

  const submitNewTodo = (e) => {
    e.preventDefault()
    const newTodo = {
      text: todoText,
      notes: '',
      status: 'new'
    }
    createNewTodo(newTodo);
    setTodoText('')
  }

  return (
    <Form style={{display: 'flex'}}>
      <Form.Control
        type='text'
        size='sm'
        onChange={(e) => setTodoText(e.target.value)}
        placeholder='Todo task...'
        value={todoText}
      />
      <Button onClick={submitNewTodo}>Submit</Button>
    </Form>
  )
}