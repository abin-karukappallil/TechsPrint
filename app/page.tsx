'use client'

import Image from 'next/image';
import { Search, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
const products = [
  {
    name: "Powered by LLM",
    title: "Faster and Accurate",
    description: "Text-to-Speech (TTS) & Audio Books: The tablet converts written text into speech. This is useful for content that isn't available in Braille, allowing users to listen to textbooks, web content, and emails. Users can also download and listen to audiobooks.",
    image: "/llm.jfif?height=600&width=800",
    background: "bg-gradient-to-br from-blue-300 to-purple-300",
    textColor: "text-black",
  },
  {
    name: "Using VLM",
    title: "Clear and Real",
    description: "Image Recognition, Integrates with a camera to capture images of diagrams or text, using a Vision-Language Model (VLM) to describe visual content and provide contextual explanations through the LLM",
    image: "/vlm.avif?height=600&width=800",
    background: "bg-black",
    textColor: "text-white",
  },
  {
    name: "Using Voice Assistant",
    title: "Includes voice-activated commands and haptic feedback, ensuring that visually impaired students can navigate the device easily and interact with educational content effectively.",
    description: "",
    image: "/6.png?height=600&width=800",
    background: "bg-white",
    textColor: "text-black",
  },
  {
    name:"Productive",
    title: "High battery life provided. Low latency and highly accurate sensor and its data",
    description: "",
    image: "/2.png?height=200&width=200",
    background: "bg-black",
    textColor: "text-white",
  },
  {
    name: "Unique Design",
    title: "Simple sleek and unique design",
    description: "Opt for a clean, minimalist design that avoids clutter. A simple, elegant exterior with smooth lines and rounded edges gives a modern look while ensuring it is easy to handle.",
    image: "/1.png?height=400&width=400",
    background: "bg-white",
    textColor: "text-black",
  },
  {
    name: "Cost efficiency",
    title: "Everyone needs to be happy..So we designed it with a very cost efficient method.",
    description: "Affordable Hardware Components: Use cost-effective materials for the device's casing and components without compromising durability. Opt for widely available processors that balance performance and price.",
    image: "/cost.jfif?height=400&width=400",
    background: "bg-black",
    textColor: "text-white",
  },
  {
    name: "Low Latency",
    title: "Low latency in a sleek and unique",
    description: "Efficient Processor: Integrate a low-power, high-efficiency processor (such as ARM-based CPUs) optimized for fast performance with minimal lag. This ensures that interactions with the device, such as voice commands and Braille output, respond instantly without delays.",
    image: "/5.png?height=400&width=400",
    background: "bg-white",
    textColor: "text-black",
  },
  {
    name: "Grip Strap",
    title: "Enhance the sleek and unique design",
    description: "Sleek Integration:The grip strap is seamlessly embedded into the device's body, ensuring it doesn't detract from the sleek design. When not in use, the strap can lay flush with the surface, maintaining the slim profile of the device.",
    image: "/3.png?height=600&width=800",
    background: "bg-black",
    textColor: "text-white",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const productCardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function Home() {
  const callLink = ()=>{
      window.location.href = 'https://www.orcam.com/en-us/orcam-read';
  }
  return (
    <>
      <div className="min-h-screen bg-black text-white">
        <header className="bg-[#1d1d1f] py-3 px-4 md:px-8">
          <nav className="flex items-center justify-between max-w-7xl mx-auto">
            <ul className="hidden md:flex space-x-6 text-sm">
              {['Home', 'Coming soon'].map((item) => (
                <motion.li 
                  key={item} 
                  className="hover:text-gray-300 cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
            <div className="flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Search className="w-5 h-5" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <ShoppingBag className="w-5 h-5" />
              </motion.div>
            </div>
          </nav>
        </header>

        <motion.main 
          className="flex flex-col items-center justify-center text-center px-4 py-16 md:py-32"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4"
            variants={fadeInUp}
          >
            SenzPen
          </motion.h1>
          <motion.h2 
            className="text-2xl md:text-4xl mb-8"
            variants={fadeInUp}
          >
            New! Hey SenzPen.
          </motion.h2>
          <motion.div 
            className="relative w-full max-w-3xl aspect-[3/2] mb-8"
            variants={fadeInUp}
          >
            <Image
              src="/th.png"
              alt="Senzpen"
              width={500}
              height={500}
              objectFit="contain"
              className="z-10 pl-12 mx-auto"
            />
            <div className="absolute inset-0 flex items-center justify-center z-0">
              <span className="text-8xl md:text-9xl font-bold text-[#8e8e8e] opacity-50">SenzPen</span>
            </div>
          </motion.div>
          <motion.div 
            className="flex space-x-4 mb-8"
            variants={fadeInUp}
          >
            <button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full"
            onClick={callLink}
            >
              Learn more
            </button>
           
          </motion.div>
          <motion.p 
            className="text-gray-500"
            variants={fadeInUp}
          >
            Senz Intelligence coming this fall
          </motion.p>
        </motion.main>
      </div>

      <motion.section 
        className="px-4 md:px-8 py-8"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((product, index) => (
            <motion.div 
              key={index} 
              className={`${product.background} ${product.textColor} p-6 rounded-2xl flex flex-col justify-between min-h-[80vh]`}
              variants={productCardVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div>
                <motion.h2 
                  className="text-3xl font-bold mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {product.name}
                </motion.h2>
                <motion.p 
                  className="text-xl mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {product.title}
                </motion.p>
                <motion.p 
                  className="text-sm mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {product.description}
                </motion.p>
              </div>
              <motion.div 
                className="relative h-[50vh] w-full mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  className="rounded-xl w-12 h-12"
                />
              </motion.div>
              <div className="flex space-x-4 mt-4">
                <motion.button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={callLink}
                >
                  Learn more
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
}