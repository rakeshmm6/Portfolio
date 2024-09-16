
import { useRef } from "react";
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";


function App() {
  const contactRef= useRef(null);
  return (
   
    <div className={styles.App}>
    <Navbar />
    <Hero contactRef={contactRef}/>
    <About />
    <Experience />
    <Projects />
    <Contact ref={contactRef}/>  
          
       
         
        
     
    </div>
      
    
  );
}

export default App;
