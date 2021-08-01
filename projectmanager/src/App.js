import React, {Component} from 'react';
import Todos from './components/Todos'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Study React",
        completed: false
      },
      {
        id: 2,
        title: "Subir a Platino",
        completed: false
      },
      {
        id: 3,
        title: "Carrear al mono",
        completed: false
      },
      {
        id: 4,
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

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} delTodo={this.delTodo} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
