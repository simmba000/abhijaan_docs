import DocsMenu from "./DocsMenu";
import Nav from "./Nav";
import { useLocation } from "@solidjs/router";


export default function Layout({children}) {
    const location = useLocation();
    const docMode = (path) => location.pathname.slice(0, path.length) === "/docs/" ? " " : " hidden";
    return (
        <div class="flex flex-col w-full h-auto">
            <Nav />
            <div class="flex flex-col sm:flex-row mx-auto max-w-screen-xl w-full border">
                <div class={`w-full bg-white h-full z-30 text-center top-12 sm:top-4 sticky sm:text-left sm:h-full sm:w-56 pt-2 sm:pt-10 ${docMode("/docs/")}`}>
                    <DocsMenu />
                </div>
                <div class="flex-1 min-h-[99vh] border-s-2">
                    {children}
                </div>
            </div>
        </div>
    );
}