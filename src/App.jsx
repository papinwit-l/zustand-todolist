import TodoList from "./components/TodoList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <ToastContainer />
      <NavBar />
      <TodoList />
    </>
  );
}

export default App;
