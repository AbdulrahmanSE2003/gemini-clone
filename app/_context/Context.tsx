'use client'

import {createContext, ReactNode, useState} from "react";
import {runChat} from "@/app/config/config";

interface ContextType {
    onSent: (prompt: string) => Promise<void>;
    text:string;
    setText:(value:string) => void;
    messages:MessageTypes[];
    setMessages: (value:MessageTypes[])=> void,
    isLoading: boolean,
}

export const context= createContext<ContextType | null>(null)

type ContextProps = {
    children: ReactNode;
}

interface MessageTypes  {
    role:string;
    text:string;
}

const ContextProvider= ({children}:ContextProps)=>{
    const [text, setText] = useState('')
    const [messages, setMessages] = useState<MessageTypes[]>([])
    const [isLoading, setIsLoading] = useState(false)


    const onSent = async (prompt: string) => {
        if (!prompt.trim()) return;

        setIsLoading(true);

        try {
            const userMsg = { role: 'user', text: prompt };
            setMessages(prev => [...prev, userMsg]);
            setText('');

            const res = await runChat(prompt);

            const botMsg = { role: 'bot', text: res! };
            setMessages(prev => [...prev, botMsg]);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };
    return (<context.Provider value={{text, setText, onSent, messages, setMessages, isLoading}}>{children}</context.Provider>)
}

export default ContextProvider;