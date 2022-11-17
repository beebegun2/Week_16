import { useEffect, useState } from "react"
import { Button, Card, Form } from "react-bootstrap"
import { updateTodo } from "../utils/fetch_api_funcs"

export const InProgressTodo = (props) => {

  const [notesText, setNotesText] = useState('')

  useEffect(() => {
    setNotesText(props.inProgressTodo.notes)
  }, [props.inProgressTodo.notes])

  const updateNotes = (e) => {
    e.preventDefault()
    updateTodo({...props.inProgressTodo, notes: notesText})
  }

  return (
    <Card>
      <Card.Header>
        <Card.Title>Todo: {props.inProgressTodo.text}</Card.Title>
        <Card.Subtitle>Status: {props.inProgressTodo.status}</Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <Form>
          <Form.Label>Notes: {' '}</Form.Label>
          <Form.Control
          type='text'
          as='textarea'
          placeholder='Notes for task...'
          onChange={(e) => setNotesText(e.target.value)}
          value={notesText}
          />
          <Button onClick={updateNotes}>Update Notes</Button>
        </Form>
      </Card.Body>
      <Card.Footer>
        <Button onClick={()=> props.onChangeToComplete(props.inProgressTodo)}>Change To Complete</Button>
      </Card.Footer>
    </Card>
  )
}