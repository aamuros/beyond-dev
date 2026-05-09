"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed right-0 top-0 bottom-0 w-[3px] bg-white/5 z-50">
      <motion.div
        className="w-full origin-top rounded-full"
        style={{
          scaleY,
          backgroundColor: "#ef4444",
        }}
      />
    </div>
  );
}
