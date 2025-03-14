'use client';

import { useState } from 'react';
import { MoonIcon, SunIcon, KeyboardIcon, TwitterIcon, StarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import { DotBackground } from '@/components/ui/dot-background';
import { motion } from 'framer-motion';

export default function Home() {
  const [practiceWord, setPracticeWord] = useState('');
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
              <span onClick={() => {
                    router.push(`/`);
                  }} className="ml-2 text-xl font-bold">FocusType</span>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open('https://github.com/Neel-07/FocusType', '_blank')}
              >
                <StarIcon className="h-4 w-4 mr-2" />
                Give a star on Github
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open('https://twitter.com/intent/follow?screen_name=neel_m7')}
              >
                <TwitterIcon className="h-4 w-4 mr-2" />
                Follow Me on Twitter
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme('light')}
              >
                <SunIcon className="h-5 w-5" />
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
              Improve your typing accuracy and speed by focusing on individual words.
              Perfect for building muscle memory and confidence.
            </p>

            <Card className="p-6 max-w-lg mx-auto space-y-4">
              <div className="space-y-2">
                <h2 className="text-lg font-semibold">Choose your practice word</h2>
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
                    router.push(`/practice?word=${encodeURIComponent(practiceWord)}`);
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
                Get instant visual feedback on your typing accuracy with color-coded characters.
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
                Monitor your improvement with detailed statistics on accuracy and speed.
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
                See your keystrokes reflected on a virtual keyboard for better learning.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}