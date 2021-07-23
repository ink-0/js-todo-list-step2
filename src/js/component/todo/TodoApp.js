import TodoFilter from './TodoFilter.js';
import TodoList from './TodoList.js';

export default function TodoApp({ $app, initialState }) {
  this.state = initialState;
  this.$todoAppTarget = document.createElement('section');
  this.$todoAppTarget.className = 'todoapp';
  $app.appendChild(this.$todoAppTarget);

  this.setState = (newState) => {
    this.state = newState;
    todoList.setState(newState);
    todoFilter.setState(newState);
    render();
  };

  const todoList = new TodoList({
    $app: this.$todoAppTarget,
    initialState: this.state,
  });

  const todoFilter = new TodoFilter({
    $app: this.$todoAppTarget,
    initialState: this.state,
  });

  const render = () => {};
}
