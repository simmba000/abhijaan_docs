import DocsMenu from "./DocsMenu";
import Nav from "./Nav";
import { useLocation } from "@solidjs/router";


export default function Layout({children}) {
    const location = useLocation();
    const docMode = (path) => location.pathname.slice(0, path.length) === "/docs/" ? " " : " hidden";
    return (
        <div class="flex flex-col w-full h-svh">
            <Nav />
            <div class="flex flex-col sm:flex-row h-full mx-auto max-w-screen-xl w-full">
                <div class={`w-full h-fit text-center sm:text-left sm:h-full sm:w-56 border pt-2 sm:pt-10 ${docMode("/docs/")}`}>
                    <DocsMenu />
                </div>
                <div class="flex-1 h-full">
                    {children}
                </div>
            </div>
        </div>
    );
}