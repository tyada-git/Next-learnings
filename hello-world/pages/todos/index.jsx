import { useRouter } from "next/router";

const Todos = ({ data }) => {
  const router = useRouter();

  return (
    <>
      {data.todos.map((todo) => (
        <p key={todo.id} onClick={() => router.push(`/todos/${todo.id}`)}>
          {todo.todo}
        </p>
      ))}
    </>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch("https://dummyjson.com/todos");
  const data = await res.json();

  return { props: { data } };
};

export default Todos;
