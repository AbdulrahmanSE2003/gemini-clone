'use client'

import Header from "./Header";
import { Action } from "@/app/_components/Action";
import TextSection from "@/app/_components/TextSection";
import { useContext } from "react";
import { context } from "@/app/_context/Context";

const Chat = () => {
  const { messages } = useContext(context)!
  return (
    <div className={`${messages.length ? "bg-white" : "bg-brand-light"} flex flex-col transition-colors duration-300 h-screen w-full relative`}>
      {/* If messages exist, this container grows and scrolls. If not, it just takes necessary space (Header) */}
      <div className={`${messages.length ? "flex-1 overflow-y-auto pb-32" : ""} p-5`}>
        <Header />
        <TextSection />
      </div>
      <Action />
    </div>
  );
};

export default Chat;
