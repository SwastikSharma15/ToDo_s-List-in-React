import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const AddToDo = ({addTodo}) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e)=>{
    e.preventDefault();
    if(!title || !desc){
      alert("Title or Description cannot be empty");
    }
    addTodo(title, desc);
  }

  return (
    <>
    <div className="container my-3">
      <h3 className='my-3'>Add a Todo</h3>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control placeholder="Title" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control placeholder="Description" value={desc} onChange={(e)=>{setDesc(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Button variant="primary" type="submit" className='btn-sm' onClick={submit}>Add Todo</Button>
      </Form.Group>
      </div>
    </>
  )
}
