import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Stars } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  const toggleVariants = {
    light: {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      borderColor: "rgba(255, 255, 255, 0.2)",
      boxShadow:
        "0 8px 32px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
    },
    dark: {
      backgroundColor: "rgba(0, 0, 0, 0.2)",
      borderColor: "rgba(139, 92, 246, 0.3)",
      boxShadow:
        "0 8px 32px rgba(139, 92, 246, 0.2), inset 0 1px 0 rgba(139, 92, 246, 0.1)",
    },
  };

  const iconVariants = {
    initial: {
      scale: 0,
      rotate: -180,
      opacity: 0,
      y: 20,
    },
    animate: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
    exit: {
      scale: 0,
      rotate: 180,
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-3 rounded-2xl backdrop-blur-xl border transition-all duration-500 group overflow-hidden"
      variants={toggleVariants}
      animate={isDark ? "dark" : "light"}
      whileHover={{
        scale: 1.05,
        rotate: isDark ? -5 : 5,
      }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Background glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        animate={
          isDark
            ? {
                background: [
                  "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)",
                  "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)",
                  "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)",
                ],
              }
            : {
                background: [
                  "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
                  "radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.1) 0%, transparent 50%)",
                  "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
                ],
              }
        }
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Icon container */}
      <div className="relative w-6 h-6 flex items-center justify-center">
        <AnimatePresence mode="sync">
          {isDark ? (
            <motion.div
              key="sun"
              variants={iconVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute inset-0 flex items-center justify-center"
            >
              <Sun className="w-5 h-5 text-yellow-400 drop-shadow-lg" />

              {/* Sun rays */}
              <div className="absolute inset-0">
                {Array.from({ length: 8 }, (_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-0.5 h-1 bg-yellow-400/60 rounded-full"
                    style={{
                      left: "50%",
                      top: "50%",
                      transformOrigin: "50% 12px",
                      transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                    }}
                    animate={{
                      scaleY: [1, 1.5, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.1,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              variants={iconVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute inset-0 flex items-center justify-center"
            >
              <Moon className="w-5 h-5 text-purple-400 drop-shadow-lg" />

              {/* Floating stars around moon */}
              <div className="absolute inset-0">
                {Array.from({ length: 6 }, (_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${30 + i * 15}%`,
                      top: `${20 + ((i * 20) % 60)}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeInOut",
                    }}
                  >
                    <Stars className="w-2 h-2 text-purple-300" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Hover particles */}
      <AnimatePresence>
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {Array.from({ length: 12 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                backgroundColor: isDark ? "#8b5cf6" : "#fbbf24",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                y: [0, -10, 0],
                x: [0, Math.random() * 10 - 5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      </AnimatePresence>

      {/* Border shimmer effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-transparent"
        style={{
          background: isDark
            ? "linear-gradient(45deg, transparent, rgba(139, 92, 246, 0.5), transparent) border-box"
            : "linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent) border-box",
          WebkitMask:
            "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "subtract",
        }}
        animate={{
          background: isDark
            ? [
                "linear-gradient(45deg, transparent, rgba(139, 92, 246, 0.5), transparent) border-box",
                "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent) border-box",
                "linear-gradient(135deg, transparent, rgba(139, 92, 246, 0.5), transparent) border-box",
                "linear-gradient(45deg, transparent, rgba(139, 92, 246, 0.5), transparent) border-box",
              ]
            : [
                "linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent) border-box",
                "linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.3), transparent) border-box",
                "linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.3), transparent) border-box",
                "linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent) border-box",
              ],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Tooltip */}
      <motion.div
        className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-black/80 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none"
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
      >
        Switch to {isDark ? "Light" : "Dark"} Mode
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80" />
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
