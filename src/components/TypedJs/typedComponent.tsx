import Typed from "react-typed";
const TypedComponent = () => {
  return (
    <div>
      <Typed 
          strings={[
            "I'm Frontend Designer",
            "I'm React Developer", 
            "I'm Software Engineer"
            ]} 
            typeSpeed={40} 
            backSpeed={50} 
            attr="placeholder" 
            loop
            >  
        <input type="text" className="border-0 bg-transparent text-3xl !outline-none" />
      </Typed>
    </div>
  );
};

export default TypedComponent;
