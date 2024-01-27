/* eslint-disable react/prop-types */

import { CopyToClipboard } from "react-copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";
import CopyIcon from "./CopyIcon";
const CommentList = ({ comments }) => {
  const getCopyNotif = () => {
    toast.success("Tersalin abangkuhh 🔥🔥 ");
  };

  return (
    <>
      <div className="flex flex-col space-y-4">
        {comments.map((comment, index) => (
          <div className="px-3 py-4 rounded shadow-md " key={index}>
            <CopyToClipboard text={comment} onCopy={getCopyNotif}>
              <div className="flex flex-row justify-between items-center cursor-pointer">
                <h1 className="font-semibold">{comment}</h1>
                <CopyIcon />
              </div>
            </CopyToClipboard>
          </div>
        ))}
      </div>
      <Toaster />
    </>
  );
};

export default CommentList;
