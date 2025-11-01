'use client'
import { BarChart3, ClipboardList, Clock, MessageSquare, Plus, X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

const Card = ({
  title = "Cloff UI",
  subtitle = "A modern UI component Library",
  logoSrc = "Cloff-logo.png",
  logoAlt = "logo",
  buttonText = "Cloff",
  features = [
    {
      icon: MessageSquare,
      title: "Copy & Paste Components",
      description: "Your everyday component need fulfilled"
    },
    {
      icon: BarChart3,
      title: "Analytical Approach",
      description: "Software monitoring 24/7"
    },
    {
      icon: ClipboardList,
      title: "Tech consultation services",
      description: "Strategic growth and scaling mechanism using our holistic framework"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Cloff's team is available 24/7 for your software needs"
    }
  ],
  showCloseButton = true,
  onClose = () => {},
  className = "",
  gradientColors = {
    from: "#19BBEC",
    via: "#1266F7",
    to: "#18A0DE"
  }
}) => {
  const [open, setOpen] = useState(true)

  const handleClose = () => {
    setOpen(false)
    if (onClose) onClose()
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{
              opacity: 0,
              scale: 0.98,
              filter: 'blur(10px)'
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: 'blur(0px)'
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
              filter: 'blur(10px)'
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut"
            }}
            className={`w-72 min-h-[26rem] h-[28rem] bg-white rounded-2xl px-4 py-2 text-black shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] flex flex-col items-center ${className}`}
          >
            <h2 
              className="font-bold text-[15px] bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, ${gradientColors.from}, ${gradientColors.via}, ${gradientColors.to})`
              }}
            >
              {title}
            </h2>
            <p className="text-neutral-500 text-[12px]">{subtitle}</p>
            <div className="flex items-center justify-center">
              <button 
                onClick={handleClose} 
                className="px-2 py-1 flex items-center gap-1 mt-4 text-[10px] shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded-2xl hover:shadow-md transition-shadow"
              >
                {logoSrc ? (
                  <span className="h-3 w-5">
                    <img src={logoSrc} alt={logoAlt} className="h-full w-full object-contain" />
                  </span>
                ) : (
                  <span 
                    className="h-3 w-5 rounded"
                    style={{
                      backgroundImage: `linear-gradient(to right, ${gradientColors.from}, ${gradientColors.to})`
                    }}
                  />
                )}
                {buttonText}
                {showCloseButton && <X className="h-3 w-4 text-neutral-400"/>}
              </button>
            </div>
            <div className="bg-gray-100 flex-1 w-full mt-4 mb-2 rounded-lg border border-dashed border-neutral-200 relative">
              <motion.div 
                initial={{
                  opacity: 0.2,
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
                className="absolute inset-0 h-full w-full border border-neutral-200 bg-white rounded-lg divide-y divide-neutral-300 overflow-auto"
              >
                {features.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <div key={index} className="flex gap-2 p-4">
                      <div className="h-7 w-7 flex-shrink-0 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                        <Icon size={16} />
                      </div>
                      <div className="flex flex-col">
                        <p className="text-[9px] font-bold text-neutral-600 mt-0.5">{feature.title}</p>
                        <p className="text-neutral-500 text-[8px] mt-0.5">{feature.description}</p>
                      </div>
                    </div>
                  )
                })}
                <div className="flex items-center justify-center gap-2 p-4">
                  <div className="h-5 w-5 flex-shrink-0 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                    <Plus size={12} />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-neutral-400 text-[10px]">Get Started</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Card

