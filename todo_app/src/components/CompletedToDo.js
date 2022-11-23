import { Button, Card } from "react-bootstrap"

export const CompletedTodo = (props) => {

  return (
    <Card border='primary' style={{margin: 8}}>
      <Card.Header>
        <Card.Title>Todo: {props.completedTodo.text}</Card.Title>
        <Card.Subtitle>Status: {props.completedTodo.status}</Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <Card.Text>Notes: {props.completedTodo.notes}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button onClick={() => props.onDeleteTodo(props.completedTodo.id)}>Delete Todo</Button>
      </Card.Footer>
    </Card>
  )
}