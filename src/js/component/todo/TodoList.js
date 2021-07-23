export default function TodoList({ $app, initialState }) {
  this.state = initialState;
  this.$todoListTarget = document.createElement('section');
  this.$todoListTarget.className = 'main';
  $app.appendChild(this.$todoListTarget);

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render = () => {
    // console.log(this.state);
    const { todoList } = this.state;
    // console.log(todoList);
    const todoListTemplate = `<ul class= 'todo-list'>${todoList
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
      .join('')}</ul>`;

    this.$todoListTarget.innerHTML = todoListTemplate;
  };
}
