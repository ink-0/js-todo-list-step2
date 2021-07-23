import { getUserList, postUser } from '../../api/api.js';

export default function TodoUser({ $app, initialState }) {
  this.state = initialState;
  this.$todoUserTarget = document.createElement('section');
  this.$todoUserTarget.className = 'userapp';
  this.isAddUser = true;
  $app.appendChild(this.$todoUserTarget);

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.$todoUserTarget.addEventListener('click', (e) => {
    const $node = e.target;
    if ($node.classList[1] === 'user-create-button') {
      // console.log($node);
      this.isAddUser = !this.isAddUser;
      this.render();
    }
  });

  this.$todoUserTarget.addEventListener('keydown', async (e) => {
    const $node = e.target;
    if ($node.className === 'user-input') {
      if (e.keyCode === 13) {
        console.log($node.value);
        const hi = await postUser($node.value);
        console.log('*****', hi);
        this.render();
      }
    }
  });

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
      ${
        this.isAddUser
          ? `<input class='user-input' placeholder='최소 2글자'/>`
          : ''
      }
    </div>`;
    this.$todoUserTarget.innerHTML = todoUserTemplate;
  };
}
