import './App.css';
import Header from './MyComponents/Header';
import { Todo } from './MyComponents/Todo'; // ✅ Use Todo
import { Footer } from './MyComponents/Footer';
import { useState } from 'react';

function App() {

  const onDelete = (todo)=>{
    console.log("I am onDelete of todo", todo);
    setTodos(todos.filter((e)=>{
      return e !== todo;
    }));
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to get this job done"
    },
    {
      sno: 2,
      title: "Go to the gym",
      desc: "You need to go to the gym to get this job done"
    },
    {
      sno: 3,
      title: "Go to the school",
      desc: "You need to go to the school to get this job done"
    }
  ]);

  return (
    <>
      <Header title="My ToDo's List" searchBar={false} />
      <Todo todos={todos} onDelete={onDelete} /> {/* ✅ Pass full array to Todo */}
      <Footer />
    </>
  );
}

export default App;
