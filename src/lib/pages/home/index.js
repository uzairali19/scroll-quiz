import { useState } from "react";
import { LandingComponent, NavComponent, NavButton } from "@lib/components";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container mx-auto min-h-screen">
      <NavButton isOpen={isOpen} setIsOpen={setIsOpen}/>
      {isOpen ? <NavComponent /> : <LandingComponent />}
    </div>
  );
};

export default Home;
