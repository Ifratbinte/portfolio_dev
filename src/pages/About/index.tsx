import SectionHeading from "#/components/common/SectionHeading";
import AboutData from "#mocks/subheading.json";

const index = () => {
  return (
    <>
      <SectionHeading title={AboutData.about.title} description={AboutData.about.description} />
    </>
  );
};

export default index;
