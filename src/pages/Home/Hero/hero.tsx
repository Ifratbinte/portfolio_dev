import introData from "#mocks/intro.json";
import { useState } from "react";
import SocialAction from "./contact-options";
import styles from "./home.module.css";
import LightBox from '#/components/lightbox/lightbox';
import TypedComponent from "#/components/TypedJs/typedComponent";

const hero = () => {
  const [open, setOpen] = useState(false);
  const [interactive, setInteractive] = useState(false);
  return (
    <main className={`${styles.custom_height} container mx-auto min-w-full flex flex-col items-center justify-center `}>
      <h1 className="text-5xl lg:text-7xl font-bold mb-3 text-slate-300">{introData.name}</h1>
      <div className="inline-block">
        <TypedComponent/>
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
