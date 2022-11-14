import { useCallback, useEffect } from "react";

const Other = () => {
  const randomIntFromInterval = useCallback((min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }, []);

  useEffect(() => {
    const num = randomIntFromInterval(1, 5);
    if (num > 4) {
      throw new Error("SOME RANDOM ERROR");
    }
  }, [randomIntFromInterval]);

  return (
    <div>
      <h1>Other page</h1>
    </div>
  );
};

export default Other;
