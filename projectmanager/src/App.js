import React, {Component} from 'react';
import Todos from './components/Todos';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import { v4 as uuidv4 } from 'uuid';

import './App.css';


class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Study React",
        completed: false
      },
      {
        id: uuidv4(),
        title: "Subir a Platino",
        completed: false
      },
      {
        id: uuidv4(),
        title: "Carrear al mono",
        completed: false
      },
      {
        id: uuidv4(),
        title: "Tocar Piano",
        completed: false
      }
    ]
  }

  //Toggle Complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    this.setState({ todos:[...this.state.todos, newTodo] })
  }

  render() {
    return (

      <div className="App">
        <div className='container'>
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} delTodo={this.delTodo} markComplete={this.markComplete} />
        </div>
      </div>
    );
  }
}



export default App;
