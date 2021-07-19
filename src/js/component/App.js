import TodoTitle from './TodoTitle.js';

export default function App($app) {
  this.state = {
    todoes: [],
  };
  this.setState = (newState) => {
    todoTitle.setState(newState);
  };

  const todoTitle = new TodoTitle({
    $app,
    initialState: this.state,
  });

  const init = () => {
    this.setState({
      ...this.state,
    });
  };
  init();
}
