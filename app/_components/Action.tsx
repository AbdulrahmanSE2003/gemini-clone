"use client";
import Image from "next/image";
import { InputField } from "@/app/_components/InputField";
import { motion } from "motion/react";
import { context } from "@/app/_context/Context";
import { useContext } from "react";

export const Action = () => {
    const { messages } = useContext(context)!;

    // Define animation variants using 'as const' for strict typing
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: {
            duration: 0.5,
            ease: "easeOut" as const
        }
    };

    return (
        <div className={messages.length
            ? "w-full max-w-4xl mx-auto px-4 pb-4"
            : "grow w-full flex items-center justify-center"
        }>
            <div className={`flex flex-col gap-2 w-full max-w-4xl px-4 text-zinc-900 ${messages.length ? "" : "mb-32"}`}>

                {/* Initial Greeting Section */}
                {!messages.length && (
                    <>
                        <motion.div
                            initial={fadeIn.initial}
                            animate={fadeIn.animate}
                            transition={{ ...fadeIn.transition, delay: 0.2 }}
                            className="flex gap-3 items-center px-6"
                        >
                            <Image src="/logo.png" alt="Gemini Logo" width={20} height={20} />
                            <span className="text-2xl font-light">Hi, Abdulrahman</span>
                        </motion.div>

                        <motion.h2
                            initial={fadeIn.initial}
                            animate={fadeIn.animate}
                            transition={{ ...fadeIn.transition, delay: 0.4 }}
                            className="text-4xl mb-4 px-6 font-medium text-zinc-800"
                        >
                            Where should we start?
                        </motion.h2>
                    </>
                )}

                {/* Input Field Container - Adjusted delay based on chat state */}
                <motion.div
                    initial={fadeIn.initial}
                    animate={fadeIn.animate}
                    transition={{
                        ...fadeIn.transition,
                        delay: messages.length ? 0 : 0.6
                    }}
                >
                    <InputField />
                </motion.div>

                {/* Disclaimer Message */}
                {!messages.length && (
                    <motion.p
                        initial={fadeIn.initial}
                        animate={fadeIn.animate}
                        transition={{ ...fadeIn.transition, delay: 0.8 }}
                        className="text-center text-[11px] text-zinc-500 mt-4 tracking-tight"
                    >
                        Gemini may display inaccurate info, so double-check its responses.
                    </motion.p>
                )}
            </div>
        </div>
    );
};