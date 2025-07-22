import React from 'react'
import {TodoItem} from './TodoItem';

const myStyle = {
  minHeight: "40vh",
  margin: "40px auto"
}

export const Todo = (props) => {
  return (   
    <div className='container' style={myStyle}>
          <h3 className='my-3'>Todos List</h3>
          { props.todos.length === 0 ? "No todos to display" : props.todos.map((todo)=>{
            return (
              <>
                <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
                <hr/>
              </>
              )
            })
          }
    </div>
  )
}