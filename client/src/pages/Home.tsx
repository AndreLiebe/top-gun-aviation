import { Navigation } from "@/components/Navigation";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle2, FileText, Plane, ShieldCheck, ClipboardCheck, BookOpen } from "lucide-react";

// Fade in up animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Abstract Aviation Background - Professional Gradient/Pattern */}
        <div className="absolute inset-0 z-0 bg-slate-900">
           {/* aircraft wing abstract */}
          <div className="absolute inset-0 bg-[url('https://pixabay.com/get/ge065e5002caa6dda28087da351ee6c6de3aa3d06bdcf25c8814dd3c2f6d356b23bf59fe2562bd6c7809edf5f97d5b1ceb3f16e0ff523f58a6e7b812bf1e56893_1280.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900"></div>
          
          {/* Animated decorative line */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 tracking-tight">
              TOP GUN <span className="text-primary">AVIATION</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 font-light">
              Elevating standards in aviation compliance, auditing, manual development and amendments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#services" 
                className="px-8 py-3 bg-primary text-white font-semibold rounded-md shadow-lg shadow-primary/20 hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-300"
              >
                Our Services
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 bg-transparent border border-white/20 text-white font-semibold rounded-md hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">What We Do</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900">Premium Aviation Services</h3>
            <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1: Auditing */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="group relative bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-primary/20 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <ShieldCheck size={120} />
              </div>
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <ClipboardCheck size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">Aviation Auditing</h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Comprehensive safety and quality assurance audits tailored to regulatory requirements.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span>Expert auditing services</span>
                </li>
                <li className="flex items-start text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span>Remote and on-site availability</span>
                </li>
              </ul>
            </motion.div>

            {/* Service 2: Manuals */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="group relative bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-primary/20 transition-all duration-300 md:-mt-4"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <BookOpen size={120} />
              </div>
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <FileText size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">Manual Development and Amendments</h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Professional compilation and amendment of critical aviation documentation.
              </p>
              <ul className="space-y-2">
                {[
                  "Training and Procedures Manual",
                  "Flight Operations Manual",
                  "Safety Management System",
                  "Quality Assurance System",
                  "Maintenance Control Manual",
                  "Emergency Response Plan",
                  "Standard Operating Procedures",
                  "RPAS Manuals",
                  "Aircraft Maintenance Plan"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Service 3: CAA Applications */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="group relative bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-primary/20 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Plane size={120} />
              </div>
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Plane size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">CAA Applications</h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Streamlined assistance with Civil Aviation Authority applications and regulatory compliance.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span>Application preparation</span>
                </li>
                <li className="flex items-start text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span>Compliance verification</span>
                </li>
                <li className="flex items-start text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span>Submission management</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Abstract pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
             <defs>
               <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                 <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
               </pattern>
             </defs>
             <rect width="100%" height="100%" fill="url(#grid)" />
           </svg>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <blockquote className="text-2xl md:text-3xl font-display font-medium italic leading-relaxed text-slate-200">
            "Excellence is not an act, but a habit. We ensure your aviation operations meet the highest standards of compliance."
          </blockquote>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Get In Touch</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">Contact Us</h3>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Ready to elevate your aviation standards? Contact us today for a consultation or to learn more about our services.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-primary mr-5 flex-shrink-0 border border-slate-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Phone</h4>
                    <p className="text-slate-600">+27 78 395 4987</p>
                    <p className="text-sm text-slate-500 mt-1">Mon-Fri from 8am to 5pm</p>
                  </div>
                </div>

                <div className="flex items-start">
                   <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-primary mr-5 flex-shrink-0 border border-slate-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Email</h4>
                    <p className="text-slate-600">info@topgunaviation.co.za</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-slate-200 rounded-full blur-3xl"></div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
