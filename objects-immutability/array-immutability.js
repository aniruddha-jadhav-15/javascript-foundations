// Immutable Array Operations

const todos = [
  { id: 1, title: "Learn JS", completed: false },
  { id: 2, title: "Practice React", completed: false },
  { id: 3, title: "Build Project", completed: false },
];

// Mark id=2 as completed
const updatedTodos = todos.map((todo) =>
  todo.id === 2 ? { ...todo, completed: true } : todo,
);

// Remove id=1
const filteredTodos = todos.filter((todo) => todo.id !== 1);

// Add new todo
const addedTodo = [
  ...todos,
  { id: 4, title: "Apply for Jobs", completed: false },
];

// Combined transformation
const finalTodos = [
  ...todos
    .map((todo) => (todo.id === 2 ? { ...todo, completed: true } : todo))
    .filter((todo) => todo.id !== 1),
  { id: 4, title: "Apply for Jobs", completed: false },
];

console.log(finalTodos);
