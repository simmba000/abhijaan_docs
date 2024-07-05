import { children } from "solid-js";

export default function CardCode(props) {
    return (
        <div class="rounded-md bg-slate-300 mb-6 mt-4 max-w-screen-md font-semibold">
            <div class="flex flex-col leading-7">
                <div class="border-b border-gray-800 px-4 py-2">
                    <p class="tracking-wider text-sm text-gray-800">{props.path}</p>
                </div>
                <div class="px-6 py-4">
                    <p class="tracking-wider text-orange-600">{'<?php'}</p>
                    {
                        props.comment ?
                        <p class="tracking-wider text-green-600">
                            // {props.comment}
                        </p> : ''
                    }
                    <br />
                    <p class="tracking-wider">
                        {props.children}
                        {/* <span class="text-orange-500">route(</span>
                        <span class="text-sky-500 px-1">'/home'</span>
                        <span class="text-orange-500">,</span>
                        <span class="text-sky-500 px-1">'home/index.php'</span>
                        <span class="text-orange-500">);</span> */}
                    </p>
                </div>
            </div>
        </div>
    );
}