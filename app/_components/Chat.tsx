import Header from "./Header";
import {Action} from "@/app/_components/Action";

const Chat = () => {
  return (
    <div className="bg-brand-light grow p-5 items-start flex flex-col">
      <Header />

      <Action />
    </div>
  );
};

export default Chat;
