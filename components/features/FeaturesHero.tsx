"use client";
import { motion } from "framer-motion";

export default function FeaturesHero() {
  return (
    <section className="relative w-full max-w-7xl mx-auto">
       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6E00CC]/5 blur-[120px] rounded-full pointer-events-none" />
       <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1A1A1A]/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 min-w-full py-10">
          <div className="flex flex-col gap-6 text-left w-xl ">
            <span className="text-[#6E00CC] font-normal tracking-[0.2em] uppercase text-sm border-b-2 border-[#6E00CC]/20 pb-1 w-fit">
              Core Engine
            </span>
            <h2 className="text-[42px] md:text-[60px] font-normal text-[#1A1A1A] leading-tight tracking-tighter">
              The Startup <br className="hidden sm:block" />
              <span className=" text-gray-400">Operating System</span>{" "}
            </h2>
          </div>
          <div className="flex flex-col gap-6 w-lg">
            <p className="text-base text-gray-500 leading-relaxed text-left">
              Where ideas meet execution. One platform for everything your startup needs to build, collaborate, and scale from MVP to unicorn.
            </p>
            {/* <Button variant="primary" className="w-fit">
              Create a Startup
            </Button> */}
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}
// "use client";
// import { motion } from "framer-motion";

// export default function FeaturesHero() {
//   return (
//     <section className="w-full bg-[#FAFAFA] pt-32 pb-16 relative overflow-hidden">
//       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6E00CC]/5 blur-[120px] rounded-full pointer-events-none" />
//       <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1A1A1A]/5 blur-[100px] rounded-full pointer-events-none" />

//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
//         <motion.span
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-[#6E00CC] font-medium tracking-[0.2em] uppercase text-sm border-b-2 border-[#6E00CC]/20 pb-1 mb-6 inline-block"
//         >
//           Core Engine
//         </motion.span>

//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="text-[48px] md:text-[64px] font-normal text-[#1A1A1A] leading-tight tracking-tighter mb-6"
//         >
//           The Startup <br className="hidden sm:block" />
//           <span className="text-gray-400">Operating System</span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="text-base text-gray-500 max-w-2xl leading-relaxed"
//         >
//           Where ideas meet execution. One platform for everything your startup needs to build, collaborate, and scale from MVP to unicorn.
//         </motion.p>
//       </div>
//     </section>
//   );
// }
