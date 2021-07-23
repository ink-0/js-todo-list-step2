import { getUserList } from '../../api/api.js';

export default function TodoUser({ $app, initialState }) {
  this.state = initialState;
  this.$todoUserTarget = document.createElement('section');
  this.$todoUserTarget.className = 'userapp';
  $app.appendChild(this.$todoUserTarget);

  this.setState = (newState) => {
    this.state = newState;

    this.render();
  };
  this.render = async () => {
    const userList = await getUserList();

    const todoUserTemplate = `<div id="user-list">${userList.map(
      (user) => `<button class="ripple" id=${user._id}>${user.name}</button>`
    )}
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
