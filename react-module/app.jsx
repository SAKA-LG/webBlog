import { useState, useEffect } from "react";

//! tidak di perlukan

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p>Time: {time}s</p>;
};
