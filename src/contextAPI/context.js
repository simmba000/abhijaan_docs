import { createSignal, createContext, useContext } from "solid-js";

const myContext = createContext();

// export function ContextProvider(props) {

//   return (
//     <myContext.Provider value={count}>
//       {props.children}
//     </myContext.Provider>
//   );
// }

export default myContext;