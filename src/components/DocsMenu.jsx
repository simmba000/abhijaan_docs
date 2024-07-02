import { A } from "@solidjs/router";
import DocsMenuOption from "./DocsMenuOption";

export default function DocsMenu() {
    return (
        <aside>
            <ul class="flex flex-col w-full h-full px-1">
                <DocsMenuOption path="/docs/" name="installation" />
                <DocsMenuOption path="/docs/requirements" name="requirements" />
            </ul>
        </aside>
    );
}