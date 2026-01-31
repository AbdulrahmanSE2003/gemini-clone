'use client'

import Header from "./Header";
import {Action} from "@/app/_components/Action";
import TextSection from "@/app/_components/TextSection";
import {useContext} from "react";
import {context} from "@/app/_context/Context";

const Chat = () => {
    const {messages} = useContext(context)!
  return (
    <div className={`${messages.length ? "bg-white" :"bg-brand-light"} grow p-5 items-start flex flex-col transition-colors duration-300 grow overflow-y-auto h-screen`}>
      <Header />

        <TextSection/>

      <Action />
    </div>
  );
};

export default Chat;
