import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Skills } from '@/sections/Skills';
import { Projects } from '@/sections/Projects';
import { Education } from '@/sections/Education';
import { Services } from '@/sections/Services';
import { Contact } from '@/sections/Contact';




export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Services />
      <Contact />
    </>
  );
}
