import { A, useLocation } from "@solidjs/router";

export default function DocsMenuOption(props) {
    const location = useLocation();
    const isDocMenu = (path) => path == location.pathname ? "bg-sky-50 text-blue-800 sm:ps-4" : "border-transparent text-blue-500";
    return (
        <li class={`p-2 my-1 w-full border-1 border-e-0 rounded-md ${isDocMenu(props.path)}`}>
            <A href={props.path}>{props.name}</A>
        </li>
    );
}