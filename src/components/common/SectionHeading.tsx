import React from "react";
import styles from "./common.module.css";

interface HeadingProps {
  title: string;
  description: string;
}
const SectionHeading: React.FC<HeadingProps> = ({ title, description }) => {
  return (
    <div className={`${styles.section_heading} text-center`}>
      <p className="section-description text-slate-400 text-lg mb-2">{description}</p>
      <h2 className="section-title text-5xl font-bold text-slate-50 ">{title}</h2>
      <div className={`${styles.animated_bar} content-none block h-1 left-0 right-0 relative my-3 mx-auto w-20`}></div>
    </div>
  );
};

export default SectionHeading;
// content-none inline h-1 left-0 right-0 relative my-0 mx-auto
