import SectionHeading from "#/components/common/SectionHeading";
import AboutData from "#mocks/subheading.json";
import Intro from './Intro';

const index = () => {
  return (
    <>
      <SectionHeading title={AboutData.about.title} description={AboutData.about.description} />
      <Intro/>
    </>
  );
};

export default index;
