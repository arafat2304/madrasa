import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative pt-32 pb-24 text-white overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0 bg-green-900"></div>

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/arabesque.png')",
        }}
      />

      {/* Content */}

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        <motion.h1
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.8}}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Madrasa e Nurool Islam
        </motion.h1>

        <motion.p
          initial={{opacity:0,y:20}}
          animate={{opacity:1,y:0}}
          transition={{delay:0.3}}
          className="mt-4 text-green-200"
        >
          Registered Waqf Institution (Reg. No. 009)
        </motion.p>

        <motion.p
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:0.6}}
          className="mt-6 max-w-xl mx-auto text-green-100"
        >
          Dedicated to Islamic education, community development
          and social welfare for the betterment of society.
        </motion.p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <button className="bg-yellow-400 text-green-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300">
            About Madrasa
          </button>

          <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-green-900">
            View Activities
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;