import IntroTemp from "#/components/common/about/Intro";
import aboutData from "#mocks/intro.json";

const Intro = () => {
  console.log({ aboutData });
  const about = aboutData.about;
  return (
    <div id="about" className="about section-gap">
      <div className="md:container md:mx-auto">
        <div className="grid lg:grid-cols-3 gap-4 xl:w-3/4 lg:mx-auto">
          <div className="profile-photo">
            <img src={about.image} alt={about.name} />
          </div>
          <div className="col-span-2">
            <IntroTemp
              introQus={about.intro_qus}
              title={about.intro_title}
              description={about.intro_desc}
              name={about.name}
              email={about.email}
              address={about.address}
              phone={about.phone}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
