"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Cloud, Code, Coffee, Brain, Rocket, Sparkles, Zap, Star, Trophy, Target, Laptop, Pizza, Music } from "lucide-react";

function useDailyFunFact() {
  const [fact, setFact] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const todayKey = `${new Date().toISOString().slice(0, 10)}:funfact`;

    const cached = typeof window !== 'undefined' ? localStorage.getItem(todayKey) : null;
    if (cached) {
      setFact(cached);
      setLoading(false);
      return;
    }

    try {
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && k.endsWith(':funfact') && k !== todayKey) {
          localStorage.removeItem(k);
        }
      }
    } catch {}

    const controller = new AbortController();

    (async () => {
      try {
        const res = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/today', { signal: controller.signal });
        let text: string | undefined;
        if (res.ok) {
          const json = await res.json();
          text = (json && (json.text || json.data)) as string | undefined;
        }
        if (!text) {
          const res2 = await fetch('https://uselessfacts.jsph.pl/random.json?language=en', { signal: controller.signal });
          if (res2.ok) {
            const json2 = await res2.json();
            text = (json2 && (json2.text || json2.data)) as string | undefined;
          }
        }
        if (text) {
          setFact(text);
          try { localStorage.setItem(todayKey, text); } catch {}
        } else {
          throw new Error('No fact received');
        }
      } catch (e) {
        setError('Could not load fun fact');
      } finally {
        setLoading(false);
      }
    })();

    return () => controller.abort();
  }, []);

  return { fact, loading, error };
}

const conversations = [
  {
    question: "About me, but unfiltered",
    answer: (
      <>
      Hello! I'm a <strong>developer</strong> who exists somewhere between <span className="text-emerald-600 font-semibold">I can fix that</span> and <span className="text-pink-600 font-semibold">Why did I think I could fix that?</span>
      </>
    ),
    image: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjJ6cnR4bG0xOXU0b2Y2ZWtueHR3M2V1M3RncXEycG8wc3Btb2IxeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cnzP4cmBsiOrccg20V/giphy.gif"
  },
  {
    question: "This is For Recruiter...",
    answer: (
      <>
      I don't know every tech under the sun, and I'm definitely <u className="underline decoration-red-500 underline-offset-2">not a rocket scientist</u>. But I learn fast and get things working. ✨
      </>
    ),
    image: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnF0ZW52aWUweDJndzI5dmRlampja294ZmpxOW0zeWkzenh0N250MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2sddCIZRYfiPlNeLZn/giphy.gif"
  },
  {
    question: "this is also For Recruiter...",
     answer: (
      <>
      Please stop asking me to talk to your <strong>bot</strong>. I am really happy to talk to <span className="text-emerald-600 font-semibold">HUMAN</span> Recruiter. Still I am trying my best to talk to the bot but inside I feel little weird (just saying)
      </>
    ),
    image: "https://media.giphy.com/media/l0HUpt2s9Pclgt9Vm/giphy.gif"
  },
  {
    question: "This is For Hiring Manager...",
    answer: (
      <>
      Please <span className="text-pink-600 font-semibold">Hire ME!</span> I will prove myself worthy, just give me a laptop and a Wi-Fi connection
      </>
    ),
    image: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDMyNWhicnZ2bzhiMHVqdWw3eWYxb3IzdW5kY2tmazZ1cjl2ajl5ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4LwTZa7jZZQxCWfaAD/giphy.gif"
  },
  {
    question: "So here's the true story of my life.",
    answer: (
      <>
        On a normal day, I am a <strong>perfectly functioning developer</strong>. I can debug, build features, fix my own messes, and occasionally feel very powerful while deleting 300 lines of code and replacing it with 7.
        <br />
        But the moment a coding interview starts—my brain respectfully clocks out. Like, thank you so much for this opportunity, but I am now a <u className="underline decoration-red-500 underline-offset-2">potato</u>.
        <br />
        If you give me the same exact question at home, I'll solve it before the deadline. But in an interview? Suddenly I've never seen a loop in my life. <strong>What is JavaScript?</strong> Who am I? Who are you? Why are we here?
        <br />
        It's like when perfectly healthy patients go to the doctor and suddenly their blood pressure is like: <em>"SURPRISE! Let's be dramatic today!"</em>
        <br />
        There's a name for that: <strong>White Coat Syndrome</strong>. So I have the developer version of that: <span className="text-pink-600 font-semibold">White Board Syndrome (a.k.a. Coding Blood Pressure)</span>.
        <br />
        <u className="underline decoration-red-500 underline-offset-2">If anyone has breathing techniques, affirmations, dark magic, or snacks that fix this, please share. I am open to healing.</u>
        <br />
        😌 But can I handle pressure at work? <strong className="text-emerald-600">Yes, absolutely.</strong> Because at work: I know the system, know the expectations, and know the people aren't silently judging my thought process in real-time like a talent show audition.
        <br />
        Give me a real project, a cup of coffee, and some space to think? <strong>I will deliver.</strong> <span className="text-emerald-600 font-semibold">Under pressure, even better.</span> Just, maybe don't watch me type while I do it. My neurons get shy.
      </>
    ),
    image: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGc5MW02Z3RxeXg5MmZneGF5Z213N28yYTZnZGloYzR2M3ZkeGxlZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZIG63RdogLgqI/giphy.gif"
  },
  {
    question: "Work authorization?",
    answer: (
      <>
      <span className="text-pink-600 font-semibold">I'm here but not from here</span>. H4 EAD - I don't need any sponsorship! 🇺🇸
      </>
    ),
    image: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjd1N3pjMnMwbDF4b2FjemJsYXUzNWEzNWk5a204dzZhc3E1ZnR1bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6ZsVuc0gxSeAV3hu/giphy.gif"
  },
  {
    question: "My long-term goals....",
    answer: (
      <>
      I want to start a <u className="underline decoration-red-500 underline-offset-2">coffee shop</u>, which is not possible... so I want to <span className="text-emerald-600 font-semibold">retire</span> or <span className="text-pink-600 font-semibold">die</span> at one company (whatever comes first). ☕💼⚰️
      </>
    ),
    image: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTFlMTg2cDl1cGR3dDZzOG1qMDVoc2o1OG02M2RoeHhwcDV5dXN6NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ADD4w6XgqLBJohQdBK/giphy.gif"
  },
  {
    question:(
      <>
        When somebody asks me 'Why do you need this job? I want to answer like this... but I can't",
      </>
    ),
    answer: (
      <>
      Because I've been googling <u className="underline decoration-red-500 underline-offset-2">'how to become financially stable'</u> and apparently... it starts with a <span className="text-pink-600 font-semibold">job</span>. Who knew? 💸
      </>
    ),
    image: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmVrM3Z6b3pmNXhqbG5jYnJlamxiYTFjcXRoYzFra3V6bXJiM2JqcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ull4kCmezNY53TsVJI/giphy.gif"
  },
  {
    question: "Do you like mentoring?",
    answer: (
      <>
      Yep! I learn from others, others learn from <span className="text-emerald-600 font-semibold">me—we</span> just exchange brain cells politely. 🧠🤝
      <br/>
      <strong>And bonus</strong>: I end up knowing more people than just the plant on my desk. 🪴
      </>
    ),
    image: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHR1cGlqeGJkODA5bWxibjRpNTc1ZWdva2I1dXo2N2gybWJ6M3RwayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lNBfgxkGdWPGxllHNc/giphy.gif"
  },
  {
    question: "My favorite food",
    answer: "Indian, Thai and Japanese! Spice is life. 🌶️🍛",
    image: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnI2eWMwcnp5ZHh3N3Q1ZDJpZ2IyMHBhdHJ6bnJ5aG40M2twMWF0ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/J3LpG71GZKNqWun5NS/giphy.gif"
  },
];

function SafeImage({
  src,
  alt,
  fallback,
  className,
  width,
  height,
}: {
  src: string;
  alt: string;
  fallback: string;
  className?: string;
  width: number;
  height: number;
}) {
  const [current, setCurrent] = useState(src);
  return (
    <Image
      src={current}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => setCurrent(fallback)}
      unoptimized
      sizes="(min-width: 768px) 16rem, 100vw"
    />
  );
}

export default function OffTheRecord() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [weather, setWeather] = useState({ temp: 72, condition: "Partly Cloudy" });
  const { fact, loading: factLoading, error: factError } = useDailyFunFact();

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getDayGreeting = () => {
    const day = currentTime.toLocaleDateString('en-US', { weekday: 'long' });
    const today = currentTime.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    
    const month = currentTime.getMonth();
    const date = currentTime.getDate();
    let holiday = "";
    
    if (month === 0 && date === 1) holiday = "🎉 Happy New Year!";
    if (month === 6 && date === 4) holiday = "🇺🇸 Happy Independence Day!";
    if (month === 10 && date === 11) holiday = "🎖️ Happy Veterans Day!";
    if (month === 11 && date === 25) holiday = "🎄 Merry Christmas!";
    
    if (day === 'Friday') return `🎉 Happy Friday! ${holiday}`;
    if (holiday) return holiday;
    return `Happy ${day}!`;
  };

  return (
    <div className="relative min-h-screen">
      {/* Background canvas (fixed, behind all content) */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {/* Base gradient (light & dark) */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-zinc-50 to-slate-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800" />

        {/* Radial accent to make it more attractive */}
        <div className="absolute inset-0 opacity-60 dark:opacity-40 bg-[radial-gradient(1200px_600px_at_20%_10%,rgba(168,85,247,0.10),transparent),radial-gradient(900px_500px_at_80%_90%,rgba(236,72,153,0.10),transparent)]" />

        {/* Floating icons layer (soft, blurred, always visible while scrolling) */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ x: [0, 100, 0], y: [0, -80, 0], rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 left-10 text-gray-800 dark:text-white/40 opacity-20 blur-[1px]"
          >
            <Code size={60} />
          </motion.div>
          <motion.div
            animate={{ x: [0, -120, 0], y: [0, 100, 0], rotate: [0, 360] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/5 right-20 text-gray-800 dark:text-white/40 opacity-20 blur-[1px]"
          >
            <Coffee size={50} />
          </motion.div>
          <motion.div
            animate={{ x: [0, 80, 0], y: [0, 120, 0], rotate: [0, 360] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            className="absolute bottom-1/6 left-1/4 text-gray-800 dark:text-white/40 opacity-20 blur-[1px]"
          >
            <Brain size={55} />
          </motion.div>
          <motion.div
            animate={{ x: [0, -90, 0], y: [0, -100, 0], rotate: [0, 360] }}
            transition={{ duration: 19, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/3 right-10 text-gray-800 dark:text-white/40 opacity-20 blur-[1px]"
          >
            <Rocket size={45} />
          </motion.div>
          <motion.div
            animate={{ x: [0, 110, 0], y: [0, 90, 0], rotate: [0, 360] }}
            transition={{ duration: 21, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            className="absolute bottom-1/3 right-1/4 text-gray-800 dark:text-white/40 opacity-20 blur-[1px]"
          >
            <Sparkles size={40} />
          </motion.div>
          <motion.div
            animate={{ x: [0, 90, 0], y: [0, -110, 0], rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
            className="absolute top-1/2 left-20 text-gray-800 dark:text-white/40 opacity-20 blur-[1px]"
          >
            <Zap size={48} />
          </motion.div>
          <motion.div
            animate={{ x: [0, -80, 0], y: [0, 100, 0], rotate: [0, 360] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4.5 }}
            className="absolute bottom-10 right-1/3 text-gray-800 dark:text-white/40 opacity-20 blur-[1px]"
          >
            <Star size={52} />
          </motion.div>
          <motion.div
            animate={{ x: [0, 100, 0], y: [0, -100, 0], rotate: [0, 360] }}
            transition={{ duration: 23, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute top-2/3 left-1/3 text-gray-800 dark:text-white/40 opacity-20 blur-[1px]"
          >
            <Trophy size={46} />
          </motion.div>
          <motion.div
            animate={{ x: [0, -110, 0], y: [0, 90, 0], rotate: [0, 360] }}
            transition={{ duration: 19, repeat: Infinity, ease: "easeInOut", delay: 3.5 }}
            className="absolute top-1/4 right-1/2 text-gray-800 dark:text-white/40 opacity-20 blur-[1px]"
          >
            <Target size={44} />
          </motion.div>
          <motion.div
            animate={{ x: [0, 70, 0], y: [0, -90, 0], rotate: [0, 360] }}
            transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 5 }}
            className="absolute bottom-1/4 left-1/2 text-gray-800 dark:text-white/40 opacity-20 blur-[1px]"
          >
            <Laptop size={50} />
          </motion.div>
          <motion.div
            animate={{ x: [0, -95, 0], y: [0, 85, 0], rotate: [0, 360] }}
            transition={{ duration: 21, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/2 right-10 text-gray-800 dark:text-white/40 opacity-20 blur-[1px]"
          >
            <Pizza size={42} />
          </motion.div>
          <motion.div
            animate={{ x: [0, 105, 0], y: [0, -95, 0], rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            className="absolute bottom-1/2 left-10 text-gray-800 dark:text-white/40 opacity-20 blur-[1px]"
          >
            <Music size={48} />
          </motion.div>
        </div>
      </div>
      <header className="relative z-20 bg-white dark:bg-gray-800 shadow-md sticky top-0">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Off The Record
            </h1>
            <p className="text-md text-gray-600 dark:text-gray-400">Thoughts & Nonsense 🎭</p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:scale-105 transition-all text-sm font-semibold"
            >
              ← Home
            </Link>
          </div>
        </div>
      </header>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 text-scale-lg">
        <div className="flex gap-8">
          <main className="flex-1">
            <div className="space-y-8">
              {conversations.map((convo, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Image */}
                      <div className="md:w-64 flex-shrink-0">
                        <SafeImage
                          src={convo.image}
                          alt="Illustration"
                          className="w-full h-64 object-cover rounded-lg shadow-md"
                          width={256}
                          height={256}
                          fallback={`https://api.dicebear.com/7.x/bottts/svg?seed=${index}`}
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                          {convo.question}
                        </h2>
                        <p className="text-[18px] md:text-[19px] text-gray-600 dark:text-gray-300 leading-8 whitespace-pre-line mb-4">
                          {convo.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </main>

          <aside className="hidden lg:block w-80"><div className="lg:sticky lg:top-24 space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  {currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                </div>
                <div className="text-gray-600 dark:text-gray-300 flex items-center justify-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {currentTime.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    month: 'long', 
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </div>
                <div className="mt-2 text-lg font-semibold text-pink-600 dark:text-pink-400">
                  {getDayGreeting()}
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                  <Cloud className="w-5 h-5" />
                  Nashville Weather
                </h3>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold text-gray-800 dark:text-white">
                      {weather.temp}°F
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {weather.condition}
                    </div>
                  </div>
                  <div className="text-5xl">☁️</div>
                </div>
              </div>

              <div className="border-t pt-6 mt-6">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-3">
                  About This Page
                </h3>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex justify-between">
                    <span>Total Posts:</span>
                    <span className="font-semibold">{conversations.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <span className="font-semibold text-green-600">Open to Work 🟢</span>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6 mt-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-800 dark:text-white flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500/15 text-yellow-600 dark:text-yellow-400">💡</span>
                    Fun Fact
                  </h3>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400 tracking-wide">updates daily</span>
                </div>
                {factLoading && (
                  <p className="text-sm text-gray-600 dark:text-gray-400">Loading a fun fact…</p>
                )}
                {factError && (
                  <p className="text-sm text-red-600">{factError}</p>
                )}
                {!factLoading && !factError && (
                  <blockquote className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 italic bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-lg p-3 whitespace-pre-wrap">
                    {fact}
                  </blockquote>
                )}
              </div>
            </div>
            <Link
              href="https://calendar.app.google/jk4bNSkyWSSFnnBF8"
              target="_blank"
              className="block w-full mb-8 px-6 py-3 rounded-full text-white font-semibold text-center
                         bg-gradient-to-r from-purple-600 via-pink-500 to-red-500
                         animate-[gradient_4s_ease_infinite] hover:scale-105 transition-all
                         shadow-xl ring-1 ring-white/20 dark:ring-black/20 hover:shadow-purple-500/40"
            >
              Wanna talk to me ☕
            </Link>
          </div>
        </aside>
            
        </div>
      </div>
    </div>
  );
}