'use client'
import {useRef, useState} from 'react';
import {InputOptions} from "@/app/_components/InputOptions";

export const InputField = () => {
    const [text, setText] = useState("");
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const target = e.target;
        setText(target.value);

        target.style.height = "auto";
        const nextHeight = Math.min(target.scrollHeight, 300);
        target.style.height = `${nextHeight}px`;
    };

    return (
        <div className="relative w-full h-fit rounded-[30px] border border-brand-gray bg-white px-6 pb-3 pt-5 shadow-md">
            <textarea
                ref={textareaRef}
                value={text}
                onChange={handleInput}
                rows={1}
                placeholder="Ask Gemini 3"
                className="w-full resize-none bg-transparent px-3 text-lg leading-relaxed text-brand-dark-gray outline-none placeholder:text-brand-gray-dark"
                style={{ minHeight: '44px' }}
            />
            <InputOptions text={text}/>
        </div>
    );
};