import React from "react";
import resumepdf from '../../../public/resume.pdf'
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = ({contactRef}) => {
  const handleDownload = ()=>{
    //const pdfUrl=getImageUrl("./resume.pdf");
    const link=document.createElement("a");
    link.href=resumepdf;
    link.download="resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
 
  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <section className={styles.container}>
      <div className={styles.content}>
        
        <h1 className={styles.description}>Hello,I'm </h1>
       
        <p className={styles.title}>Rakesh Mangasulkar</p>
        <p className={styles.subtitle}>React-Native Developer</p>
        <div className={styles.btn_container}>
          <button
            className={styles.btn} onClick={handleDownload}
          >
            Download CV
          </button>
          <button className={styles.btn} onClick={scrollToContact}>Contact Info
          </button>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroSelf.JPG")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
