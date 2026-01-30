// @flow
import * as React from 'react';
import {Mic, Plus, Settings2} from "lucide-react";
import ButtonItem from "@/app/_components/ButtonItem";
import Button from "@/app/_components/Button";

export const InputOptions = () => {
    return (
        <div className={`w-full flex justify-between items-center mt-auto h-full pb-5`}>
            <div className={`flex justify-start items-center gap-4`}>
                <Button><Plus size={18}/></Button>
                <ButtonItem isExpanded icon={<Settings2 size={18}/>}>Tools</ButtonItem>
            </div>
            <div className={``}>
                <Button><Mic size={18}/></Button>
            </div>
        </div>
    );
};