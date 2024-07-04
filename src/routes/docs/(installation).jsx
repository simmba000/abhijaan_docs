import CardCLI from "~/components/CardCLI";
import folderCreate from "/folder-create2.gif";
import searchIcon from "/search.png";
import { A } from "@solidjs/router";

export default function Installation() {
    return (
        <main class="h-full flex w-full bg-gray-100 dot-pattern p-3 sm:p-6">
          <div class="w-full max-w-4xl mx-auto">
            <p class="font-bold text-2xl text-gray-800 border-b-2 my-4">Installation</p>
            <p class="tracking-wider my-7 text-sm text-justify leading-7">Welcome to <b class="text-lg">অভিযান</b> (Abhijaan) (beta version) documentation, made for new developers starting with frameworks. Dive into simplified setup instructions and comprehensive guides to facilitate learning and building with confidence.</p>
            <p class="tracking-wider my-7 text-sm text-justify leading-7">Just download a single file and use. No extra installation.</p>
            <div class="mx-auto sm:mx-5">
              <span class="p-3 text-sm bg-gray-300 text-blue-700 rounded">
                In Linux only, it can be installed.
              </span>
            </div>
            <ul class="list-disc list-inside space-y-2 mt-16 text-sm">
              <li class="relative font-semibold">Download the file
                <div class="p-3 mx-auto w-fit sm:w-full">
                  <button class="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                    Download fuel 0.1.1 (beta)
                  </button>
                </div>
                <div>
                  <div class="ms-3 mb-6 bg-orange-100 border-red-400 px-2 w-fit hover:rounded-md">
                    <p class="text-sm font-thin hover:font-normal text-red-700 px-3 py-1">Do not rename the file. File name should look like "<code class="font-bold px-1 text-md">fuel</code>"  with no extenstion.</p>
                  </div>
                </div>
              </li>
              <li class="relative font-semibold mb-4">Create a folder for your project
                {/* <div>
                  <img src={folderCreate} alt="" class="w-40"/>
                </div> */}
                <div class="mt-4 mb-10 sm:mb-7 px-4">
                  <CardCLI command="mkdir abhijaan-app" output=""/>
                </div>
              </li>
              <li class="relative font-semibold mb-4">Copy the file to the project folder
                <div class="mt-4 mb-10 sm:mb-7 px-4">
                  <CardCLI command="cp fuel /abhijaan-app/fuel" output=""/>
                </div>
              </li>
              <li class="relative font-semibold mb-4">Open the project folder
                <div class="mt-4 mb-10 sm:mb-7 px-4">
                  <CardCLI command="cd /abhijaan-app"/>
                </div>
              </li>
              <li class="relative font-semibold mb-4">Run development server
                <div class="mt-4 mb-10 sm:mb-7 px-4">
                  <CardCLI command="php fuel run" output="Running your project at localhost:2323"/>
                </div>
              </li>
              <li class="relative font-semibold mb-4">Open any browser and search `<code>http://localhost:2323</code>`
                <div class="mt-4 mb-10 sm:mb-7 px-4">
                  <div class="p-2 border border-sky-800 rounded-md flex max-w-screen-sm min-w-40 bg-white">
                    <div class="px-2">
                      <img src={searchIcon} alt="search" width={15}/>
                    </div>
                    <a href="http://localhost:2323" target="_blank" class="text-blue-900 tracking-wide">http://localhost:2323</a>
                  </div>
                </div>
              </li>
            </ul>
            <div>
              <p class="tracking-wider my-7 text-sm text-justify leading-7">
                That's it! You're ready to start developing your application using <b class="text-lg">অভিযান</b> (Abhijaan). 
                Refer to the rest of our documentation for detailed guides on 
                <A href="/docs/routing" class="text-blue-700">routing</A>, 
                <A href="/docs/configuration" class="text-blue-700">configuration</A>, 
                <A href="/docs/database" class="text-blue-700">database</A> integration, 
                <A href="/docs/authentication" class="text-blue-700">authentication</A>, and 
                <A href="/docs/secure" class="text-blue-700">security</A>.</p>
            </div>
          </div>
        </main>
    );
}