import CommentList from "./components/CommentList";
import Layout from "./components/Layout";
import { comments } from "./libs/data";

const App = () => {
  return (
    <Layout>
      <h1 className="font-bold text-center text-xl">
        Aku tau kamu gk jago main futsal, tapi setidaknya ketikanmu harus
        keliatan jago ya abangkuhh 🤙🤙
      </h1>
      <div className="mt-5">
        <CommentList comments={comments} />
      </div>
    </Layout>
  );
};

export default App;
