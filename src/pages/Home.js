import { LinearProgress } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const animations = [
  {
    className: "background",
  },
  {
    className: "background",
    style: {
      animationDirection: "alternate-reverse",
      animationDuration: "4s",
    },
  },
  {
    className: "background",
    style: {
      animationDuration: "5s",
    },
  },
];

const Home = () => {
  const progressRef = useRef(null);

  const [progress, setProgress] = useState(30);
  const [buffer, setBuffer] = useState(10);

  useEffect(() => {
    progressRef.current = () => {
      const diff = Math.random() * 10;
      const diff2 = Math.random() * 10;
      setProgress(progress + diff);
      setBuffer(progress + diff + diff2);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const renderBackgroundAnimations = () => {
    return (
      <>
        {animations.map((animation, index) => (
          <div
            key={index}
            className={animation?.className}
            style={animation?.style}
          />
        ))}
      </>
    );
  };

  return (
    <div className="home">
      {renderBackgroundAnimations()}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "100px",
        }}
      >
        <TypeAnimation
          sequence={[
            "Hi, I'm a Branko Milovanović",
            3000,
            "Hi, I'm a Web Developer",
            3000,
            "Hi, I'm a Full Stack Developer",
            3000,
          ]}
          wrapper="span"
          style={{ fontSize: "24px", zIndex: -1 }}
          speed={5}
          deletionSpeed={20}
          repeat={Infinity}
        />
        <span style={{ fontSize: "24px" }}>
          Welcome to my portfolio website
        </span>
        <div style={{ width: "80%", marginTop: "50px", zIndex: "-1" }}>
          <span style={{ fontSize: "24px" }}>Working in progress...</span>

          <LinearProgress
            variant="buffer"
            value={progress}
            valueBuffer={buffer}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
