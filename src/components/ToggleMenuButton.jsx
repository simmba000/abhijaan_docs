import { createSignal, useContext } from "solid-js";
import { MyContext } from "~/contextAPI/context";

export default function ToggleMenuButton ({}) {
    const {isMenu, setMenu} = useContext(MyContext);
    return (
        <label
            for="nav_bar_icon"
            class="w-8 h-8 cursor-pointer flex flex-col items-center justify-center space-y-1.5 me-3"
        >
            <input id="nav_bar_icon" type="checkbox" class="hidden peer" onChange={()=>setMenu(!isMenu())} />
            <div
                class="w-2/3 h-1 bg-white rounded-lg transition-all duration-300 origin-right peer-checked:w-full peer-checked:rotate-[-30deg] peer-checked:translate-y-[-5px]"
            ></div>
            <div
                class="w-full h-1 bg-white rounded-lg transition-all duration-300 origin-center peer-checked:rotate-90 peer-checked:translate-x-4"
            ></div>
            <div
                class="w-2/3 h-1 bg-white rounded-lg transition-all duration-300 origin-right peer-checked:w-full peer-checked:rotate-[30deg] peer-checked:translate-y-[5px]"
            ></div>
        </label>

    );
}