import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <header className="bg-green-100">
        <nav className="flex justify-between items-center mx-5 py-6">
          <ul className="flex flex-wrap items-center space-x-4 p-4">
            <li className="flex justify-center items-center gap-2 px-6 py-2">
              <Link to="/about" className="text-gray-100 hover:text-green-400 transition-colors duration-300 font-medium">
                About Me
              </Link>
            </li>
            <li className="flex justify-center items-center gap-2 w-[195px] h-[49px] px-6 py-2">
              <Link to="/experiences" className="text-gray-100 hover:text-green-400 transition-colors duration-300 font-medium text-[15px]">
              Experiences
              </Link>
            </li>
            <li className="flex justify-center items-center gap-2 w-[195px] h-[49px] px-6 py-2">
              <Link to="/recommended" className="text-gray-100 hover:text-green-400 transition-colors duration-300 font-medium text-[15px]">
              Recommended
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Profile;
