import {context} from "@/app/_context/Context";
import {useContext} from "react";
import {UserMessage} from "@/app/_components/UserMessage";
import {GeminiResponse} from "@/app/_components/GeminiResponse";

const TextSection = () => {

    const {messages} = useContext(context)!
    return (
        <div className="flex flex-col w-full max-w-4xl mx-auto gap-10 py-10">
            {messages.map((message, i)=> message.role === 'user' ? (<UserMessage  key={i} text={message.text}/>) : <GeminiResponse key={i } text={message.text}/>)}
        </div>
    );
};

export default TextSection;