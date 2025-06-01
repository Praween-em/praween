// src/components/FlipCard.tsx
import { useState } from "react"
import { motion } from "framer-motion"

interface FlipCardProps {
  frontTitle: string
  frontName: string
  frontSubtitle: string
  frontDate: string
  backText: string
  backImageSrc?: string
}

export const FlipCard = ({ frontTitle, frontName, frontSubtitle, frontDate, backText, backImageSrc }: FlipCardProps) => {
  const [flipped, setFlipped] = useState(false)

  return (
    <motion.div
      className="w-72 h-44 perspective cursor-pointer duration-300 hover:shadow-[20px_0_30px_-10px_rgba(255,0,0,0.7),-20px_0_30px_-10px_rgba(0,255,0,0.7)] rounded-2xl " 
      onClick={() => setFlipped(!flipped)}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full bg-white rounded-lg shadow-2xl backface-hidden flex flex-col justify-center items-center p-6 border border-gray-300">
          <h3 className="text-lg font-semibold">{frontTitle}</h3>
          <p className="mt-2 text-sm text-gray-600">{frontName}</p> 
          <p className="mt-2 text-sm text-gray-600">{frontSubtitle}</p>
          <p className="mt-1 text-xs text-gray-500">{frontDate}</p>
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full bg-gray-100 rounded-lg shadow-2xl backface-hidden flex flex-col justify-center items-center p-6 border border-gray-300"
          style={{ transform: "rotateY(180deg)" }}
        >
          {backImageSrc ? (
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <img
                src={backImageSrc}
                alt="Back Image"
                className="w-fit h-fit object-fit opacity-70"
              />
            
            </div>
          ) : (
            <div className="flex justify-center items-center h-full">
              <span className="text-xl font-bold text-gray-800 select-none">{backText}</span>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
