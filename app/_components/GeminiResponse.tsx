'use client'
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";

type ResProps = {
    text?: string;
    isLoading?: boolean;
}

export const GeminiResponse = ({ text = "", isLoading = false }: ResProps) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        if (!isLoading && text) {
            let i = 0;
            setDisplayedText(""); // بنصفر النص في البداية

            const interval = setInterval(() => {
                // بنزود حرف كل 15 ملي ثانية
                setDisplayedText(text.slice(0, i + 1));
                i++;

                if (i >= text.length) {
                    clearInterval(interval);
                }
            }, 15);

            return () => clearInterval(interval);
        }
    }, [text, isLoading]);

    return (
        <div className="flex gap-4 px-4 items-start w-full transition-all">
            <div className="min-w-[24px] pt-1">
                <Image
                    src="/logo.png"
                    alt="Gemini"
                    width={24}
                    height={24}
                    className={isLoading ? "animate-spin" : ""}
                />
            </div>

            <div className="flex flex-col gap-3 w-full overflow-hidden text-zinc-800">
                {isLoading ? (
                    /* اللودر بتاعك الشيك */
                    <div className="flex flex-col gap-2 w-full animate-pulse">
                        <div className="h-4 bg-linear-to-r from-blue-100 via-zinc-200 to-blue-100 rounded-md w-[90%]" />
                        <div className="h-4 bg-linear-to-r from-blue-100 via-zinc-200 to-blue-100 rounded-md w-full" />
                        <div className="h-4 bg-linear-to-r from-blue-100 via-zinc-200 to-blue-100 rounded-md w-[70%]" />
                    </div>
                ) : (
                    /* الماركدوان بياخد الـ string اللي بيتبني يدوياً */
                    <div className="prose prose-zinc max-w-none prose-p:leading-relaxed prose-pre:bg-zinc-900 prose-pre:p-4">
                        <ReactMarkdown>{displayedText}</ReactMarkdown>
                    </div>
                )}
            </div>
        </div>
    );
};