import { A } from "@solidjs/router";
import DocsMenuOption from "./DocsMenuOption";
import { createSignal, useContext } from "solid-js";
import myContext from "~/contextAPI/context";

export default function DocsMenu() {
    const {menuVisible} = useContext(myContext);
    cont [isVisible, setVisible] = createSignal(false);
    if (menuVisible === true) {
        setVisible("block")
    } else {
        setVisible("hidden")
    }
    return (
        <aside class={isVisible}>
            <ul class="flex flex-col w-full h-full px-1 bg-white z-40 shadow-md sm:shadow-none">
                <DocsMenuOption path="/docs/" name="installation" />
                <DocsMenuOption path="/docs/requirements" name="requirements" />
                <DocsMenuOption path="/docs/routing" name="routing" />
                <DocsMenuOption path="/docs/configuration" name="configuration" />
                <DocsMenuOption path="/docs/database" name="database" />
                <DocsMenuOption path="/docs/authentication" name="authentication" />
                <DocsMenuOption path="/docs/secure" name="secure" />
            </ul>
        </aside>
    );
}