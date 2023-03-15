import style from "../common.module.css";
interface IntroProps {
  introQus: string;
  title: string;
  description: string;
  name: string;
  email: string;
  address: string;
  phone: string;
}

const IntroTemp: React.FC<IntroProps> = ({ introQus, title, description, name, email, address, phone }) => {
  return (
    <div className="pl-20">
      <div className="pb-5">
        <h2 className="text-green-400 text-2xl tracking-wide mb-5">{introQus}</h2>
        <h6 className="text-white text-3xl font-bold mb-5 leading-relaxed">{title}</h6>
        <p className="tracking-wide font-poppins mb-5 leading-loose">{description}</p>
      </div>
      <div className={`${style.divide}`}></div>
      <div className="content-info pt-5 ">
        <div className="grid grid-cols-2 gap-4 py-2">
          <div className="flex">
            <span className="text-slate-100">Name :</span>
            <p className="pl-2">{name}</p>
          </div>
          <div className="flex">
            <span className="text-slate-100">Email :</span>
            <p className="pl-2">
              <a href="" className="text-green-300">
                {email}
              </a>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 py-2">
          <div className="flex">
            <span className="text-slate-100">Address :</span>
            <p className="pl-2">{address}</p>
          </div>
          <div className="flex">
            <span className="text-slate-100">Phone :</span>
            <p className="pl-2">{phone}</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 pt-3">
          <a href="/Kazi Ifrat Sultana.pdf" className="btn rounded-full bg-sea-green hover:bg-green-500 transition duration-700 ease-in-out text-white text-center p-2" download>Download CV</a>
        </div>
      </div>
    </div>
  );
};

export default IntroTemp;
