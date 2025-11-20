"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

export default function ContactPageEn() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Hero section */}
      <section className="py-20 px-6 text-center bg-gradient-to-br from-[#00C896]/5 via-transparent to-[#5ED6E5]/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Have a question, a project, or want a quote? We&apos;d love to hear
            from you.
          </p>
        </motion.div>
      </section>

      {/* Contact info cards */}
      <section className="py-8 px-6">
        <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-6 mb-12">
          <motion.a
            href="mailto:hello@yoshimyra.com"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="group p-6 bg-white rounded-xl border border-slate-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Email</h3>
            <p className="text-[#00C896] font-medium group-hover:underline">
              hello@yoshimyra.com
            </p>
          </motion.a>

          <motion.a
            href="https://wa.me/212776987747"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="group p-6 bg-white rounded-xl border border-slate-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              WhatsApp
            </h3>
            <p className="text-[#00C896] font-medium group-hover:underline">
              +212 776987747
            </p>
          </motion.a>
        </div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-2xl mx-auto px-6"
        >
          <ContactForm />
        </motion.div>
      </section>
    </main>
  );
}
