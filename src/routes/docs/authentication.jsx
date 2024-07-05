import CardCode from "~/components/CardCode";

export default function Authentication() {
    return (
      <main class="h-full flex w-full bg-gray-100 dot-pattern p-6">
        <div class="w-full max-w-4xl mx-auto">
          <p class="font-bold text-2xl text-gray-800 border-b-2 my-4">Authentication</p>
          <p class="tracking-wider my-7 text-sm text-justify leading-7">
            Authentication is a crucial component of many applications, ensuring that users can securely access their accounts and data. 
            This documentation outlines the functions provided by the authentication module in our framework. 
            These functions enable developers to manage user sessions, retrieve user information, and verify user authentication status effectively.
          </p>
          <ul class="list-disc list-inside space-y-2 mt-16 text-sm">
            <li class="relative font-semibold">Set Auth
              <div class="p-3 mx-auto w-fit sm:w-full font-normal">
                <p class="text-justify leading-7">
                  To initiate a user's session after a successfull user log-in, set_auth(); function is used. 
                  An Id and a username needs to be provide to the function to set in the session. example: 
                </p>
                <CardCode path="views/user/login.php">
                  <span class="text-orange-600">set_auth(</span>
                  <span class="text-sky-600 px-1">$id</span>
                  <span class="text-orange-600">,</span>
                  <span class="text-sky-600 px-1">$username</span>
                  <span class="text-orange-600">);</span>
                </CardCode>
              </div>
            </li>
            <li class="relative font-semibold">Get user information
              <div class="p-3 mx-auto w-fit sm:w-full font-normal">
                <p class="text-justify leading-7">
                  By calling this function, developers can retrieve detailed user information once the user has been authenticated. 
                  This includes accessing the id and name of the user stored in the session.
                </p>
                <CardCode path="views/user/login.php">
                  <span class="text-sky-600 px-1">$user = </span>
                  <span class="text-orange-600">get_user();</span>
                </CardCode>
              </div>
            </li>
            <li class="relative font-semibold">Get user id
              <div class="p-3 mx-auto w-fit sm:w-full font-normal">
                <p class="text-justify leading-7">
                  Developers can retrieve the unique identifier associated with the currently authenticated user session using this function. 
                  This ID is essential for performing backend operations, such as database queries or data manipulations specific to the user's account.
                </p>
                <CardCode path="views/user/login.php">
                  <span class="text-sky-600 px-1">$id = </span>
                  <span class="text-orange-600">user_id();</span>
                </CardCode>
              </div>
            </li>
            <li class="relative font-semibold">Get user name
              <div class="p-3 mx-auto w-fit sm:w-full font-normal">
                <p class="text-justify leading-7">
                  To personalize interactions or display user-specific information, use this function to retrieve the username of the currently logged-in user. 
                  It provides a straightforward way to access the username.
                </p>
                <CardCode path="views/user/login.php">
                  <span class="text-sky-600 px-1">$id = </span>
                  <span class="text-orange-600">user_name();</span>
                </CardCode>
              </div>
            </li>
            <li class="relative font-semibold">Check Auth
              <div class="p-3 mx-auto w-fit sm:w-full font-normal">
                <p class="text-justify leading-7">
                  Use this function to verify if any user is currently logged in. 
                  It returns a boolean value indicating the authentication status, enabling developers to control access to sensitive features or content based on whether a valid session exists.
                </p>
                <CardCode path="views/middleware/auth.php" comment="check_auth();">
                  <p>
                    <span class="text-sky-600 px-1">if (</span>
                    <span class="text-orange-600">check_auth();</span>
                    <span class="text-sky-600 px-1">{` ) { `}</span>
                  </p>
                  <p>
                    <span class="text-orange-600 ps-8">echo "</span>
                    <span class="text-green-600">You have logged in.</span>
                    <span class="text-orange-600">";</span>
                  </p>
                  <p>
                    <span class="text-sky-600 px-1">{` } else { `}</span>
                  </p>
                  <p>
                    <span class="text-orange-600 ps-8">echo "</span>
                    <span class="text-green-600">Please log in.</span>
                    <span class="text-orange-600">";</span>
                  </p>
                </CardCode>
              </div>
            </li>
            <li class="relative font-semibold">Log out
              <div class="p-3 mx-auto w-fit sm:w-full font-normal">
                <p class="text-justify leading-7">
                  When a user chooses to log out or when their session needs to be terminated for security reasons, this function is called to effectively end the user's current session. 
                  It ensures that all session-related data is cleared, thereby preventing unauthorized access to the application.
                </p>
                <CardCode path="views/user/login.php">
                  <span class="text-orange-600">destroy_user();</span>
                </CardCode>
              </div>
            </li>
          </ul>
          <div>
            <p class="text-justify leading-7 text-sm">
              These functions provide essential tools for implementing secure user authentication within <b class="text-lg">অভিযান</b> (Abhijaan). 
              By integrating these functions into your application, you can manage user sessions, retrieve user information, and ensure secure access control effectively. 
              {/* Refer to the following sections for detailed parameters, return types, and usage examples of each function. */}
            </p>
          </div>
        </div>
      </main>
    );
}