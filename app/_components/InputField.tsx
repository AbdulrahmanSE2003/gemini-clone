// @flow
import * as React from 'react';
import {InputOptions} from "@/app/_components/InputOptions";

export const InputField = () => {
    return (
        <div className="relative bg-white px-6 pt-5 w-full h-32 max-h-52 rounded-[30px] border border-brand-gray shadow-md ">
            <input
                type="text"
                placeholder="Ask Gemini 3"
                className="bg-white w-full px-3 text-zinc-900 border-brand-gray outline-none focus:border-brand-gray transition-all text-lg"
            />
            <InputOptions/>
        </div>
    );
};