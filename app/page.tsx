"use client";

import { useState } from "react";
import {
  MoonIcon,
  SunIcon,
  KeyboardIcon,
  TwitterIcon,
  StarIcon,
  ArrowRightIcon,
  MailIcon,
  GithubIcon,
  HeartIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { DotBackground } from "@/components/ui/dot-background";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function Home() {
  const [practiceWord, setPracticeWord] = useState("");
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <DotBackground />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <KeyboardIcon className="h-8 w-8 text-primary" />
              <span
                onClick={() => {
                  router.push(`/`);
                }}
                className="ml-2 text-xl font-bold cursor-pointer"
              >
                FocusType
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  window.open("https://github.com/Neel-07/FocusType", "_blank")
                }
              >
                <StarIcon className="h-4 w-4 mr-0 sm:mr-2" />
                <span className="hidden sm:inline">Give a star on Github</span>
              </Button>

              <Button
                className="bg-blue-400 text-white"
                variant="outline"
                size="sm"
                onClick={() =>
                  window.open(
                    "https://twitter.com/intent/follow?screen_name=neel_m7"
                  )
                }
              >
                <TwitterIcon className="h-4 w-4 mr-0 sm:mr-2" />
                <span className="hidden sm:inline">Follow Me on Twitter</span>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? (
                  <SunIcon className="h-5 w-5" />
                ) : (
                  <MoonIcon className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-8"
          >
            <h1 className="text-6xl font-bold tracking-tight">
              Master Typing,
              <br />
              <span className="text-primary">One Word at a Time</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Improve your typing accuracy and speed by focusing on individual
              words. Perfect for building muscle memory and confidence.
            </p>

            <Card className="p-6 max-w-lg mx-auto space-y-4">
              <div className="space-y-2">
                <h2 className="text-lg font-semibold">
                  Choose your practice word
                </h2>
                <p className="text-sm text-muted-foreground">
                  Enter a word you want to master through repetitive practice
                </p>
              </div>

              <div className="flex gap-2">
                <Input
                  type="text"
                  placeholder="Enter a word..."
                  value={practiceWord}
                  onChange={(e) => setPracticeWord(e.target.value)}
                  className="flex-1"
                />
                <Button
                  disabled={!practiceWord.trim()}
                  onClick={() => {
                    router.push(
                      `/practice?word=${encodeURIComponent(practiceWord)}`
                    );
                  }}
                >
                  Start Practice
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-background p-6 rounded-lg shadow-sm"
            >
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <KeyboardIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time Feedback</h3>
              <p className="text-muted-foreground">
                Get instant visual feedback on your typing accuracy with
                color-coded characters.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-background p-6 rounded-lg shadow-sm"
            >
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <StarIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
              <p className="text-muted-foreground">
                Monitor your improvement with detailed statistics on accuracy
                and speed.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-background p-6 rounded-lg shadow-sm"
            >
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <KeyboardIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visual Keyboard</h3>
              <p className="text-muted-foreground">
                See your keystrokes reflected on a virtual keyboard for better
                learning.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold">How FocusType Works</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Our simple three-step process helps you master typing through
              focused practice
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose a Word</h3>
              <p className="text-muted-foreground">
                Select a word you want to practice or that you frequently
                mistype
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Practice Repeatedly
              </h3>
              <p className="text-muted-foreground">
                Type the word multiple times to build muscle memory and
                confidence
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
              <p className="text-muted-foreground">
                Monitor your improvement in speed and accuracy over time
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold">What Our Users Say</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Hear from people who have improved their typing skills with
              FocusType
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-background p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                  <span className="font-semibold text-primary">JD</span>
                </div>
                <div>
                  <h4 className="font-semibold">John Doe</h4>
                  <p className="text-sm text-muted-foreground">
                    Software Developer
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "FocusType helped me overcome my struggle with certain technical
                terms. After just a week of practice, I noticed a significant
                improvement in my typing speed and accuracy."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-background p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                  <span className="font-semibold text-primary">AS</span>
                </div>
                <div>
                  <h4 className="font-semibold">Alice Smith</h4>
                  <p className="text-sm text-muted-foreground">
                    Content Writer
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "As a writer, I need to type quickly and accurately. FocusType's
                approach of practicing individual words has helped me eliminate
                common typos in my work."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-background p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                  <span className="font-semibold text-primary">MJ</span>
                </div>
                <div>
                  <h4 className="font-semibold">Michael Johnson</h4>
                  <p className="text-sm text-muted-foreground">Student</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "I used to make the same typing mistakes over and over. With
                FocusType, I could target those specific words and now I type
                them without thinking. My overall WPM has increased by 15!"
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="text-muted-foreground mt-4">
              Find answers to common questions about FocusType
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                How is FocusType different from other typing tools?
              </AccordionTrigger>
              <AccordionContent>
                Unlike traditional typing tutors that focus on general typing
                skills, FocusType allows you to practice specific words that you
                struggle with. This targeted approach helps build muscle memory
                more efficiently for problematic words.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Is FocusType suitable for beginners?
              </AccordionTrigger>
              <AccordionContent>
                Yes! FocusType is designed for typists of all skill levels.
                Beginners can use it to master basic words, while advanced
                typists can focus on challenging technical terms or frequently
                mistyped words.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Can I track my progress over time?
              </AccordionTrigger>
              <AccordionContent>
                Absolutely. FocusType provides detailed statistics on your
                typing speed and accuracy for each practice session, allowing
                you to see your improvement over time.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Is FocusType free to use?</AccordionTrigger>
              <AccordionContent>
                Yes, FocusType is completely free and open-source. You can use
                all features without any limitations or subscriptions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Can I contribute to FocusType?
              </AccordionTrigger>
              <AccordionContent>
                We welcome contributions! FocusType is an open-source project,
                and you can contribute by visiting our GitHub repository and
                submitting pull requests or reporting issues.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-6 "
          >
            <h2 className="text-3xl font-bold">
              Ready to Improve Your Typing?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start practicing now and see the difference in your typing speed
              and accuracy
            </p>
            <div>
              <Button
                size="lg"
                className="mt-4"
                onClick={() => {
                  document.querySelector("input")?.focus();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Get Started Now
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-muted/30 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start">
                <KeyboardIcon className="h-6 w-6 text-primary" />
                <span className="ml-2 text-lg font-bold">FocusType</span>
              </div>

              <p className="mt-4 text-sm text-muted-foreground">
                © {new Date().getFullYear()} FocusType. All rights reserved.
              </p>
            </div>

            <div className="flex-col items-center justify-center">
              <p className="mt-2 text-sm flex items-center justify-center md:justify-start">
                Made with <HeartIcon className="h-4 w-4 text-red-500 mx-1" /> by{" "}
                <a
                  href="https://neelmishra.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 text-primary hover:underline"
                >
                  Neel
                </a>
              </p>

              <div className="flex space-x-3 ml-7">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                    window.open(
                      "https://github.com/Neel-07/FocusType",
                      "_blank"
                    )
                  }
                >
                  <GithubIcon className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                    window.open("https://twitter.com/neel_m7", "_blank")
                  }
                >
                  <TwitterIcon className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
