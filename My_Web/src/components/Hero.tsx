import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export const Hero = () => {
  return (
    <section className="h-full flex flex-col items-center justify-center text-center px-4">
      
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold"
      >
     
        Hi, I'm Praveen 👋
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-4 text-muted-foreground text-lg md:text-xl max-w-xl"
      >
        I build beautiful websites and scalable web apps with React, TypeScript, and AWS.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-6"
      >
        <Button className="border-2 bg-white shadow-2xl" variant={'toletu'} size="lg" asChild>
          <a href="/about">Know Me </a>
        </Button>
      </motion.div>
    </section>
  )
}