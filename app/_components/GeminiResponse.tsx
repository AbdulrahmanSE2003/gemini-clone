'use client'
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { useContext } from "react";
import { context } from "@/app/_context/Context";

type ResProps = {
    text?: string;
}

export const GeminiResponse = ({ text, isLoading = false }: ResProps & { isLoading?: boolean }) => {
    return (
        <div className="flex gap-4 px-4 items-center w-full">
            <div className="min-w-[24px] pt-1 h-full">
                <Image src="/logo.png" alt="Gemini" width={24} height={24}
                    className={isLoading ? "animate-spin" : ""} />
            </div>

            <div className="flex flex-col gap-3 w-full overflow-hidden">
                {isLoading ? (
                    <div className="flex flex-col gap-2 w-full animate-pulse">
                        <div className="h-4 bg-linear-to-r from-blue-100 via-zinc-200 to-blue-100 rounded-md w-[90%]" />
                        <div className="h-4 bg-linear-to-r from-blue-100 via-zinc-200 to-blue-100 rounded-md w-full" />
                        <div className="h-4 bg-linear-to-r from-blue-100 via-zinc-200 to-blue-100 rounded-md w-[70%]" />
                    </div>
                ) : (
                    <div className="prose prose-zinc max-w-none text-zinc-800
                prose-p:leading-relaxed prose-pre:bg-zinc-900 prose-pre:p-4">
                        <ReactMarkdown>
                            {text}
                        </ReactMarkdown>
                    </div>
                )}
            </div>
        </div>
    );
};