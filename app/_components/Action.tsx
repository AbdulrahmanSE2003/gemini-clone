import Image from "next/image";
import {InputField} from "@/app/_components/InputField";

export const Action = () => {
    return (
        <div className="grow w-full flex items-center justify-center">
            <div className="flex flex-col gap-2 w-full max-w-4xl px-4 mb-32 text-zinc-900">
                <div className="flex gap-3 items-center px-6">
                    <Image src="/logo.png" alt="Gemini Logo" width={20} height={20}/>
                    <span className="text-2xl font-light ">Hi, Abdulrahman</span>
                </div>

                <h2 className="text-4xl mb-4 px-6">
                    Where should we start?
                </h2>

                <InputField/>
            </div>
        </div>
    );
};
