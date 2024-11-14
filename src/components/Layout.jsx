import DocsMenu from "./DocsMenu";
import Nav from "./Nav";
import { useLocation } from "@solidjs/router";
import { MyContext } from "../contextAPI/context";
import { createEffect, createSignal, useContext } from "solid-js";


export default function Layout({children}) {
    const location = useLocation();
    const docMode = (path) => location.pathname.slice(0, path.length) === "/docs/" ? " " : " hidden";

    // const [menuVisible, setMenuVisible] = createSignal(false);
    const [toggleMenu, setToggleMenu] = createSignal(false);

    const { isMenu } = useContext(MyContext);

    // useEffect(()=> {
        
    // createEffect(()=> {
    //     if (isMenu === true) {
    //         setToggleMenu("block")
    //         console.log("block")
    //     } else {
    //         setToggleMenu("hidden")
    //         console.log("hidden")
    //     }

    // })

    createEffect ( ()=> {
        console.log(isMenu())
    } );
    

    return (
        // <myContext.Provider value={{setMenuVisible, menuVisible}}>
        <div class="flex flex-col min-h-screen w-screen overflow-x-hidden">
        <Nav />
        <div class="flex flex-col sm:flex-row w-full">
          <div class={`w-full bg-white h-full z-30 text-center top-12 sm:top-4 sticky sm:text-left sm:h-full sm:w-56 pt-2 sm:pt-10 ${docMode("/docs/")} ${isMenu() ? '' : 'hidden'}`}>
            <DocsMenu />
          </div>
          <div class="flex-1 min-h-[99vh]">
            {children}
          </div>
        </div>
      </div>
        // </myContext.Provider>
    );
}