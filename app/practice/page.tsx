'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, RefreshCw, Keyboard } from 'lucide-react';
import { useRouter } from 'next/navigation';

const QWERTY_LAYOUT = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
  ['SPACE'],
];

export default function PracticePage() {
  const router = useRouter();
  const [targetWord, setTargetWord] = useState('example');
  const [currentInput, setCurrentInput] = useState('');
  const [typedHistory, setTypedHistory] = useState<string[]>([]);
  const [waitingForSpace, setWaitingForSpace] = useState(false);
  const [stats, setStats] = useState({
    attempts: 0,
    correct: 0,
    startTime: Date.now(),
    wpm: 0,
  });
  const [characters, setCharacters] = useState<
    Array<{ char: string; status: 'neutral' | 'correct' | 'incorrect' }>
  >([]);
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const word = params.get('word') || 'example';
    setTargetWord(word);
  }, []);

  useEffect(() => {
    setCharacters(
      targetWord.split('').map((char) => ({ char, status: 'neutral' }))
    );
  }, [targetWord]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setActiveKey(e.key === ' ' ? 'SPACE' : e.key.toUpperCase());
    };

    const handleKeyUp = () => {
      setActiveKey(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    if (waitingForSpace) {
      if (input.endsWith(' ')) {
        setCurrentInput('');
        setWaitingForSpace(false);
      }
      return;
    }

    setCurrentInput(input);

    const newCharacters = targetWord.split('').map((char, index) => ({
      char,
      status:
        input[index] === undefined
          ? 'neutral'
          : input[index] === char
          ? 'correct'
          : 'incorrect',
    })) as { char: string; status: "correct" | "neutral" | "incorrect" }[];

    setCharacters(newCharacters);

    if (input === targetWord) {
      setWaitingForSpace(true);
      setTypedHistory((prev) => [input, ...prev].slice(0, 5));
      setStats((prev) => ({
        ...prev,
        attempts: prev.attempts + 1,
        correct: prev.correct + 1,
        wpm: Math.round(
          ((prev.correct + 1) * targetWord.length * 60) /
            (5 * ((Date.now() - prev.startTime) / 1000))
        ),
      }));
    }
  };

  const accuracy = stats.attempts
    ? Math.round((stats.correct / stats.attempts) * 100)
    : 0;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-background">
      <div className="fixed top-4 left-4">
        <Button variant="ghost" onClick={() => router.push('/')}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
      </div>

      <div className="w-full max-w-4xl space-y-8">
        <Card className="p-8">
          <div className="text-center space-y-2 mb-8">
            <Keyboard className="h-12 w-12 mx-auto text-primary mb-4" />
            <h1 className="text-3xl font-bold">Practice Mode</h1>
            <p className="text-muted-foreground">
              Type &quot;{targetWord}&quot; repeatedly to improve your accuracy
            </p>
            <p className="text-sm text-muted-foreground">
              Press <span className="font-semibold">Space</span> after completing each word to continue
            </p>
          </div>

          {/* Recent attempts */}
          <div className="mb-6 text-center">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Recent Attempts</h3>
            <div className="flex flex-col gap-2">
              {typedHistory.map((word, idx) => (
                <div
                  key={idx}
                  className={`text-sm ${
                    word === targetWord ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {word}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center space-x-4 text-3xl font-mono mb-6">
            {characters.map((char, index) => (
              <span
                key={index}
                className={`transition-colors ${
                  char.status === 'correct'
                    ? 'text-green-500'
                    : char.status === 'incorrect'
                    ? 'text-red-500'
                    : ''
                }`}
              >
                {char.char}
              </span>
            ))}
            {waitingForSpace && (
              <span className="text-primary animate-pulse">⎵</span>
            )}
          </div>

          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={handleInputChange}
            className="w-full p-4 text-center text-xl border rounded-lg bg-background mb-8"
            autoFocus
            placeholder={waitingForSpace ? "Press Space to continue" : "Type the word..."}
          />

          {/* QWERTY Keyboard */}
          <div className="mb-8">
            {QWERTY_LAYOUT.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex justify-center gap-1 mb-1"
                style={{ marginLeft: rowIndex < 3 ? `${rowIndex * 20}px` : '0' }}
              >
                {row.map((key) => (
                  <div
                    key={key}
                    className={`${
                      key === 'SPACE' ? 'w-40' : 'w-10'
                    } h-10 flex items-center justify-center rounded border ${
                      activeKey === key
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary'
                    } transition-colors`}
                  >
                    {key === 'SPACE' ? '⎵' : key}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4 text-center mb-6">
            <div>
              <div className="text-2xl font-bold">{stats.attempts}</div>
              <div className="text-sm text-muted-foreground">Attempts</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{accuracy}%</div>
              <div className="text-sm text-muted-foreground">Accuracy</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{stats.wpm}</div>
              <div className="text-sm text-muted-foreground">WPM</div>
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              variant="outline"
              onClick={() => {
                setStats({
                  attempts: 0,
                  correct: 0,
                  startTime: Date.now(),
                  wpm: 0,
                });
                setCurrentInput('');
                setTypedHistory([]);
                setWaitingForSpace(false);
                inputRef.current?.focus();
              }}
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Reset Stats
            </Button>
          </div>
        </Card>
      </div>
    </main>
  );
}
