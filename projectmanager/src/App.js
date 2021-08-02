import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import About from './components/About';

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
      <Router>
        <div className="App">
          <div className='container'>
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} delTodo={this.delTodo} markComplete={this.markComplete} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}



export default App;
