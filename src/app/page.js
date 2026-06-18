import Hero from "@/Components/Hero";
import About from "@/Components/About";
import Skills from "@/Components/Skills";
import Education from "@/Components/Education";
import Projects from "@/Components/Projects";
import Contact from "@/Components/Contact";
 




export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Education />
      {/* <Experience /> */}
      <Projects />
      <Contact />
    </>
  );
}
