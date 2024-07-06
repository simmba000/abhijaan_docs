import DocsMenuOption from "./DocsMenuOption";

export default function DocsMenu() {
    return (
        <aside>
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