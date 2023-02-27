import introData from "#mocks/intro.json";
import SocialAction from "./contact-options";
import styles from "./home.module.css";

const hero = () => {
  return (
    <main className={`${styles.customHeight} container mx-auto min-w-full flex flex-col items-center justify-center `}>
      <h1 className="text-7xl font-bold mb-3 text-slate-800">{introData.name}</h1>
      <div className="inline-block">
        <h5 className="text-4xl text-slate-700">{introData.designation_title}</h5>
      </div>
      <SocialAction/>
    </main>
  );
};

export default hero;
