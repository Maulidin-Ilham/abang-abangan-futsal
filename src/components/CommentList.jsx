/* eslint-disable react/prop-types */

import { CopyToClipboard } from "react-copy-to-clipboard";

const CommentList = ({ comments }) => {
  return (
    <>
      <div className="flex flex-col space-y-4">
        {comments.map((comment, index) => (
          <CopyToClipboard key={index} text={comment}>
            <div className="px-3 py-4 rounded shadow-md cursor-pointer">
              <h1 className="font-semibold">{comment}</h1>
            </div>
          </CopyToClipboard>
        ))}
      </div>
    </>
  );
};

export default CommentList;
