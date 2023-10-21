import { LinearProgress } from "@mui/material";
import React, { useEffect, useRef } from "react";

const Home = () => {
  const progressRef = useRef(null);

  const [progress, setProgress] = React.useState(30);
  const [buffer, setBuffer] = React.useState(10);

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

  return (
    <div className="home">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "50px",
        }}
      >
        <span style={{ fontSize: "24px" }}>Hi, I'm Branko Milovanović</span>
        <span style={{ fontSize: "24px" }}>
          Welcome to my portfolio website
        </span>
        <div style={{ width: "80%", marginTop: "50px" }}>
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
