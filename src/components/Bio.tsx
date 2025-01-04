'use client';

import { motion } from 'framer-motion';

export default function Bio() {
  return (
    <motion.div 
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-sm text-[#ededed90] leading-relaxed">
        Serial key presser by day, automation enthusiast by night.
      </p>

      {/* <p className="text-sm text-[#ededed70] leading-relaxed">
        I love hosting <Link className="underline" href="https://x.com/KaranJanthe/status/1872936041059107161/"> meetups</Link> and <Link className="underline" href="https://wtfuckathon.vercel.app/">stupidathon</Link>.
      </p> */}

   
    </motion.div>
  );
} 