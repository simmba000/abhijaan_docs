import CardCode from "~/components/CardCode";

export default function Configuration() {
    return (
      <main class="h-full flex w-full bg-gray-100 dot-pattern p-6">
        <div class="w-full max-w-4xl mx-auto">
          <p class="font-bold text-2xl text-gray-800 border-b-2 my-4">Configuration</p>
          <p class="tracking-wider my-7 text-sm">You can configure your project as per your choice in 'config/config.php' file.</p>
          <ul class="list-disc list-inside space-y-2 mt-16 text-sm">
            <li class="relative font-semibold">Download the file
              <div class="p-3 mx-auto w-fit sm:w-full">
                <CardCode path="config/config.php" comment="config/config.php" >
                  <span class="text-orange-600">define(</span>
                  <span class="text-sky-600 px-1">'PROJECT_NAME'</span>
                  <span class="text-orange-600">,</span>
                  <span class="text-sky-600 px-1">'abhijaan-app'</span>
                  <span class="text-orange-600">);</span>
                </CardCode>
              </div>
            </li>
          </ul>
        </div>
      </main>
    );
}