import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Skills } from '@/sections/Skills';
import { Projects } from '@/sections/Projects';
import { Education } from '@/sections/Education';
import { Services } from '@/sections/Services';

const upcomingSections = ['contact'];


export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Services />
      {upcomingSections.map((id) => (
        <section
          key={id}
          id={id}
          className="min-h-[40vh] flex items-center justify-center border-b border-card-border/40 scroll-mt-20"
        >
          <p className="font-mono text-ink-faint text-sm">// {id} section — coming up</p>
        </section>
      ))}
    </>
  );
}
