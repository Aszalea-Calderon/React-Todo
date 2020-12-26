// import React from "react";

// class App extends React.Component {
//   // you will need a place to store your state in this component.
//   // design `App` to be the parent component of your application.
//   // this component is going to take care of state, and any change handlers you need to work with your state

// state ={

// }

// const clear=()=>{

// }
//   render() {
//     return (
//       <div>
//         <h2>Welcome to your Todo App!</h2>
//         <input type="text" placeholder="Add task"></input>
//         <button>Add To Do</button>
//         <button onClick={clear}>Clear Completed</button>
//       </div>
//     );
//   }
// }

// export default App;

import React, { useState } from "react";
import "./app.css";

function App() {
  const [theirName, setTheirName] = useState({ name: "" });
  const change = (e) => {
    console.log(e.target.value);
    //   const { value, name } = e.target.value;
    //   const valueToUse = value;
    //   setTheirName({ ...theirName, [name]: valueToUse });
    // };
  };
  const name = "Aszalea";
  return (
    <div>
      <h1> Hey there! My name is {name}!</h1>
      <p>What is your name? </p>
      <input type="text" value={theirName.name} onChange={change}></input>
      <p>Your name is {theirName.name} </p>
    </div>
  );
}
export default App;
