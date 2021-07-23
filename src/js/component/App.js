import TodoApp from './todo/TodoApp.js';
import TodoTitle from './TodoTitle.js';
import TodoUser from './todo/TodoUser.js';
export default function App($app) {
  this.state = {
    _id: 'GRSsVg5Ai',
    name: 'xzcvxzcvzxcv',
    todoList: [
      {
        _id: 'bHXUJqoIH',
        contents: 'ㅁㄴ',
        isCompleted: false,
        priority: 'FIRST',
      },
      {
        _id: 'fzWkLl-Um2',
        contents: 'ㄴㅁㅇ',
        isCompleted: false,
        priority: 'NONE',
      },
    ],
  };

  this.setState = (newState) => {
    todoTitle.setState(newState);
    todoUser.setState(newState);
    todoApp.setState(newState);
  };

  const todoTitle = new TodoTitle({
    $app,
    initialState: this.state,
  });

  const todoUser = new TodoUser({
    $app,
    initialState: this.state,
  });

  const todoApp = new TodoApp({
    $app,
    initialState: this.state,
  });

  const init = async () => {
    this.setState({
      ...this.state,
    });
  };
  init();
}
