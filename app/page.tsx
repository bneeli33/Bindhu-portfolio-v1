import Link from "next/link";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro />
      <div className="flex flex-col items-center px-4">
        <SectionDivider />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Link 
          href="/off-the-record"
          className="mb-8 px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 animate-[gradient_4s_ease_infinite] hover:scale-110 transition-all shadow-lg hover:shadow-purple-500/50"
        >
          Off the Record →
        </Link>
      </div>
    </main>
  );
}
