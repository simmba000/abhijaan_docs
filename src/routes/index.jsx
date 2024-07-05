import { A } from "@solidjs/router";
import Logo from "/abhijaan_full.png";

export default function Home() {
    return (
      <main class="h-full flex flex-col w-full bg-gray-100 dot-pattern pb-3 sm:py-6">
        <div class="rounded-b-3xl mb-8 bg-sky-200 w-10/12 p-2 pt-4 sm:p-10 mx-auto -mt-6 shadow-lg">
          <div class="w-full max-w-6xl mx-auto">
            <div class="p-5 mb-3 sm:mb-6">
              <img src={Logo} alt="" class="max-w-[600px] mx-auto w-9/12"/>
            </div>
            <div class="mb-6 sm:mb-10">
              <p class="text-center text-2xl sm:text-4xl font-black tracking-tight pb-2 text-blue-600 font-sans text-clip">
                ...Begin your exploration of framework...
              </p>
            </div>
            <div class="flex align-middle mb-6 sm:mb-10">
              <A href="/docs/" class="bg-blue-600 text-white px-3 py-2 font-semibold rounded shadow-lg mx-auto active:tracking-wide hover:tracking-wider hover:bg-blue-700 hover:shadow-sky-500 active:bg-sky-500">
                Get Started
              </A>
            </div>
          </div>
        </div>
        <div class="rounded-s-3xl bg-indigo-300 ms-20 mb-8 p-8">

        </div>
        <div class="rounded-e-3xl bg-orange-400 me-20 mb-8 p-8">

        </div>
      </main>
    );
}