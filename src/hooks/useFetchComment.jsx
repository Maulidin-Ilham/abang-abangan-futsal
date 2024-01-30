import { useEffect } from "react";
import { useState } from "react";

const useFetchComment = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const res = await fetch("https://salin-abangku.vercel.app/api/all");
        const commentsData = await res.json();
        setComments(commentsData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchComment();
  }, []);

  return { comments };
};

export default useFetchComment;
