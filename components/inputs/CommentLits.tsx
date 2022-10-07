export interface CommentListProps {
  _id: string;
  email: string;
  text: string;
  name: string;
}

const CommentList = ({ items }: { items: CommentListProps[] }) => {
  return (
    <ul className="flex flex-col gap-[1rem]">
      {items.map((item) => (
        <li
          key={item._id}
          className="text-left justify-between flex py-[0.5rem] border-b-[2px] border-gray-400"
        >
          <p>{item.text}</p>
          <div className="flex gap-2">
            By <address>{item.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
