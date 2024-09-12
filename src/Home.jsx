import Gal from "./Gal";
import Pro from "./Pro";

const Home = () => {
    return (
      <div className="">
        <Pro></Pro>
        <hr className="mt-8 ml-[25%] w-[612px] h-[4px] flex-shrink-0 border-radius-custom bg-slate-600 shadow-custom backdrop-blur-custom"/>
        <Gal></Gal>
        <hr className="mb-16 ml-[25%] w-[612px] h-[4px] flex-shrink-0 border-radius-custom bg-slate-600 shadow-custom backdrop-blur-custom"/>
      </div>
    );
  };
  
  export default Home;
  