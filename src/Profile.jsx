import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
    <div className="justify-center items-center pl-[25%]">
      <div className="w-[614px] h-[62px] pt-7 flex-shrink-0 rounded-[23px] bg-[#171717] shadow-custom-inset">
          <ul className="flex justify-center items-center gap-12 rounded-md">
            <li className="text-white text-center font-poppins text-[18px] font-medium leading-[16.12px]">
              <Link to="/about" className="">
                About Me
              </Link>
            </li>
            <li className="text-white text-center font-poppins text-[18px] font-medium leading-[16.12px] ">
              <Link to="/experiences" className="">
              Experiences
              </Link>
            </li>
            <li className="text-white text-center font-poppins text-[18px] font-medium leading-[16.12px]">
              <Link to="/recommended" className="">
              Recommended
              </Link>
            </li>
          </ul>
      </div>
      <div className="text-[#969696] text-[20px] font-normal leading-normal font-plus-jakarta w-[600px]">
        <p>Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.

         I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...</p>
      </div>
    </div>
    </>
  );
};

export default Profile;
