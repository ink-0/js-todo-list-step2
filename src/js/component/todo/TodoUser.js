export default function TodoUser({ $app, initialState }) {
  this.state = initialState;
  this.$todoUserTarget = document.createElement('section');
  this.$todoUserTarget.className = 'userapp';
  $app.appendChild(this.$todoUserTarget);

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };
  this.render = () => {
    const todoUserTemplate = `<div id="user-list">
      <button class="ripple active">makerjun</button>
      <button class="ripple">eastjun</button>
      <button class="ripple user-create-button" data-action="createUser">
        + 유저 생성
      </button>
      <button class="ripple user-delete-button" data-action="deleteUser">
        삭제 -
      </button>
    </div>`;
    this.$todoUserTarget.innerHTML = todoUserTemplate;
  };
}
