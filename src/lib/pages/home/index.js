import { useState } from "react";
import {
  LandingComponent,
  NavComponent,
  NavButton,
  MainForm,
  Success,
} from "@lib/components";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState({
    submit: false,
    values: {},
  });
  const [section, setSection] = useState({
    i: 0,
    value: 0,
  });

  return (
    <div className="container mx-auto min-h-screen">
      <NavButton isOpen={isOpen} setIsOpen={setIsOpen} />
      {isSubmitted.submit ? (
        <Success isSubmitted={isSubmitted}/>
      ) : isOpen ? (
        <NavComponent />
      ) : section.i === 0 ? (
        <LandingComponent setSection={setSection} />
      ) : (
        <MainForm
          setSection={setSection}
          section={section}
          setIsSubmitted={setIsSubmitted}
        />
      )}
    </div>
  );
};

export default Home;
