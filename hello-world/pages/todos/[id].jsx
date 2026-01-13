const IndividualTodo = ({ data }) => {
  return (
    <>
      <h3>{data.todo}</h3>
      <p>Completed: {data.completed ? "Yes" : "No"}</p>
    </>
  );
};

export const getServerSideProps = async (context) => {
  console.log("Context params:", context);
  const { id } = context.params;

  const res = await fetch(`https://dummyjson.com/todos/${id}`);
  const data = await res.json();

  return { props: { data } };
};

export default IndividualTodo;
