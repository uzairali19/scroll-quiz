import { useState } from "react";
import {
  LandingComponent,
  NavComponent,
  NavButton,
  MainForm,
} from "@lib/components";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const [section, setSection] = useState({
    i: 0,
    value: 0,
  });

  return (
    <div className="container mx-auto min-h-screen">
      <NavButton isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen ? (
        <NavComponent />
      ) : section.i === 0 ? (
        <LandingComponent setSection={setSection} />
      ) : (
        <MainForm setSection={setSection} section={section}/>
      )}
    </div>
  );
};

export default Home;
