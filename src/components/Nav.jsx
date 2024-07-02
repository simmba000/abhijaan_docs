import { A, useLocation } from "@solidjs/router";

export default function Nav() {
    const location = useLocation();
    const isHome = () => location.pathname === "/" ? "text-white" : "hover:border-orange-200 hover:text-orange-100";
    const isDocs = () => location.pathname.slice(0, ("/docs/").length) === "/docs/" ? "text-white" : "hover:border-orange-200 hover:text-orange-100";
    // const isHome = () => location.pathname === "/" ? "font-bold text-white" : "hover:border-orange-200 hover:text-orange-100";
    // const active = (path) =>
    //     path == location.pathname ? "font-bold text-white" : "hover:border-orange-200 hover:text-orange-100";
    return (
        <nav class="w-full top-0 sticky bg-orange-500 p-2 shadow-md text-orange-300">
            <ul className="flex flex-row justify-center">
                <li class={`mx-1 p-1 border-b border-transparent px-4 ${isHome()}`}>
                    <A href="/">Home</A>
                </li>
                <li class={`mx-1 p-1 border-b border-transparent px-4 ${isDocs()}`}>
                    <A href="/docs/">Docs</A>
                </li>
            </ul>
        </nav>
    );
}