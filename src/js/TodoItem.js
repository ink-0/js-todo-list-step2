export default function TodoItem(todoText) {
  this.id = Date.now().toString();
  this.contents = todoText;
  this.completed = false;
} 