import { useEffect, useState } from "react";

const IndividualTodo = ({ id }) => {
  const [todos, setTodos] = useState([]);

  const ft = async () => {
    const res = await fetch(`https://dummyjson.com/todos/${id}`);
    const data = await res.json();
    setTodos(data);
    console.log("fetching data for todo id:", id);
  };
  useEffect(() => {
    ft();
  }, [id]);

  return (
    <>
      hello from each{id}
      {todos.todo}
      {todos.completed ? "yes" : "no"}
    </>
  );
};

// export const getServerSideProps = async () => {
//   const res = await fetch(`https://dummyjson.com/todos/${id}`);
//   const data = await res.json();
//   return {
//     props: {
//       data,
//     },
//   };
// };
export default IndividualTodo;
