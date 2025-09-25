'use client'

import { cn } from "@/lib/utils"
import { ChartNoAxesColumn, ClipboardPenLine, Clock7, MessageCircle, MessageSquare, Plus, X } from "lucide-react"
import Image from "next/image"
import { easeInOut, motion } from "motion/react"

export const Card = () => {
    return <div className={cn(
        "w-72 min-h-[26rem] h-[28rem] bg-white rounded-2xl px-4 py-2 text-black", // Fixed: removed space and changed bg-white-400 to bg-white
        "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
        "flex flex-col items-center"
    )}>
        <h2 className="font-bold text-[15px] bg-gradient-to-r from-[#19BBEC] via-[#1266F7] to-[#18A0DE] bg-clip-text text-transparent">
            Cloff UI
        </h2>
        <p className="text-neutral-500 text-[12px]">A modern UI component Library</p>
        <div className="flex items-center justify-center">
            <button className="px-2 py-1 flex items-center gap-1 mt-4 text-[10px] shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded-2xl">
                <Image width={50} height={50} className="h-3 w-5" src="/Cloff-logo.png" alt="logo" />
                Cloff
                <X className="h-3 w-4 text-neutral-400"/>
            </button>
        </div>
        <div
        className="bg-gray-100 flex-1 w-full mt-4 mb-2 rounded-lg border border-dashed border-neutral-200 relative">
            <motion.div 
             initial={{
                opacity: 20,
                scale: 0.98,
                filter: "blur(10px)",
            }} 
            whileHover={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)"
            }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                mass: 1,
            }}
            className="absolute inset-0 h-full w-full border border-neutral-200 bg-white rounded-lg divide-y divide-neutral-300">
                <div className="flex gap-2 p-4">
                    <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                        <MessageSquare size={16} />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[9px] font-bold text-neutral-600 mt-0.5">Copy & Paste Components</p>
                        <p className="text-neutral-500 text-[8px] mt-0.5">Your everyday component need fulfilled</p>
                    </div>
                </div>
                <div className="flex gap-2 p-4">
                    <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                        <ChartNoAxesColumn size={16} />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[9px] font-bold text-neutral-600 mt-0.5">Analytical Approach</p>
                        <p className="text-neutral-500 text-[8px] mt-0.5">Software monitoring 24/7</p>
                    </div>
                </div>
                <div className="flex gap-2 p-4">
                    <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                        <ClipboardPenLine size={16} />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[9px] font-bold text-neutral-600 mt-0.5">Tech consultation services</p>
                        <p className="text-neutral-500 text-[8px] mt-0.5">Strategic growth and scalling mechanism using our holistic framework</p>
                    </div>
                </div>
                <div className="flex gap-2 p-4">
                    <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                        <Clock7 size={16} />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[9px] font-bold text-neutral-600 mt-0.5">24/7 Support</p>
                        <p className="text-neutral-500 text-[8px] mt-0.5">Cloff's team is available 24/7 for your software needs</p>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-2 p-4">
                    <div className="h-5 w-5 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                    <Plus size={12} />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-neutral-400 text-[10px]">Get Started</p>
                    </div>
                </div>
            </motion.div>
        </div> {/* Added w-full to make it visible */}
    </div>
}