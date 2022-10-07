import classes from "./comment-list.module.css";

const CommentList = () => {
  return (
    <ul className="flex flex-col gap-[1rem]">
      {/* Render list of comments - fetched from API */}
      <li className="text-left py-[0.5rem] border-b-[2px] border-gray-400">
        <p>My comment is amazing!</p>
        <div>
          By <address>Maximilian</address>
        </div>
      </li>
      <li className="text-left py-[0.5rem] border-b-[2px] border-gray-400">
        <p>My comment is amazing!</p>
        <div>
          By <address>Maximilian</address>
        </div>
      </li>
    </ul>
  );
};

export default CommentList;
