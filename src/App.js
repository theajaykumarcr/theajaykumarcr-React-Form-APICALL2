import React, { useState } from "react";
function App() {
  const [data, setData] = useState();
  const [alldata, setalldata] = useState([]);
  let check = (e) => {
    setData(e.target.value);
  };
  let click2 = () => {
    setalldata([...alldata, data]);
  };
  return (
    <>
      <div className="App">
        <input type="text" onChange={check} />
        <button onClick={click2}>click</button>

        <div>
          {alldata.map((data5) => (
            <h1>{data5}</h1>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
