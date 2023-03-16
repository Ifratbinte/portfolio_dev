interface WorkInterface {
  date: string;
  designation: string;
  institution: string;
  isWork?: boolean;
  list?: [];
  cgpa?: string;
  gpa?: string;
}
const Education: React.FC<WorkInterface> = ({ date, designation, institution, list, gpa, cgpa, isWork = false }) => {
  return (
    <div className="border border-gray-600 rounded p-4 mb-6">
      <p className="bg-sea-green font-weight-400 inline-block px-4 rounded text-2 text-slate-100">{date}</p>
      
      {isWork ? (
        <div className="flex items-center">
          <h3 className="leading-loose text-xl text-white tracking-wide">{designation}</h3> <span className="px-2">/</span> <p className="text-red-300 text-md">{institution}</p>
        </div>
      ) : <>
      <h3 className="leading-loose text-xl text-white tracking-wide">{designation}</h3>
      <p className="text-red-300 text-md">{institution}</p>
      </>}
      {list && (
        <ul className="list-disc pl-5 pt-2">
          {list.map((list: any, i: number) => {
            return <li key={i}>{list.item}</li>;
          })}
        </ul>
      )}
      {gpa && <p className="text-lg">GPA : {gpa}</p>}
      {cgpa && <p className="text-lg">CGPA : {cgpa}</p>}
    </div>
  );
};

export default Education;
