import Typed from "react-typed";
const TypedComponent = () => {
  return (
    <div>
      <Typed 
          strings={[
            "I'm a Frontend Designer",
            "I'm a React Developer", 
            "I'm a Software Engineer"
            ]} 
            typeSpeed={40} 
            backSpeed={50} 
            attr="placeholder" 
            loop
            >  
        <input type="text" className="border-0 bg-transparent text-3xl !outline-none text-center" />
      </Typed>
    </div>
  );
};

export default TypedComponent;
