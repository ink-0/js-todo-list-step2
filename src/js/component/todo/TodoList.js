export default function TodoList({ $app, initialState }) {
  this.state = initialState;
  this.$todoListTarget = document.createElement('ul');
  this.$todoListTarget.className = 'todo-list';
  $app.appendChild(this.$todoListTarget);
  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };
  this.render = () => {
    console.log(this.state);
    const { todoList } = this.state;
    console.log(todoList);
    const todoListTemplate = `${todoList
      .map(
        (todo) =>
          `<li>
    <div class="view">
      <input class="toggle" type="checkbox" />
      <label class="label">
        <span class="chip primary">1순위</span>
        ${todo.contents}
      </label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="완료된 타이틀" />
  </li>`
      )
      .join('')}`;

    this.$todoListTarget.innerHTML = todoListTemplate;
  };
}
