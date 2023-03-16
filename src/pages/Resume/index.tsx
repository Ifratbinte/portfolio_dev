import SectionHeading from "#/components/common/SectionHeading";
import resumeData from "#mocks/resume.json";
import heading from "#mocks/subheading.json";
import ResumeTemp from "./ResumeTemp";
import style from "./resume.module.css"

const Index = () => {
  const works = resumeData.resume.works;
  const educations = resumeData.resume.education;

  console.log({ works });

  return (
    <>
      <SectionHeading title={heading.resume.title} description={heading.resume.description} />
      <div id="resume" className="resume section-gap">
        <div className="md:container md:mx-auto">
          <div className="flex justify-center gap-6">
            <div className="w-full max-w-[33%] flex-1">
            <h2 className="text-3xl text-white font-weight-600 mb-6 relative after-elem">Job Experience</h2>
              {works &&
                works?.map((work: any, i: number) => {
                  return <ResumeTemp key={i} date={work.date} designation={work.designation} institution={work.institution} list={work.responsibility} isWork={true} />;
                })}
            </div>
            <div className="w-full max-w-[33%] flex-1">
            <h2 className="text-3xl text-white font-weight-600 mb-6 relative after-elem">Education</h2>
              {educations &&
                educations?.map((education: any, i: number) => {
                  return (
                    <ResumeTemp
                      key={i}
                      date={education.date}
                      designation={education.designation}
                      institution={education.institution}
                      cgpa={education.cgpa}
                      gpa={education.gpa}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
