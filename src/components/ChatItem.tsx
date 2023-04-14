import Image from "next/image";

interface Props {
  name: string;
  chatt: string;
  image: string;
}

const ChatItem = ({ name, chatt, image }: Props) => {
  return (
    // <div className="w-full text-sm break-words">
    //   <span className="text-neutral-600 dark:text-neutral-400 mr-1">
    //     {name}:
    //   </span>
    //   {chatt}
    // </div>
    <div className="w-full flex space-x-2 text-sm">
      <div className="mt-1">
        <Image
          src={image}
          alt="..."
          width={25}
          height={25}
          className="rounded-full min-w-[25px]"
        />
      </div>
      <div className="flex flex-col space-y-2 p-2 bg-slate-100 rounded-r-lg rounded-bl-lg">
        <p className="font-medium">{name}</p>
        <p>{chatt}</p>
      </div>
    </div>
  );
};

export default ChatItem;
