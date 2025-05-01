import { useRouter } from "next/router";

const School = () => {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <button onClick={() => router.push("/school/admission")}>
        Go to Admission
      </button>
      <button onClick={() => router.push("/school/fees")}>Go to Fees</button>
    </>
  );
};

export default School;
