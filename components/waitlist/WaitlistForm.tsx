"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdCheckCircleOutline } from "react-icons/md";
import Button from "../Button";

export default function WaitlistForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "founder",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <div className="w-full max-w-md mx-auto p-8 rounded-[2rem] bg-white border border-gray-100 shadow-[0_8px_40px_rgb(0,0,0,0.06)] relative overflow-hidden">
      {/* Decorative gradient blur in background */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#6E00CC]/10 blur-[50px] rounded-full pointer-events-none" />
      
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center text-center py-10 space-y-6"
          >
            <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-2">
              <MdCheckCircleOutline className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-medium text-[#1A1A1A] mb-2 tracking-tight">
                You&apos;re on the list!
              </h3>
              <p className="text-gray-500 leading-relaxed text-base">
                Keep an eye on your inbox. We&apos;ll be rolling out early access to select builders soon.
              </p>
            </div>
            <button
              onClick={() => {
                setStatus("idle");
                setFormData({ name: "", email: "", role: "founder" });
              }}
              className="mt-4 text-sm font-medium text-[#6E00CC] hover:text-[#5900A6] transition-colors"
            >
              Submit another request
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onSubmit={handleSubmit}
            className="space-y-6 relative z-10"
          >
            <div className="space-y-1.5">
              <h3 className="text-2xl font-medium text-[#1A1A1A] tracking-tight">
                Get early access
              </h3>
              <p className="text-gray-500 text-sm">
                Join 500+ builders waiting for the ultimate Startup OS.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-[#F9F9F9] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6E00CC]/20 focus:border-[#6E00CC]/50 transition-all text-[#1A1A1A] placeholder-gray-400 text-xs md:text-sm"
                  placeholder="Jane Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Work Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-[#F9F9F9] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6E00CC]/20 focus:border-[#6E00CC]/50 transition-all text-[#1A1A1A] placeholder-gray-400 text-xs md:text-sm"
                  placeholder="jane@startup.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  I identify as a...
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {["founder", "builder", "investor", "other"].map((role) => (
                    <label
                      key={role}
                      className={`flex items-center justify-center px-4 py-2.5 rounded-xl border cursor-pointer transition-all text-sm font-medium capitalize ${
                        formData.role === role
                          ? "bg-[#6E00CC]/5 border-[#6E00CC] text-[#6E00CC]"
                          : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="role"
                        value={role}
                        checked={formData.role === role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="sr-only"
                      />
                      {role}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <Button
              type="submit"
              disabled={status === "loading"}
              variant="primary"
              className={`w-full flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-[#6E00CC]/20`}
            >
              {status === "loading" ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Join the Waitlist
                </>
              )}
            </Button>
            {/* <button
              type="submit"
              disabled={status === "loading"}
              className={`w-full py-3.5 px-6 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-[#6E00CC]/20 ${
                status === "loading"
                  ? "bg-[#5900A6] text-white/70"
                  : "bg-[#6E00CC] hover:bg-[#5900A6] text-white hover:shadow-[#6E00CC]/30 hover:-translate-y-0.5"
              }`}
            >
              {status === "loading" ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Join the Waitlist
                  <MdArrowForward className="w-5 h-5" />
                </>
              )}
            </button> */}
            <p className="text-center text-xs text-gray-400">
              No spam. Unsubscribe at any time.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}



// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { MdCheckCircleOutline } from "react-icons/md";
// import Button from "../Button";

// export default function WaitlistForm() {
//   const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     role: "founder",
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatus("loading");
//     // Simulate API call
//     setTimeout(() => {
//       setStatus("success");
//     }, 1500);
//   };

//   return (
//     <div className="w-full max-w-md mx-auto p-8 rounded-[2rem] bg-white border border-gray-100 shadow-[0_8px_40px_rgb(0,0,0,0.06)] relative overflow-hidden">
//       {/* Decorative gradient blur in background */}
//       <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#6E00CC]/10 blur-[50px] rounded-full pointer-events-none" />
      
//       <AnimatePresence mode="wait">
//         {status === "success" ? (
//           <motion.div
//             key="success"
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="flex flex-col items-center justify-center text-center py-10 space-y-6"
//           >
//             <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-2">
//               <MdCheckCircleOutline className="w-8 h-8" />
//             </div>
//             <div>
//               <h3 className="text-2xl font-medium text-[#1A1A1A] mb-2 tracking-tight">
//                 You&apos;re on the list!
//               </h3>
//               <p className="text-gray-500 leading-relaxed text-base">
//                 Keep an eye on your inbox. We&apos;ll be rolling out early access to select builders soon.
//               </p>
//             </div>
//             <button
//               onClick={() => {
//                 setStatus("idle");
//                 setFormData({ name: "", email: "", role: "founder" });
//               }}
//               className="mt-4 text-sm font-medium text-[#6E00CC] hover:text-[#5900A6] transition-colors"
//             >
//               Submit another request
//             </button>
//           </motion.div>
//         ) : (
//           <motion.form
//             key="form"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0, scale: 0.95 }}
//             onSubmit={handleSubmit}
//             className="space-y-6 relative z-10"
//           >
//             <div className="space-y-1.5">
//               <h3 className="text-2xl font-medium text-[#1A1A1A] tracking-tight">
//                 Get early access
//               </h3>
//               <p className="text-gray-500 text-sm">
//                 Join 500+ builders waiting for the ultimate Startup OS.
//               </p>
//             </div>

//             <div className="space-y-4">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   required
//                   value={formData.name}
//                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                   className="w-full px-4 py-3 bg-[#F9F9F9] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6E00CC]/20 focus:border-[#6E00CC]/50 transition-all text-[#1A1A1A] placeholder-gray-400 text-xs md:text-sm"
//                   placeholder="Jane Doe"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
//                   Work Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   required
//                   value={formData.email}
//                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                   className="w-full px-4 py-3 bg-[#F9F9F9] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6E00CC]/20 focus:border-[#6E00CC]/50 transition-all text-[#1A1A1A] placeholder-gray-400 text-xs md:text-sm"
//                   placeholder="jane@startup.com"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   I identify as a...
//                 </label>
//                 <div className="grid grid-cols-2 gap-3">
//                   {["founder", "builder", "investor", "other"].map((role) => (
//                     <label
//                       key={role}
//                       className={`flex items-center justify-center px-4 py-2.5 rounded-xl border cursor-pointer transition-all text-sm font-medium capitalize ${
//                         formData.role === role
//                           ? "bg-[#6E00CC]/5 border-[#6E00CC] text-[#6E00CC]"
//                           : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
//                       }`}
//                     >
//                       <input
//                         type="radio"
//                         name="role"
//                         value={role}
//                         checked={formData.role === role}
//                         onChange={(e) => setFormData({ ...formData, role: e.target.value })}
//                         className="sr-only"
//                       />
//                       {role}
//                     </label>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <Button
//               type="submit"
//               disabled={status === "loading"}
//               variant="primary"
//               className={`w-full flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-[#6E00CC]/20`}
//             >
//               {status === "loading" ? (
//                 <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//               ) : (
//                 <>
//                   Join the Waitlist
//                 </>
//               )}
//             </Button>
//             {/* <button
//               type="submit"
//               disabled={status === "loading"}
//               className={`w-full py-3.5 px-6 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-[#6E00CC]/20 ${
//                 status === "loading"
//                   ? "bg-[#5900A6] text-white/70"
//                   : "bg-[#6E00CC] hover:bg-[#5900A6] text-white hover:shadow-[#6E00CC]/30 hover:-translate-y-0.5"
//               }`}
//             >
//               {status === "loading" ? (
//                 <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//               ) : (
//                 <>
//                   Join the Waitlist
//                   <MdArrowForward className="w-5 h-5" />
//                 </>
//               )}
//             </button> */}
//             <p className="text-center text-xs text-gray-400">
//               No spam. Unsubscribe at any time.
//             </p>
//           </motion.form>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }
