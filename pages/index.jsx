import NavComponent from '../components/NavComponent';
import ProfileComponent from '../components/ProfileComponent';
import ProjectComponent from '../components/ProjectComponent';
import ContactComponent from '../components/ContactComponent';

import 'tailwindcss/tailwind.css'

// This serves as the main view / component
export default () => {
  return (
    <>
      {/* <div className="mt-14 toast toast-top toast-start"> */}
      {/*   <span className="pl-1 text-lg font-bold">Recent Activity</span> */}
      {/*   <div className="text-sm text-indigo-400 alert bg-gradient-to-r from-indigo-900 rounded-r-sm"> */}
      {/*     <span>Pilot study on the topic of "X".</span> */}
      {/*   </div> */}
      {/*   <div className="text-sm text-indigo-400 alert bg-gradient-to-r from-indigo-900 rounded-r-sm"> */}
      {/*     <span>New blog entry - OpenGL basics</span> */}
      {/*   </div> */}
      {/* </div> */}
      <ProfileComponent />
      <ProjectComponent
        heading="Portfolio Website"
        description="Welcome to the heart of my portfolio website—a place where the synergy of technology and design takes center stage. This is the behind-the-scenes narrative, unveiling the process that allowed my web development and design skills to shine. Come on in to witness how ideas transformed into a captivating digital realm, where projects and creativity coalesce effortlessly. This site stands as a reflection of my ongoing dedication to design and technology."
        stack="NextJS(React), TailwindCSS, DaisyUI, Figma"
      />
      <ProjectComponent
        heading="Bygone"
        description="Step into 'Bygone', an innovative Unity project that immerses players in the unfolding tapestry of history. With a unique physical custom compass controller, this game offers an engaging way to navigate and interact with pivotal moments from our past. 'Bygone' invites players to explore, discover, and engage with historical events, creating an immersive journey through time."
        stack="C++, Unity, Fusion 360, 3D Printer"
      />
      <ProjectComponent
        heading="Texture Generator - Voronoi"
        description="Explore my 'Voronoi Texture Generator' project—a seamless blend of C++, OpenGL, and SDL dedicated to crafting texture patterns. It's the result of a meticulous technical process, with Voronoi diagrams as the core. Delve into the world of digital textures, where precision and artistry converge to enhance your graphics. This project underlines the power of C++, OpenGL, and SDL in producing practical and visually engaging texture solutions for your creative needs."
        stack="C++, CMake, OpenGL, SDL2"
      />
    </>
  )
}
