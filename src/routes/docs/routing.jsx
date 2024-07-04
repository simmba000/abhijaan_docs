import CardCode from "~/components/CardCode";

export default function Routing() {
    return (
      <main class="h-full flex w-full bg-gray-100 dot-pattern p-3 sm:p-6">
        <div class="w-full max-w-4xl mx-auto">
          <p class="font-bold text-2xl text-gray-800 border-b-2 my-4">Routing</p>
          <p class="tracking-wider my-7 text-sm text-justify leading-7">
            To define routes in your application, use the route() function with a clear and intuitive syntax. 
            This function takes two parameters: the URL path pattern and the file path to handle view or other tasks. 
            This allows you to map specific URLs to the appropriate PHP files that manage the logic and presentation of your application’s pages. 
          </p>
          <div class="text-sm">
            Below is an example demonstrating how to assign a route:
            <div class="ps-4">
              <CardCode comment="route( '/url_route', 'file_path.php' );">
                <span class="text-orange-600">route(</span>
                <span class="text-sky-600 px-1">'/home'</span>
                <span class="text-orange-600">,</span>
                <span class="text-sky-600 px-1">'home/index.php'</span>
                <span class="text-orange-600">);</span>
              </CardCode>
            </div>
          </div>
          <ul class="list-disc list-inside space-y-2 text-sm">
              <div class="px-4 py-4 text-justify leading-7">
                <p>To maintain simplicity and ease of use in our routing system, we exclusively provide support for GET and POST routes.</p>
              </div>
              <li class="relative font-semibold">POST routes
                  <div class="text-sm font-normal ps-4 py-3">
                    <p class="text-justify leading-7">
                      The by default route is a dynamic route that functions for both POST and GET requests,
                      eliminating the need for separate POST route declarations.
                    </p>
                    <CardCode comment="route( '/url_route', 'file_path.php' );">
                      <span class="text-orange-600">route(</span>
                      <span class="text-sky-600 px-1">'/home'</span>
                      <span class="text-orange-600">,</span>
                      <span class="text-sky-600 px-1">'home/index.php'</span>
                      <span class="text-orange-600">);</span>
                  </CardCode>
                  </div>
              </li>
              <li class="relative font-semibold pt-4">GET routes
                <div class="text-sm font-normal ps-4 py-3">
                  <p class="text-justify leading-7">The GET routes also follow the syntax of the default dynamic route that handles both POST and GET requests.</p>
                  {/* <p class="text-justify leading-7">The syntax is : </p> */}
                  <CardCode comment="route( '/url_route', 'file_path.php' );">
                    <span class="text-orange-600">route(</span>
                    <span class="text-sky-600 px-1">'/home/GET'</span>
                    <span class="text-orange-600">,</span>
                    <span class="text-sky-600 px-1">'home/index.php'</span>
                    <span class="text-orange-600">);</span>
                  </CardCode>
                  <p class="text-justify leading-7">
                    The GET routes are utilized for passing parameters to the server. 
                    Unlike in some other frameworks that require defining all keys when assigning routes, 
                    the Abhijaan framework offers dynamic routes by appending the key 'GET' at the end.</p>
                  {/* <p class="text-justify leading-7">example : </p> */}
                  <CardCode comment="route( '/url_route/GET', 'file_path.php' );">
                    <span class="text-orange-600">route(</span>
                    <span class="text-sky-600 px-1">'/home'</span>
                    <span class="text-orange-600">,</span>
                    <span class="text-sky-600 px-1">'home/index.php'</span>
                    <span class="text-orange-600">);</span>
                  </CardCode>
                </div>
              </li>
          </ul>
          <div>
            <p class="text-sm text-justify leading-7">
              In summary, the <b class="text-lg">অভিযান</b> (Abhijaan) framework provides a user-friendly routing system designed to simplify how URLs are mapped to different parts of your web application. 
              With straightforward syntax like route('/url_route', 'file_path.php');, developers can easily define where each URL should lead within their project. 
              This approach ensures that beginners can quickly grasp and manage how users navigate through their web applications without needing extensive prior experience.
            </p>
          </div>
        </div>

      </main>
    );
}