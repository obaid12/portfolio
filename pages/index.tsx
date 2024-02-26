import { Inter } from "next/font/google";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Experience from "@/components/Experience";
import Skills from "./skills";
import About from "./about";
import Project from "./project";
// import Project from "./project";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className='w=full bg-gray-900 text-gray-300 px-4'>
      <div className='max-w-screen-3xl mx-auto lg:pt-10'>
 <>
 <Navbar/>
 <Banner />
 <About/>
 <Experience />
 <Skills/>
 <Project/>
 </>
</div>
  </main>
  );
}
