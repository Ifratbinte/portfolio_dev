import SectionHeading from "#/components/common/SectionHeading";
import ResumeData from "#mocks/subheading.json";

const index = () => {
  return (
    <>
      <SectionHeading title={ResumeData.resume.title} description={ResumeData.resume.description} />
    </>
  );
};

export default index;
