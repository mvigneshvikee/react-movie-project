import { useState } from "react";

// function ColorGame() {
//   const [value, setValue] = useState("orange");
//   const boxColor = {
//     backgroundColor: value,
//   };
//   return (
//     <div>
//       <input
//         style={boxColor}
//         value={value}
//         onChange={(event) => setValue(event.target.value)}
//         type="text"
//       />
//       <h2>{value}</h2>
//     </div>
//   );
// }
export function ColorGame() {
  const colorsList = ["pink", "purple", "plum", "orange"];
  const [color, setColor] = useState("");
  const [colors, setColors] = useState(colorsList);
  const styles = {
    background: color,
  };

  const deleteFunction = (indexKey) => {
    const updatedColor = colors.filter((_, index) => index !== indexKey);
    setColors(updatedColor);
  };

  return (
    <div style={{ marginTop: "30px" }}>
      {/* Task 2.2 - Update the background the input */}

      <input
        value={color}
        style={styles}
        onChange={(event) => setColor(event.target.value)}
        type="text"
      />
      {/* Task 3.2 - Uses colors - Display Color Box */}
      <button
        onClick={() => {
          if (color == "") {
            alert("Enter a Color Name");
          } else {
            // setColors(colors.concat(color));
            setColors([...colors, color]);
          }
        }}
      >
        ➕ Add
      </button>

      {/* Task 3.1 - Uses colors - Display Color Box */}

      {colors.map((clr, index) => (
        <ColorBox keyValue={index} color={clr} onDelete={deleteFunction} />
      ))}

      {/* <ColorBox />
            <ColorBox />
            <ColorBox /> */}
    </div>
  );
}
function ColorBox({ keyValue, color, onDelete }) {
  console.log(keyValue, "index key");

  const boxStyles = {
    background: color,
    height: "25px",
    width: "225px",
    marginTop: "10px",
  };

  return (
    <>
      <div style={boxStyles}>
        <h3
          style={
            {
              // color: "white",
            }
          }
        >
          {color}
        </h3>
      </div>
      <button
        onClick={() => {
          onDelete(keyValue);
        }}
      >
        Delete
      </button>
    </>
  );
}
