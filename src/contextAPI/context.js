import { createSignal, createContext, useContext } from "solid-js";

const MyContext = createContext();

function ContextProvider(props) {
    // let isMenu = false;
    const [isMenu, setMenu] = createSignal(false);

  return (
    <MyContext.Provider 
        value={{ 
            isMenu, 
            setMenu 
            }}>
      {props.children}
    </MyContext.Provider>
  );
}

export { ContextProvider, MyContext } ;

// export default myContext;

// const MyContext = createContext();

// export const Provider = (props) => {

//     const [menuVisible, setMenuVisible] = createSignal(false);
  
//     return (
//       <MyContext.Provider
//         value={{
//           menuVisible,
//           setMenuVisible
//         }}
//       >
//         {props.children}
//       </MyContext.Provider>
//     );
//   };
  
  