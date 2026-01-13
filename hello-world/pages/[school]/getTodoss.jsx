import { useState } from "react";
import IndividualTodo from "./IndividualTodo";
const getTodos = ({ data }) => {
  const [todos, setTodos] = useState(data.todos);
  const [showIndividual, setShowIndividual] = useState(null);
  const handleTodoClick = (id) => {
    setShowIndividual(id);
    // <IndividualTodo id={id} />;
  };
  return (
    <>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <p onClick={() => handleTodoClick(todo.id)}>{todo.todo}</p>
          </div>
        );
      })}
      {showIndividual && <IndividualTodo id={showIndividual} />}
    </>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch("https://dummyjson.com/todos");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
export default getTodos;
