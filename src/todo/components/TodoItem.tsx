import { Todo } from "../interfaces/interfaces";
import { useTodos } from "../hooks/useTodos";
// import { useContext } from "react";
// import { TodoContext } from "../context/TodoContext";

interface props {
  todo: Todo;
}

export const TodoItem = ({ todo }: props) => {
  // const { toggleTodo } = useContext(TodoContext);
  const { toggleTodo } = useTodos();

  // const handleDbClick = () => {
  //   toggleTodo(todo.id);
  // console.log("handleDbClick:", todo.desc);
  // };

  return (
    <li
      style={{
        cursor: "pointer",
        textDecoration: todo.completed ? "line-through" : "",
      }}
      onDoubleClick={() => toggleTodo(todo.id)}
    >
      {todo.desc}
    </li>
  );
};
