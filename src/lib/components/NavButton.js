import { faNavicon, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const NavButton = ({ isOpen, setIsOpen }) => {
  const navHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="absolute top-10 right-10">
      <button className="text-md" onClick={navHandler}>
        {isOpen ? (
          <FontAwesomeIcon icon={faXmark} />
        ) : (
          <FontAwesomeIcon icon={faNavicon} />
        )}
      </button>
    </div>
  );
};

export default NavButton;
