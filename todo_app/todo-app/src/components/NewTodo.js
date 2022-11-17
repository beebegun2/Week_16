import { Button, Card } from "react-bootstrap"

export const NewTodo = (props) => {

  return (
    <Card border='primary' style={{margin: 8}}>
      <Card.Header>
        <Card.Title>Todo: {props.newTodo.text}</Card.Title>
        <Card.Subtitle>Status: {props.newTodo.status}</Card.Subtitle>
      </Card.Header>
      <Card.Footer>
        <Button onClick={() => props.onChangeToInProgress(props.newTodo)}>Change to InProgress</Button>
      </Card.Footer>
    </Card>
  )
}