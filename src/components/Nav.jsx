import { A, useLocation } from "@solidjs/router";
import Logo from "/logo.png";
import ToggleMenuButton from "./ToggleMenuButton";
import { createSignal } from "solid-js";

export default function Nav() {
    const location = useLocation();
    const isHome = () => location.pathname === "/" ? "text-white" : "hover:border-orange-200 hover:text-orange-100";
    const isDocs = () => location.pathname.slice(0, ("/docs/").length) === "/docs/" ? "text-white" : "hover:border-orange-200 hover:text-orange-100";
    const isToggleVisible = () => location.pathname.slice(0, ("/docs/").length) === "/docs/" ? "sm:hidden" : "hidden";
    
    return (
        <nav class="w-full top-0 sticky bg-orange-500 p-2 shadow-md text-orange-300 z-40 flex justify-between">
            <div class="rounded-md bg-orange-100 border-2 border-white p-1.5">
                <img src={Logo} alt="" class="h-5"/>
            </div>
            <ul className="flex flex-row justify-center">
                <li class={`mx-1 p-1 border-b border-transparent px-4 ${isHome()}`}>
                    <A href="/">Home</A>
                </li>
                <li class={`mx-1 p-1 border-b border-transparent px-4 ${isDocs()}`}>
                    <A href="/docs/">Docs</A>
                </li>
            </ul>
            <div>
                <div class={isToggleVisible()}>
                    <ToggleMenuButton />
                </div>
            </div>
        </nav>
    );
}