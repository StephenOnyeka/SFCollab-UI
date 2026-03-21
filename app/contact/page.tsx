import Button from "@/components/Button";
import FAQ from "@/components/FAQ";
import Image from "next/image";
import React from "react";

export default function ContactPage() {
  return (
    <div>
      <section className="w-full bg-white pt-10 lg:pt-20 overflow-hidden border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:gap-8 lg:gap-10">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row justify-between items-end gap-8">
              <div className="flex flex-col gap-6 max-w-2xl">
                <span className="text-[#6E00CC] font-normal tracking-[0.2em] uppercase text-sm border-b-2 border-[#6E00CC]/20 pb-1 w-fit">
                  Contact Us
                </span>
                <h2 className="text-[42px] md:text-[60px] font-normal text-[#1A1A1A] leading-tight tracking-tighter">
                  Build Something that{" "}
                  <span className=" text-gray-400">works.</span>
                </h2>
              </div>
              {/* <div className="relative aspect-[6/4] w-sm h-sm rounded-2xl overflow-hidden shadow-2xl"> */}
              <div className="relative aspect-[6/4] w-sm h-sm rounded-2xl overflow-hidden">
                <Image
                  src="/images/contact.jpg"
                  alt="Marketing experts collaborating"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* </div> */}
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div className="flex flex-col gap-6 max-w-lg">
                <p className="text-base text-gray-500 leading-relaxed">
                  We’d love to hear about your challenges. Whether you’re looking to revamp your brand, boost performance, or launch something entirely new we’re here to help make it happen.
                </p>
                <Button variant="primary" className="w-fit">
                  Get our Help
                </Button>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Hate forms? <span className="text-black">sfcollab333@gmail.com
</span>
                </p>
              </div>
              {/* <div className="flex items-center gap-4 bg-gray-50 px-6 py-3 rounded-2xl border border-gray-100"> */}
              <div className="flex items-center gap-4 px-6 py-3 rounded-2xl w-full md:w-2xl ">
              {/* <div className="flex items-center gap-4 px-6 py-3 rounded-2xl border border-gray-200 w-full md:w-2xl "> */}
                <form className="relative w-full rounded-xl text-sm space-y-4">
                  <div className="flex gap-4 md:gap-6">
                    <input type="text" placeholder="Name" className="border border-gray-200 rounded-xl px-6 py-4 w-full" />
                    <input type="email" placeholder="Email" className="border border-gray-200 rounded-xl px-6 py-4 w-full" />                    
                  </div>
                  <div className="flex gap-4 md:gap-6">
                    <input type="number" placeholder="Phone (Optional)" className="border border-gray-200 rounded-xl px-6 py-4 w-full" />
                    <input type="text" placeholder="How did you hear about SFCollab" className="border border-gray-200 rounded-xl px-6 py-4 w-full" />                    
                  </div>
                  <div className="flex gap-4 md:gap-6 w-full">
                    <textarea name="message" id="message" rows={10} placeholder="Message" className="border w-full border-gray-200 rounded-xl px-6 py-4"></textarea>                  
                  </div>
                  <div className="flex gap-4 ">
                    <input type="checkbox" id="terms" className="border border-gray-200 rounded-xl px-6" />
                    <label htmlFor="terms" className="">I agree to the terms of SF's privacy policy</label>                    
                  </div>
                  <Button variant="dark" className="w-fit">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FAQ />
      {/* <FinalCTA /> */}
    </div>
  );
}
