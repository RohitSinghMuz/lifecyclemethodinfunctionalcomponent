import React, { useEffect, useState } from "react";
let interval;
const App = () => {
  const [count, setcount] = useState(0);
  const [status, setstatus] = useState(false);

  useEffect(() => {
    if (status === true) {
      interval = setInterval(() => {
        setcount(count + 1);
        // setcount((prestate) => prestate + 1);
      }, 2000);
    }

    return () => clearInterval(interval);
  }, [status, count]);

  const Increment = () => {
    setstatus(true);
  };
  const stopfunction = () => {
    setstatus(false);
  };
  const clearIntervaldata = () => {
    clearInterval(interval);
    setcount(0);
  };

  console.log("city name Hyderabad");
  return (
    <>
      <div style={{ width: "30%", margin: "10px auto" }}>
        <button
          style={{ padding: "10px 20px", margin: "10px" }}
          onClick={Increment}
        >
          Start
        </button>
        <button
          style={{ padding: "10px 20px", margin: "10px" }}
          onClick={stopfunction}
        >
          Stop
        </button>
        <button
          style={{ padding: "10px 20px", margin: "10px" }}
          onClick={clearIntervaldata}
        >
          Clear
        </button>
        <h2 style={{ padding: "10px 20px", margin: "10px" }}>count:{count}</h2>
      </div>
    </>
  );
};

export default App;
