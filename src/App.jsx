import useFetchComment from "./hooks/useFetchComment";

const App = () => {
  const { comments } = useFetchComment();
  console.log(comments);
  return (
    <>
      <h1 className="text-center font-semibold text-2xl">hello</h1>
      {comments.map((comment, index) => (
        <h1 key={index}>{comment}</h1>
      ))}
    </>
  );
};

export default App;
