export default function TodoFilter({ $app, initialState }) {
  this.state = initialState;
  this.$todoFilterTarget = document.createElement('div');
  this.$todoFilterTarget.className = 'count-container';
  $app.appendChild(this.$todoFilterTarget);

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };
  this.render = () => {
    const todoFilterTemplate = `
      <span class="todo-count">총 <strong>0</strong> 개</span>
      <ul class="filters">
        <li>
          <a href="#" class="all selected">전체보기</a>
        </li>
        <li>
          <a href="#active" class="active">해야할 일</a>
        </li>
        <li>
          <a href="#completed" class="completed">완료한 일</a>
        </li>
      </ul>
      <button class="clear-completed">모두 삭제</button>`;

    this.$todoFilterTarget.innerHTML = todoFilterTemplate;
  };
}
