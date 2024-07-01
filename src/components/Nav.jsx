import { A, useLocation } from "@solidjs/router";

export default function Nav() {
    const location = useLocation();
    const active = (path) =>
        path == location.pathname ? "border-b-4 border-orange-400 bg-orange-300 font-bold" : "border-t-4 border-transparent hover:bg-orange-300";
    console.log(location.pathname);
    return (
        <nav class="w-full top-0 sticky bg-orange-200 p-2 shadow-md">
            <ul className="flex flex-row justify-center">
                <li class={`mx-4 p-1 px-4 ${active("/")}`}>
                    <A href="/">Home</A>
                </li>
                <li class={`mx-4 p-1 px-4 ${active("/docs")}`}>
                    <A href="/docs/">Docs</A>
                </li>
            </ul>
        </nav>
    );
}