/* eslint-disable react/prop-types */
const CommentList = ({ comments }) => {
  return (
    <>
      <div className="flex flex-col space-y-4">
        {comments.map((comment, index) => (
          <div key={index} className="px-3 py-4 rounded shadow-md">
            <h1 className="font-semibold">{comment}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default CommentList;
