"use client";

import { motion } from "framer-motion";
import { ChevronDown, Clock, Heart, Compass, Sparkles, CheckCircle, ArrowRight, Mail, Instagram, Youtube, Podcast } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
    }, 3000);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.15 } },
    viewport: { once: true, margin: "-100px" },
  };

  return (
    <main className="min-h-screen bg-ivory">
      {/* Hero Section - Split Layout with App Mockup */}
      <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 xl:px-12 overflow-hidden bg-ivory">
        <div className="absolute inset-0 bg-gradient-to-br from-ivory via-lavender/10 to-ivory" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_#D4AF63_0%,_transparent_40%)]"
        />
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Copy */}
            <div className="text-left pt-20 lg:pt-0">
              {/* Brand */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <span className="font-display text-2xl text-indigo-rich font-semibold">LifeCharter</span>
                <span className="mx-3 text-taupe">·</span>
                <span className="font-ui text-xs uppercase tracking-eyebrow text-gold font-semibold">Command Suite</span>
              </motion.div>
              
              {/* Campaign Line */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-ui text-[11px] uppercase tracking-eyebrow text-plum mb-6"
              >
                A 21-Day Challenge with AmiLynne Carroll
              </motion.p>
              
              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-indigo-rich leading-[1.1] mb-6"
              >
                The Command Shift
              </motion.h1>
              
              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-body text-2xl sm:text-3xl text-indigo-rich/80 max-w-xl mb-6 leading-relaxed italic"
              >
                Stop living by reaction. Start living by command.
              </motion.p>
              
              {/* Body */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="font-body text-lg text-taupe max-w-lg mb-10 leading-relaxed"
              >
                A guided journey to reclaim your time, energy, and aligned action.
              </motion.p>
              
              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <a
                  href="#join"
                  className="inline-flex items-center gap-3 bg-indigo-rich text-ivory font-ui text-xs uppercase tracking-button font-semibold px-10 py-4 rounded-sm hover:bg-indigo transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group"
                >
                  Join the Challenge
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>
            
            {/* Right Side - App Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative hidden lg:block"
            >
              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-8 z-20 bg-white rounded-xl shadow-xl p-4 w-48"
              >
                <p className="font-ui text-[10px] uppercase tracking-eyebrow text-plum mb-1">21-Day Journey</p>
                <p className="font-display text-lg text-indigo-rich font-semibold">Day 13 of 21</p>
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex-1 h-2 bg-lavender/30 rounded-full overflow-hidden">
                    <div className="w-[62%] h-full bg-teal rounded-full" />
                  </div>
                  <span className="font-ui text-xs text-teal font-semibold">62%</span>
                </div>
                <p className="font-body text-sm text-taupe mt-2">You&apos;re building your leadership.</p>
                <p className="font-body text-sm text-gold">Keep going!</p>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-20 -right-4 z-20 bg-white rounded-xl shadow-xl p-4 w-44"
              >
                <p className="font-ui text-[10px] uppercase tracking-eyebrow text-plum mb-1">Daily Audio</p>
                <p className="font-body text-sm text-indigo-rich">Day 13: Choose What Matters</p>
                <p className="font-ui text-xs text-taupe mt-1">12:45</p>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 -left-12 z-20 bg-white rounded-xl shadow-xl p-4 w-48"
              >
                <p className="font-ui text-[10px] uppercase tracking-eyebrow text-plum mb-1">Focus for Today</p>
                <p className="font-display text-base text-indigo-rich font-semibold">Aligned Decision-Making</p>
                <p className="font-body text-sm text-taupe mt-1">Choose what matters most and lead with clarity.</p>
              </motion.div>
              
              {/* Laptop/App Mockup */}
              <div className="relative bg-indigo-rich rounded-2xl shadow-2xl p-2 ml-8">
                {/* Screen */}
                <div className="bg-ivory rounded-xl overflow-hidden">
                  {/* App Header */}
                  <div className="bg-indigo-rich px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-display text-lg text-ivory">LifeCharter</span>
                      <span className="font-ui text-[10px] uppercase tracking-eyebrow text-gold">Command Suite</span>
                    </div>
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                      <div className="w-3 h-3 rounded-full bg-green-400/80" />
                    </div>
                  </div>
                  
                  {/* App Content */}
                  <div className="p-4">
                    {/* Challenge Header */}
                    <div className="text-center mb-4">
                      <p className="font-display text-2xl text-indigo-rich font-semibold">The Command Shift</p>
                      <p className="font-ui text-xs text-plum mt-1">Day 13 of 21 · Week 2: Choosing What Matters</p>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-ui text-taupe">21-Day Progress</span>
                        <span className="font-ui text-teal font-semibold">62%</span>
                      </div>
                      <div className="h-2 bg-lavender/30 rounded-full overflow-hidden">
                        <div className="w-[62%] h-full bg-gradient-to-r from-teal to-gold rounded-full" />
                      </div>
                      <div className="flex justify-between text-xs mt-1">
                        <span className="font-ui text-taupe">13 of 21 Days Completed</span>
                        <span className="font-ui text-taupe">8 Days Remaining</span>
                      </div>
                    </div>
                    
                    {/* Today's Focus Card */}
                    <div className="bg-lavender/20 rounded-lg p-3 mb-3">
                      <p className="font-ui text-[10px] uppercase tracking-eyebrow text-plum mb-1">Today&apos;s Focus</p>
                      <p className="font-display text-base text-indigo-rich font-semibold">Aligned Decision-Making</p>
                      <p className="font-body text-sm text-taupe mt-1">Choose what matters most and lead with clarity.</p>
                    </div>
                    
                    {/* Two Column Cards */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white border border-lavender/30 rounded-lg p-3">
                        <p className="font-ui text-[10px] uppercase tracking-eyebrow text-plum mb-1">Daily Audio</p>
                        <p className="font-body text-sm text-indigo-rich">Day 13: Choose What Matters</p>
                      </div>
                      <div className="bg-white border border-lavender/30 rounded-lg p-3">
                        <p className="font-ui text-[10px] uppercase tracking-eyebrow text-plum mb-1">Reflection</p>
                        <p className="font-body text-sm text-indigo-rich/70 italic">Where am I still reacting instead of leading?</p>
                      </div>
                    </div>
                    
                    {/* Anchors */}
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center gap-2 text-xs">
                        <div className="w-2 h-2 rounded-full bg-gold" />
                        <span className="font-ui text-taupe">Morning Intention: Lead with clarity and purpose</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <div className="w-2 h-2 rounded-full bg-teal" />
                        <span className="font-ui text-taupe">Text Nudge: You&apos;re not behind. You&apos;re becoming.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 text-taupe" />
          </motion.div>
        </motion.div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <p className="font-ui text-[11px] uppercase tracking-eyebrow text-plum mb-4">The Problem</p>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-indigo-rich">
              The scramble isn&apos;t a character flaw
            </h2>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <motion.p variants={fadeInUp} className="font-body text-xl text-indigo-rich/80 leading-relaxed text-center">
              It&apos;s a signal. A yellow light saying: <em>something needs your attention</em>.
            </motion.p>
            
            <motion.p variants={fadeInUp} className="font-body text-lg text-indigo-rich/70 leading-relaxed text-center max-w-3xl mx-auto">
              You wake up already behind. Your calendar owns you. Your energy is scattered across a dozen half-finished priorities. You&apos;re not lazy—you&apos;re <em>reactive</em>. And reactivity is exhausting.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="bg-lavender/30 rounded-lg p-8 my-12">
              <p className="font-body text-xl text-indigo-rich text-center italic leading-relaxed">
                &ldquo;The scramble is what happens when we&apos;re trying to survive our own lives instead of commanding them.&rdquo;
              </p>
            </motion.div>
            
            <motion.p variants={fadeInUp} className="font-body text-lg text-indigo-rich/70 leading-relaxed text-center max-w-3xl mx-auto">
              You don&apos;t need more discipline. You don&apos;t need another productivity hack. You need a <strong>shift in how you relate to your own life</strong>.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* The Shift Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-indigo-rich">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <p className="font-ui text-[11px] uppercase tracking-eyebrow text-gold mb-4">The Shift</p>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-ivory">
              From white-knuckling to soft landing
            </h2>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeInUp} className="bg-indigo/50 p-8 rounded-lg border border-gold/20">
              <h3 className="font-display text-2xl font-semibold text-gold mb-4">What You&apos;re Leaving</h3>
              <ul className="space-y-3 font-body text-ivory/80">
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">•</span>
                  <span>Waking up in emergency mode</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">•</span>
                  <span>Saying yes to everything</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">•</span>
                  <span>Energy scattered, focus fractured</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">•</span>
                  <span>Living by other people&apos;s urgency</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-gold/10 p-8 rounded-lg border border-gold/30">
              <h3 className="font-display text-2xl font-semibold text-gold mb-4">What You&apos;re Moving Toward</h3>
              <ul className="space-y-3 font-body text-ivory">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                  <span>Intentional morning command</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                  <span>Clear yeses and empowered nos</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                  <span>Energy directed, focus protected</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                  <span>Living by your own aligned priorities</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What It Is Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-ivory">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <p className="font-ui text-[11px] uppercase tracking-eyebrow text-plum mb-4">What It Is</p>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-indigo-rich mb-6">
              A 21-day recalibration
            </h2>
            <p className="font-body text-xl text-indigo-rich/70 max-w-2xl mx-auto">
              Not a course. Not a bootcamp. A <em>practice</em>—delivered daily, designed to fit into the life you already have.
            </p>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-3 gap-6"
          >
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-lg shadow-sm border border-lavender/50 text-center">
              <Clock className="w-10 h-10 text-teal mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold text-indigo-rich mb-2">Daily Practice</h3>
              <p className="font-body text-indigo-rich/70">10-15 minutes of guided reflection and aligned action</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-lg shadow-sm border border-lavender/50 text-center">
              <Heart className="w-10 h-10 text-plum mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold text-indigo-rich mb-2">Inner Work</h3>
              <p className="font-body text-indigo-rich/70">Examine patterns, reclaim agency, build new rhythms</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-lg shadow-sm border border-lavender/50 text-center">
              <Compass className="w-10 h-10 text-gold mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold text-indigo-rich mb-2">Practical Tools</h3>
              <p className="font-body text-indigo-rich/70">Worksheets, prompts, and frameworks you keep forever</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <p className="font-ui text-[11px] uppercase tracking-eyebrow text-plum mb-4">How It Works</p>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-indigo-rich">
              Three weeks. Three shifts.
            </h2>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center">
                <span className="font-display text-2xl font-semibold text-teal">1</span>
              </div>
              <div className="flex-1 bg-lavender/20 p-8 rounded-lg">
                <h3 className="font-display text-2xl font-semibold text-indigo-rich mb-3">Week 1: Recognition</h3>
                <p className="font-body text-lg text-indigo-rich/70 leading-relaxed">
                  See your current patterns clearly. Where does reactivity show up? What triggers the scramble? You&apos;ll map your energy leaks and identify your personal yellow lights.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-plum/10 flex items-center justify-center">
                <span className="font-display text-2xl font-semibold text-plum">2</span>
              </div>
              <div className="flex-1 bg-lavender/20 p-8 rounded-lg">
                <h3 className="font-display text-2xl font-semibold text-indigo-rich mb-3">Week 2: Reclamation</h3>
                <p className="font-body text-lg text-indigo-rich/70 leading-relaxed">
                  Take back your time, attention, and energy. Practice empowered boundaries. Build your morning command ritual. Learn to pause before reacting.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
                <span className="font-display text-2xl font-semibold text-gold">3</span>
              </div>
              <div className="flex-1 bg-lavender/20 p-8 rounded-lg">
                <h3 className="font-display text-2xl font-semibold text-indigo-rich mb-3">Week 3: Integration</h3>
                <p className="font-body text-lg text-indigo-rich/70 leading-relaxed">
                  Anchor the practices into sustainable rhythms. Create your personal Command Framework. Design your ongoing support system for continued aligned living.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-ivory">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <p className="font-ui text-[11px] uppercase tracking-eyebrow text-plum mb-4">What You Get</p>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-indigo-rich">
              Daily deliverables
            </h2>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {[
              { icon: Sparkles, title: "Daily Audio Teaching", desc: "5-7 minutes of guided insight from Babs" },
              { icon: CheckCircle, title: "Practice Prompt", desc: "One aligned action to take that day" },
              { icon: Compass, title: "Reflection Question", desc: "Journal prompt for deeper self-awareness" },
              { icon: Heart, title: "Community Support", desc: "Optional sharing in private community space" },
              { icon: Clock, title: "Lifetime Access", desc: "Keep all materials and revisit anytime" },
              { icon: ArrowRight, title: "Bonus Resources", desc: "Worksheets, frameworks, and integration tools" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-lavender/50 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-indigo-rich" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-indigo-rich mb-1">{item.title}</h3>
                  <p className="font-body text-indigo-rich/70">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-indigo-rich">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <p className="font-ui text-[11px] uppercase tracking-eyebrow text-gold mb-4">Who It&apos;s For</p>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-ivory">
              This is for you if...
            </h2>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            {[
              "You're tired of living in reactive mode",
              "You know there's a more aligned way but don't know how to get there",
              "You've tried productivity systems that didn't stick",
              "You want practical tools rooted in spiritual wisdom",
              "You're ready to command your life instead of surviving it",
              "You value community and shared journey",
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-center gap-4 bg-indigo/30 p-6 rounded-lg border border-gold/20"
              >
                <CheckCircle className="w-6 h-6 text-gold flex-shrink-0" />
                <p className="font-body text-lg text-ivory">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-ivory">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <p className="font-ui text-[11px] uppercase tracking-eyebrow text-plum mb-4">Your Guide</p>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-indigo-rich">
              Meet AmiLynne Carroll
            </h2>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row gap-12 items-center"
          >
            <motion.div variants={fadeInUp} className="flex-shrink-0">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-lavender to-plum/30 flex items-center justify-center">
                <span className="font-display text-6xl text-indigo-rich/30">Babs</span>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="flex-1 space-y-6">
              <p className="font-body text-xl text-indigo-rich/80 leading-relaxed">
                Also known as &ldquo;Babs,&rdquo; AmiLynne is the creator of LifeCharter and founder of Sacred Kaleidoscope Community. She&apos;s an Alignment Architect who helps people move from fear, self-doubt, and survival patterns into purpose, clarity, and aligned action.
              </p>
              <p className="font-body text-lg text-indigo-rich/70 leading-relaxed">
                Through her daily podcast <em>Conversations of Consequence</em>, her coaching work, and her writing, Babs has guided thousands toward remembering who they are and choosing their next aligned step.
              </p>
              <p className="font-body text-lg text-indigo-rich/70 leading-relaxed">
                Her approach blends spiritual wisdom with practical tools—because transformation happens when the inner and outer work meet.
              </p>
              <p className="font-display text-2xl text-plum italic">
                &ldquo;Head up, wings out.&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <p className="font-ui text-[11px] uppercase tracking-eyebrow text-plum mb-4">FAQ</p>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-indigo-rich">
              Questions & Answers
            </h2>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            {[
              {
                q: "How much time will this take each day?",
                a: "The daily practice is designed to take 10-15 minutes. The audio teaching is 5-7 minutes, and the reflection/action prompts take another 5-10 minutes. It's built to fit into busy lives.",
              },
              {
                q: "What if I fall behind?",
                a: "Life happens. You'll have lifetime access to all materials, so you can go at your own pace. The community and live elements are time-bound, but the core content is yours forever.",
              },
              {
                q: "Is this a religious program?",
                a: "No. The Command Shift is spiritually grounded but not religious. We work with universal principles of alignment, presence, and intentional living that can complement any faith tradition or none at all.",
              },
              {
                q: "What's the difference between this and LifeCharter?",
                a: "LifeCharter is Babs' comprehensive lifestyle design system covering all 12 dimensions of life. The Command Shift is a focused 21-day intensive specifically on moving from reactivity to command. It's a powerful entry point and also complements deeper LifeCharter work.",
              },
              {
                q: "Will there be live calls?",
                a: "Yes, there will be optional live Q&A calls during the challenge where you can connect with Babs and the community. Recordings will be available if you can't attend live.",
              },
              {
                q: "What if it's not for me?",
                a: "We offer a 7-day satisfaction guarantee. If you participate for the first week and find it's not the right fit, we'll refund your investment.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-lavender/20 p-8 rounded-lg"
              >
                <h3 className="font-display text-xl font-semibold text-indigo-rich mb-3">{faq.q}</h3>
                <p className="font-body text-indigo-rich/70 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="join" className="py-24 px-4 sm:px-6 lg:px-8 bg-indigo-rich">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <p className="font-ui text-[11px] uppercase tracking-eyebrow text-gold mb-4">Ready to Shift?</p>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-ivory mb-6">
              Your command begins now
            </h2>
            <p className="font-body text-xl text-ivory/80 mb-4">
              21 days. One shift. A new way of being.
            </p>
            <p className="font-body text-lg text-ivory/60 mb-10">
              Join the waitlist to be notified when the next round opens.
            </p>
          </motion.div>
          
          <motion.div {...fadeInUp}>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-4 rounded-sm font-body text-indigo-rich bg-ivory border-0 focus:ring-2 focus:ring-gold outline-none"
                />
                <button
                  type="submit"
                  className="bg-gold text-indigo-rich font-ui text-xs uppercase tracking-button font-semibold px-8 py-4 rounded-sm hover:bg-gold-rich transition-all duration-300 hover:shadow-lg whitespace-nowrap"
                >
                  {isSubmitted ? "You're on the list!" : "Notify Me"}
                </button>
              </div>
            </form>
            <p className="font-body text-sm text-ivory/50 mt-4">
              No spam. Unsubscribe anytime. Your information is protected.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-indigo border-t border-gold/10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="font-display text-2xl font-semibold text-ivory mb-2">The Command Shift</h3>
              <p className="font-body text-ivory/60">A Sacred Kaleidoscope Community offering</p>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-ivory/60 hover:text-gold transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-ivory/60 hover:text-gold transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="text-ivory/60 hover:text-gold transition-colors">
                <Podcast className="w-6 h-6" />
              </a>
              <a href="#" className="text-ivory/60 hover:text-gold transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gold/10 mt-8 pt-8 text-center">
            <p className="font-body text-sm text-ivory/40">
              © {new Date().getFullYear()} Sacred Kaleidoscope Community LLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
