import './App.css';
import Header from './MyComponents/Header';
import { Todo } from './MyComponents/Todo'; // ✅ Use Todo
import { Footer } from './MyComponents/Footer';
import { useState, useEffect } from 'react';
import { AddToDo } from './MyComponents/AddToDo';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const onDelete = (todo)=>{
    setTodos(todos.filter((e)=>{
      return e !== todo;
    }));
  }

  const addTodo = (title, desc)=>{
    let sno = todos.length + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
  }

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Header title="My ToDo's List" searchBar={false} />
      <AddToDo addTodo={addTodo} />
      <Todo todos={todos} onDelete={onDelete} /> {/* ✅ Pass full array to Todo */}
      <Footer />
    </>
  );
}

export default App;
console.log("Hello World");