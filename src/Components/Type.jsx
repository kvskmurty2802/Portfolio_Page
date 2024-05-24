import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <div className="TypeEffect">
      <Typewriter
        options={{
          strings: ["Full Stack Web Developer", "Web Developer", "UI/UX Designer"],
          autoStart: true,
          loop: true,
          delay: 80,
          deleteSpeed: 25,
        }}
      />
    </div>
  );
};

export default Type;
