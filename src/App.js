import { AddTodo } from "./Components/AddTodo";
import { TodoDetail } from "./Components/TodoDetail";
import { TodoList } from "./Components/TodoList";

function App() {
  return (
    <div className="App max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <AddTodo />
      <TodoList />
      <TodoDetail />
      </div>
  );
}

export default App;
