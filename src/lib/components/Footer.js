import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="absolute bottom-0 px-[80px] pb-5 w-screen ">
      <div className="flex justify-between items-center">
        <Image src="/cafe-building.svg" width="48px" height="48px" alt="logo" />
        <div className="text-gray-500 text-2xl font-bold flex gap-10">
          <FontAwesomeIcon icon={faFacebookF} className="cursor-pointer" />
          <FontAwesomeIcon icon={faTwitter} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
