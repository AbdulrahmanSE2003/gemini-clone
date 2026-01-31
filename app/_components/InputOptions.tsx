'use client'
import * as React from 'react';
import {Mic, Plus, SendHorizontal, Settings2} from "lucide-react";
import ButtonItem from "@/app/_components/ButtonItem";
import Button from "@/app/_components/Button";
import {AnimatePresence, motion} from 'motion/react';
import {runChat} from "@/app/config/config";

type OptionsProps = {
    text: string
}

export const InputOptions = ({text}: OptionsProps) => {
    return (
        <div className="w-full flex justify-between items-center mt-auto pb-5">
            <div className="flex justify-start items-center gap-4">
                <Button><Plus size={18}/></Button>
                <ButtonItem isExpanded icon={<Settings2 size={18}/>}>Tools</ButtonItem>
            </div>

            <div className="relative flex items-center justify-center">
                <Button onClick={() =>runChat(text)}>
                    <AnimatePresence mode="wait">
                        {text ? (
                            <motion.div
                                key="send"
                                initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
                                transition={{ duration: 0.2 }}
                            >
                                <SendHorizontal size={18} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="mic"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Mic size={18} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Button>
            </div>
        </div>
    );
};