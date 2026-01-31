'use client'
import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink } from "lucide-react";

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

const AboutModal = ({ isOpen, onClose }: Props) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/20 backdrop-blur-md z-999"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                       w-[90%] max-w-md bg-white/80 backdrop-blur-xl rounded-[2rem] p-8 shadow-2xl 
                       z-[1000] border border-white/50 overflow-hidden"
                    >
                        {/* Background ambient effects */}
                        <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-400/20 blur-[50px] rounded-full" />
                        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-red-400/10 blur-[50px] rounded-full" />

                        <button
                            onClick={onClose}
                            className="absolute right-6 top-6 p-2 rounded-full hover:bg-zinc-100 transition-all active:scale-90"
                        >
                            <X size={18} className="text-zinc-500" />
                        </button>

                        <div className="relative flex flex-col gap-6">
                            <div className="space-y-1">
                                <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 via-red-500 to-amber-500 bg-clip-text text-transparent">
                                    Project Insight
                                </h2>
                                <p className="text-sm text-zinc-400 font-medium tracking-wide">GEMINI CLONE v1.0</p>
                            </div>

                            <div className="space-y-4 text-zinc-600 leading-relaxed">
                                <p>
                                    This experiment explores the intersection of <strong>AI UX</strong> and modern frontend performance. Built to mirror the fluid experience of Google Gemini.
                                </p>

                                <div className="p-4 rounded-2xl bg-white border border-zinc-100">
                                    <p className="text-[13px] text-zinc-500 italic">
                                        "A technical sandbox designed to test complex state management and generative streaming interfaces."
                                    </p>
                                </div>

                                <a
                                    href="https://mnmlst-nine.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-between p-4 rounded-2xl bg-white border border-zinc-200 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                                >
                                    <span className="font-medium text-zinc-800 group-hover:text-blue-600 transition-colors">View Portfolio</span>
                                    <ExternalLink size={16} className="text-zinc-400 group-hover:text-blue-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                </a>
                            </div>

                            {/* Dismiss Button */}
                            <button
                                onClick={onClose}
                                className="relative group w-full py-4 rounded-2xl overflow-hidden shadow-lg transition-transform active:scale-[0.98] cursor-pointer"
                            >
                                {/* Button Base Layer */}
                                <div className="absolute inset-0 bg-brand-dark-gray transition-opacity duration-500 group-hover:opacity-0" />

                                {/* Hover Gradient Layer */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-linear-to-tr from-blue-600 to-red-500 transition-opacity duration-500 animate-gradient-x" />

                                <span className="relative text-white font-bold tracking-wider">
                                    DISMISS
                                </span>
                            </button>

                            <p className="text-[11px] text-center text-zinc-400 uppercase tracking-[0.2em]">
                                Static Build • Desktop Only
                            </p>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default AboutModal;