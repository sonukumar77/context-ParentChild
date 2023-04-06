// ------------ send data from  parent to child (A to D)
import { useState } from "react";
import B from "./B";
import myContext from "./context";

const A = () => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState(inputValue);
  return (
    <div className="aContainer">
      <h1>A component</h1>
      <input type="text" onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={() => setData(inputValue)}>Send data to D</button>
      <hr />
      <myContext.Provider value={data}>
        <B />
      </myContext.Provider>
    </div>
  );
};

export default A;

// ------------ send data from child to parent(D to A)

// import B from "./B";
// import { useState } from "react";
// import myContext from "./context";

// const A = () => {
//   const [value, setValue] = useState("");
//   return (
//     <div className="aContainer">
//       <h1>A component</h1>
//       <p style={{ color: "red" }}>{value}</p>
//       <myContext.Provider value={{ setValue }}>
//         <B />
//       </myContext.Provider>
//     </div>
//   );
// };

// export default A;
