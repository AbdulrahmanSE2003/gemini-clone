'use client'
import { useContext, useEffect, useRef } from 'react'; // ضفنا useEffect
import { InputOptions } from "@/app/_components/InputOptions";
import { context } from "@/app/_context/Context";

export const InputField = () => {
    const { text, setText, messages } = useContext(context)!
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (text === "" && textareaRef.current) {
            textareaRef.current.style.height = "44px";
        }
    }, [text]);

    const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const target = e.target;
        setText(target.value);

        target.style.height = "auto";
        target.style.height = `${Math.min(target.scrollHeight, 300)}px`;
    };

    return (
        <div className={`relative w-full bg-white rounded-[32px] px-4 py-3 border border-brand-dark-gray/15 ${messages.length ? 'shadow-[0_-10px_40px_rgba(0,0,0,0.04)]' : 'shadow-lg'}`}>
            <textarea
                ref={textareaRef}
                value={text}
                onChange={handleInput}
                rows={1}
                placeholder="Ask Gemini 3"
                className="w-full resize-none bg-transparent pt-3 px-3 text-lg leading-relaxed text-zinc-800 outline-none placeholder:text-zinc-400"
                style={{ minHeight: '44px' }}
            />
            <div className="flex justify-between items-center mt-2">
                <InputOptions />
            </div>
        </div>
    );
};