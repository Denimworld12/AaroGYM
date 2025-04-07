"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, Menu, Moon, Sun, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { LoginModal } from "@/components/login-modal"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { HoverEffect } from "@/components/ui/card-hover-effect"
import { TracingBeam } from "@/components/ui/tracing-beam"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import { LampContainer } from "@/components/ui/lamp"

export default function LandingPage() {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState("dark")
  const [language, setLanguage] = useState("english")

  useEffect(() => {
    // Show login modal after 15 seconds
    const timer = setTimeout(() => {
      setIsModalOpen(true)
    }, 15000)

    // Show login modal every 1 minute if user doesn't log in
    const intervalTimer = setInterval(() => {
      const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"
      if (!isLoggedIn) {
        setIsModalOpen(true)
      }
    }, 60000)

    return () => {
      clearTimeout(timer)
      clearInterval(intervalTimer)
    }
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
    document.documentElement.classList.toggle("dark")
  }

  const toggleLanguage = () => {
    setLanguage(language === "english" ? "hindi" : "english")
  }

  const features = [
    {
      title: "AI Workout Generation",
      description: "Personalized workout plans based on your fitness level, goals, and preferences.",
      icon: "/placeholder.svg?height=100&width=100",
    },
    {
      title: "Smart Diet Plans",
      description: "Customized nutrition recommendations tailored to your dietary needs and preferences.",
      icon: "/placeholder.svg?height=100&width=100",
    },
    {
      title: "Real-time Posture Correction",
      description: "Get instant feedback on your exercise form to prevent injuries and maximize results.",
      icon: "/placeholder.svg?height=100&width=100",
    },
    {
      title: "Food Scan Technology",
      description: "Scan any food item to instantly get nutritional information and calorie counts.",
      icon: "/placeholder.svg?height=100&width=100",
    },
    {
      title: "Multilingual Support",
      description: "Use the app in your preferred language with our multilingual interface.",
      icon: "/placeholder.svg?height=100&width=100",
    },
    {
      title: "Wearable Sync",
      description: "Seamlessly connect with your fitness wearables for comprehensive health tracking.",
      icon: "/placeholder.svg?height=100&width=100",
    },
  ]

  const testimonials = [
    {
      quote:
        "This AI fitness assistant transformed my workout routine. The personalized plans are exactly what I needed!",
      name: "Sarah Johnson",
      title: "Lost 15kg in 6 months",
    },
    {
      quote:
        "The real-time posture correction feature helped me avoid injuries and get better results from my workouts.",
      name: "Michael Chen",
      title: "Fitness enthusiast",
    },
    {
      quote: "As a busy professional, the diet plans and food scanning feature made healthy eating so much easier.",
      name: "Priya Sharma",
      title: "Tech executive",
    },
    {
      quote:
        "The multilingual support made this accessible for my entire family. We're all getting healthier together!",
      name: "Carlos Rodriguez",
      title: "Family of 4",
    },
    {
      quote: "Syncing with my fitness watch gives me a complete picture of my health journey. Highly recommend!",
      name: "Emma Wilson",
      title: "Marathon runner",
    },
  ]

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white ${theme === "light" ? "light-mode" : ""}`}
    >
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className="text-xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  Working Help Health
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="#features" className="text-gray-300 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                About
              </Link>
              <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
              <button onClick={toggleLanguage} className="text-gray-300 hover:text-white transition-colors">
                {language === "english" ? "हिंदी" : "English"}
              </button>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <Button
                onClick={() => router.push("/dashboard")}
                className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white"
              >
                Dashboard
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleTheme}
                className="p-2 mr-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-gray-900 border-b border-gray-800"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  href="/"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
                >
                  Home
                </Link>
                <Link
                  href="#features"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
                >
                  Features
                </Link>
                <Link
                  href="#about"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
                >
                  About
                </Link>
                <Link
                  href="#contact"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
                >
                  Contact
                </Link>
                <button
                  onClick={toggleLanguage}
                  className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
                >
                  {language === "english" ? "हिंदी" : "English"}
                </button>
                <Button
                  onClick={() => router.push("/dashboard")}
                  className="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white"
                >
                  Dashboard
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <LampContainer className="pt-24">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Start Your Fitness <br /> Journey with AI
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-6 text-center"
        >
          <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-8">
            Personalized workout plans, diet recommendations, and real-time coaching powered by advanced AI.
          </p>
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white text-lg px-8 py-6"
            size="lg"
          >
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </LampContainer>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <BackgroundBeams className="absolute inset-0" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Powerful Features
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Our AI-powered fitness assistant offers a comprehensive suite of features to help you achieve your fitness
              goals.
            </p>
          </div>

          <HoverEffect
            items={features.map((feature) => ({
              title: feature.title,
              description: feature.description,
              link: "#",
            }))}
          />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-20 bg-black/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Why Choose Us
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              We combine cutting-edge AI technology with fitness expertise to deliver a personalized experience.
            </p>
          </div>

          <TracingBeam className="px-6">
            <div className="max-w-2xl mx-auto my-10 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Personalized Experience</h3>
                <p className="text-gray-400">
                  Our AI analyzes your unique body metrics, fitness level, and goals to create truly personalized
                  workout and nutrition plans that evolve as you progress.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Science-Backed Approach</h3>
                <p className="text-gray-400">
                  All our recommendations are based on the latest fitness and nutrition research, ensuring you get
                  effective and safe guidance.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Real-Time Feedback</h3>
                <p className="text-gray-400">
                  Get instant feedback on your exercise form and nutrition choices, helping you make better decisions
                  and avoid injuries.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Privacy-Focused</h3>
                <p className="text-gray-400">
                  Your health data stays on your device with our federated learning approach, ensuring your privacy
                  while still benefiting from AI improvements.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Accessible Anywhere</h3>
                <p className="text-gray-400">
                  Access your fitness assistant from any device, with seamless syncing between your phone, tablet, and
                  wearables.
                </p>
              </div>
            </div>
          </TracingBeam>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Success Stories
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Hear from our users who have transformed their fitness journey with our AI assistant.
            </p>
          </div>

          <div className="h-[40vh] md:h-[50vh] w-full">
            <InfiniteMovingCards items={testimonials} direction="right" speed="slow" pauseOnHover={true} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <p className="text-gray-400 text-xl max-w-3xl mx-auto">
                Have questions or feedback? We'd love to hear from you.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl shadow-2xl border border-gray-800">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Working Help Health
              </h3>
              <p className="text-gray-400 mb-4">Your AI-powered fitness companion for a healthier lifestyle.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="text-gray-400 hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Fitness Tips
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Nutrition Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Data Protection
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Working Help Health. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Login Modal */}
      <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

