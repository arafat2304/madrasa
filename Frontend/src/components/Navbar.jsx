import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {

  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-yellow-400 font-semibold"
      : "hover:text-yellow-400 transition";

  return (
    <>
      {/* Glass Navbar */}

      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-green-900/70 text-white shadow-lg">

        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo Text */}

          <h1 className="text-lg md:text-xl font-bold tracking-wide">
            Madrasa e Nurool Islam
          </h1>

          {/* Desktop Menu */}

          <div className="hidden md:flex gap-8 text-sm">

            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>

            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>

            <NavLink to="/properties" className={linkClass}>
              Properties
            </NavLink>

            <NavLink to="/transparency" className={linkClass}>
              Transparency
            </NavLink>

            <NavLink to="/development" className={linkClass}>
                Our Work
            </NavLink>

            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>

          </div>

          {/* Mobile Button */}

          <button
            className="md:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu size={28}/>
          </button>

        </div>

      </nav>

      {/* Overlay */}

      <AnimatePresence>

        {open && (
          <motion.div
            className="fixed inset-0 bg-black/40 z-40"
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            onClick={()=>setOpen(false)}
          />
        )}

      </AnimatePresence>

      {/* Drawer */}

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{x:-300}}
            animate={{x:0}}
            exit={{x:-300}}
            transition={{duration:0.3}}
            className="fixed top-0 left-0 h-full w-72 z-50 text-white shadow-xl"
          >

            {/* Islamic Pattern Background */}

            <div className="absolute inset-0 bg-green-900"></div>

            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "url('https://www.transparenttextures.com/patterns/arabesque.png')",
              }}
            ></div>

            {/* Drawer Content */}

            <div className="relative p-6">

              {/* Header */}

              <div className="flex justify-between items-center mb-10">

                <h2 className="text-lg font-semibold">
                  Madrasa Menu
                </h2>

                <button onClick={()=>setOpen(false)}>
                  <X size={24}/>
                </button>

              </div>

              {/* Links */}

              <div className="flex flex-col gap-6 text-lg">

                <NavLink
                  to="/"
                  className={linkClass}
                  onClick={()=>setOpen(false)}
                >
                  Home
                </NavLink>

                <NavLink
                  to="/about"
                  className={linkClass}
                  onClick={()=>setOpen(false)}
                >
                  About
                </NavLink>

                <NavLink
                  to="/properties"
                  className={linkClass}
                  onClick={()=>setOpen(false)}
                >
                  Properties
                </NavLink>

                <NavLink
                  to="/transparency"
                  className={linkClass}
                  onClick={()=>setOpen(false)}
                >
                  Transparency
                </NavLink>


                 <NavLink to="/development" className={linkClass}>
                  Our Work
                </NavLink>            

                <NavLink
                  to="/contact"
                  className={linkClass}
                  onClick={()=>setOpen(false)}
                >
                  Contact
                </NavLink>

              </div>

            </div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}

export default Navbar;