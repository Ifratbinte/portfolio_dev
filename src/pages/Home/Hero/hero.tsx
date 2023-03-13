import TypedComponent from "#/config/TypedJs/typedComponent";
import introData from "#mocks/intro.json";
import { useState } from "react";
import SocialAction from "./contact-options";
import styles from "./home.module.css";

const hero = () => {
  const [open, setOpen] = useState(false);
  const [interactive, setInteractive] = useState(false);
  return (
    <main
      className={`${styles.custom_height} container mx-auto min-w-full flex flex-col items-center justify-center absolute top-0 right-0 after:bg-hero-bg after:bg-no-repeat after:bg-cover`}
    >
      <h1 className="text-5xl lg:text-7xl font-bold mb-3 text-slate-300">{introData.name}</h1>
      <div className="inline-block">
        <TypedComponent />
        {/* content: var(--tw-content);
    background-image: url(/images/bg-hero.jpg);
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 8%;
    right: 0;
    background-position: 100% 12%;
    background-repeat: no-repeat;
    background-size: 100%;
    opacity: .15; */}
        {/* <button
          className="border-2 mt-2 rounded border-green-300 border-b-green-400 hover:bg-sea-green hover:border-transparent hover:text-slate-100 px-3"
          onClick={() => {
            setOpen(true);
            setInteractive(true);
          }}
        >
          click here
        </button>
        {interactive && <LightBox open={open} close={() => setOpen(false)} />} */}
      </div>
      <SocialAction />
    </main>
  );
};

export default hero;
