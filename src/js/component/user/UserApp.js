export default function UserApp({ $app, initialState }) {
  this.state = initialState;
  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };
  this.render = () => {};
}
