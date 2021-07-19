export default function TodoTitle({ $app, initialState }) {
  this.state = initialState;

  this.$titleTarget = document.createElement('div');
  $app.appendChild(this.$titleTarget);

  this.setState = (newState) => {
    this.state = newState;
    render();
  };
  const render = () => {
    const titleTemplate = `<h1 id="user-title" data-username="eastjun">
    <span><strong>eastjun</strong>'s Todo List</span>
  </h1>`;

    this.$titleTarget.innerHTML = titleTemplate;
  };
}
