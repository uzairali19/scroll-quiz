import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";

const NavComponent = () => {
  return (
    <div>
      <nav className="flex flex-col justify-center items-center content-center h-screen">
        <div className="flex flex-col text-5xl font-bold text-center gap-5">
          <span className="hover:text-blue-300 hover:cursor-pointer">Home</span>
          <span className="hover:text-blue-300 hover:cursor-pointer">
            Careers
          </span>
          <span className="hover:text-blue-300 hover:cursor-pointer">
            Book a Meeting
          </span>
        </div>
        <div className="m-[48px] w-[48px] h-[5px] bg-blue-700"></div>
        <span className="w-[280px] text-center text-sm">
          Share this quiz with your friends and compare your travel personality
          types
        </span>
        <div className="flex justify-center items-center gap-10 text-xl mt-5 text-gray-500">
          <FontAwesomeIcon icon={faFacebookF} className="cursor-pointer" />
          <FontAwesomeIcon icon={faTwitter} className="cursor-pointer" />
        </div>
      </nav>
    </div>
  );
};

export default NavComponent;
