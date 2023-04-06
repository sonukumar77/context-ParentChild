// ------------ send data from parent to child(A to D)
import { useContext } from "react";
import myContext from "./context";

const D = () => {
  const contextValue = useContext(myContext);

  return (
    <div className="dContainer">
      <h1>D component </h1>
      <p style={{ color: "red" }}>{contextValue}</p>
    </div>
  );
};

export default D;

// ------------ send data from child to parent(D to A)

// import { useContext, useState } from "react";
// import myContext from "./context";

// const D = () => {
//   const [inputValue, setInputValue] = useState("");
//   const { setValue } = useContext(myContext);

//   return (
//     <div className="dContainer">
//       <h1>D component </h1>
//       <input type="text" onChange={(e) => setInputValue(e.target.value)} />
//       <button onClick={() => setValue(inputValue)}>Send data to A</button>
//       <hr />
//     </div>
//   );
// };

// export default D;
