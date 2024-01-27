import Layout from "./components/Layout";
import useFetchComment from "./hooks/useFetchComment";

const App = () => {
  const { comments } = useFetchComment();
  console.log(comments);
  return (
    <Layout>
      <h1 className="font-semibold text-center">
        Aku tau kamu gk jago main futsal, tapi setidaknya ketikanmu harus
        keliatan jago ya abangkuhh 🤙🤙
      </h1>
      {comments.map((comment, index) => (
        <h1 key={index}>{comment}</h1>
      ))}
    </Layout>
  );
};

export default App;
