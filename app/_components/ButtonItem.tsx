'use client'

import {AnimatePresence, motion} from "motion/react";
import {ReactElement, ReactNode} from "react";
import Button from "./Button";

type ButtonItemProps = {
  isExpanded: boolean;
  children: ReactNode;
  icon: ReactElement;
};

const ButtonItem = ({ isExpanded, children, icon }: ButtonItemProps) => {
  return (
    <div className={`flex-center`}>
      <Button>{icon}</Button>
      <AnimatePresence mode="wait">
        {isExpanded && (
          <motion.span
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className={`overflow-hidden`}
          >
            {children}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ButtonItem;
