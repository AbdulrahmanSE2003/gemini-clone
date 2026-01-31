type Props = {
    text: string
};
export const UserMessage = ({ text }: Props) => {
    return (
        <div className="flex flex-col items-end gap-2 px-4">
            <div className="bg-brand-light-3 text-zinc-800 px-5 py-3 
                            rounded-3xl rounded-tr-none shadow-sm
                            w-fit max-w-[85%] sm:max-w-[70%] 
                            wrap-break-word h-auto">
                <p className="text-lg leading-relaxed whitespace-pre-wrap">{text}</p>
            </div>
        </div>
    );
};