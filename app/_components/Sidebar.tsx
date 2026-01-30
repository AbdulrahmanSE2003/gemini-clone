"use client";
import { AnimatePresence, motion } from "motion/react";

import { useState } from "react";
import { Menu, MessageSquarePlus, Search, Settings } from "lucide-react";
import Button from "./Button";
import RecentChats from "./RecentChats";
import ButtonItem from "./ButtonItem";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <motion.div
      animate={{ width: isExpanded ? 308 : 72 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`bg-brand-light-2 flex flex-col pl-4.5 px-6 py-5 gap-6 `}
    >
      {/* Header Menu  */}
      <div className={`flex justify-start items-center w-full`}>
        <Button onClick={() => setIsExpanded((prev) => !prev)}>
          <Menu size={18} />
        </Button>
        <AnimatePresence>
          {isExpanded && (
            <Button isMotioned>
              <Search size={18} />
            </Button>
          )}
        </AnimatePresence>
      </div>

      {/* New Chat */}
      <div className="flex justify-start items-center">
        <ButtonItem
          isExpanded={isExpanded}
          icon={<MessageSquarePlus size={18} />}
        >
          New chat
        </ButtonItem>
      </div>

      {/* Recent Chats */}
      <RecentChats isExpanded={isExpanded} />
      <div className="mt-auto flex items-center">
        <ButtonItem isExpanded={isExpanded} icon={<Settings size={17} />}>
          Settings & help
        </ButtonItem>
      </div>
    </motion.div>
  );
};

export default Sidebar;
