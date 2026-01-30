import {AnimatePresence, motion} from "motion/react";

type chatsProps = {
  isExpanded: boolean;
};

const RecentChats = ({ isExpanded }: chatsProps) => {
  return (
    <AnimatePresence>
      {isExpanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <h5 className="my-4">Chats</h5>
          <ul className="">
            <li className="px-4 py-2 hover:bg-brand-gray rounded-2xl text-zinc-900 font-medium text-[0.85rem] cursor-pointer transition-colors">
              Chat History 1
            </li>
            <li className="px-4 py-2 hover:bg-brand-gray rounded-2xl text-zinc-900 font-medium text-[0.85rem] cursor-pointer transition-colors">
              Chat History 2
            </li>
            <li className="px-4 py-2 hover:bg-brand-gray rounded-2xl text-zinc-900 font-medium text-[0.85rem] cursor-pointer transition-colors">
              Chat History 3
            </li>
            <li className="px-4 py-2 hover:bg-brand-gray rounded-2xl text-zinc-900 font-medium text-[0.85rem] cursor-pointer transition-colors">
              Chat History 4
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RecentChats;
