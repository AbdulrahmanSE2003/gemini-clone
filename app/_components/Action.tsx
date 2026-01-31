"use client";
import Image from "next/image";
import { InputField } from "@/app/_components/InputField";
import { motion } from "motion/react";
import { context } from "@/app/_context/Context";
import { useContext } from "react";

export const Action = () => {

    const { messages } = useContext(context)!;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        },
    };

    return (
        <div className={messages.length ? "w-full max-w-4xl mx-auto px-4 pb-4" : "grow w-full flex items-center justify-center"}>
            <motion.div
                className={`flex flex-col gap-2 w-full max-w-4xl px-4 text-zinc-900 ${messages.length ? "" : "mb-32"}`}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {!messages.length && (<>
                    <motion.div variants={itemVariants} className="flex gap-3 items-center px-6">
                        <Image src="/logo.png" alt="Gemini Logo" width={20} height={20} />
                        <span className="text-2xl font-light ">Hi, Abdulrahman</span>
                    </motion.div>

                    <motion.h2 variants={itemVariants} className="text-4xl mb-4 px-6">
                        Where should we start?
                    </motion.h2>
                </>)}

                <motion.div variants={itemVariants}>
                    <InputField />
                </motion.div>
            </motion.div>
        </div>
    );
};