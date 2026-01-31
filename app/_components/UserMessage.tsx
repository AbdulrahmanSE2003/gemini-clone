type Props = {
    text:string
};
export const UserMessage = ({text}: Props) => {
    return (
        <div className="flex flex-col items-end gap-2 px-4">
            <div className="bg-zinc-200 text-zinc-800 px-5 py-3 rounded-2xl max-w-[80%] shadow-sm">
                <p className="text-lg">{text}</p>
            </div>
        </div>
    );
};