// we are doing SSR rendering here by exporting function getserverssideprops

const career = (props) => {
  console.log(props.res);
  const data = props.res.users;
  return (
    <>
      <h1>SSR Career </h1>
      <div>
        {data.map((user) => {
          return (
            <>
              <p key={user.id}>{user.email}</p>
              <p key={user.phone}>{user.university}</p>
            </>
          );
        })}
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const data = await fetch("https://dummyjson.com/users");
  const res = await data.json();
  //   const res = "hello world";
  return {
    props: {
      res,
    },
  };
};

export default career;
