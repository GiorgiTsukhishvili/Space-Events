import React, { useState } from "react";

interface CommentData {
  email: string;
  text: string;
  name: string;
}

const NewComment = ({
  onAddComment,
}: {
  onAddComment: (data: CommentData) => void;
}) => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [commentData, setCommentData] = useState<CommentData>({
    email: "",
    text: "",
    name: "",
  });

  const sendCommentHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !commentData.email ||
      commentData.email.trim() === "" ||
      !commentData.email.includes("@") ||
      !commentData.name ||
      commentData.name.trim() === "" ||
      !commentData.text ||
      commentData.text.trim() === ""
    ) {
      setIsInvalid(true);
      return;
    }

    onAddComment(commentData);
  };

  const changeData = (key: string, value: string) => {
    setCommentData((prevData) => {
      return { ...prevData, [key]: value };
    });
  };

  return (
    <form
      onSubmit={sendCommentHandler}
      className="my-[2rem] text-white rounded-[8px]  bg-purple-600 shadow-md p-[1rem] px-6 "
    >
      <div className="flex gap-[1rem] flex-wrap">
        <div className="mb-[0.5rem] flex flex-col min-w-[10rem]">
          <label htmlFor="email">Your email</label>
          <input
            type="email"
            id="email"
            value={commentData.email}
            className="focus:outline-none rounded-[8px] px-[5px] py-[2px]"
            onChange={(e) => changeData("email", e.target.value)}
          />
        </div>
        <div className="mb-[0.5rem] flex flex-col min-w-[10rem]">
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            value={commentData.name}
            className="focus:outline-none rounded-[8px] px-[5px] py-[2px]"
            onChange={(e) => changeData("name", e.target.value)}
          />
        </div>
      </div>
      <div className="mb-[0.5rem] flex flex-col min-w-[10rem]">
        <label htmlFor="comment">Your comment</label>
        <textarea
          id="comment"
          rows={5}
          value={commentData.text}
          className="focus:outline-none rounded-[8px] px-[5px] py-[2px]"
          onChange={(e) => changeData("comment", e.target.value)}
        ></textarea>
      </div>
      {isInvalid && <p>Please enter a valid email address and comment!</p>}
      <button className="bg-white text-black py-1 mt-2 px-4 rounded-[8px]">
        Submit
      </button>
    </form>
  );
};

export default NewComment;
