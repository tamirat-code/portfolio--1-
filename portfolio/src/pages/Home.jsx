import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Skills } from '@/sections/Skills';
const upcomingSections = [ 'projects', 'experience', 'education', 'services', 'contact'];


export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
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
