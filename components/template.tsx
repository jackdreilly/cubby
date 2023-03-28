import { Head } from "$fresh/runtime.ts";
import { ComponentChildren } from "preact";
export default function Template({ title, children }: { title?: string, children: ComponentChildren }) {
  return (
    <html>
      <Head>
        <title>{title ?? "Cubby"}</title>
      </Head>
      <body>
        <nav class="bg-gray-100 border-gray-200 p-2">
          <div class="flex items-center mx-4">
            <a href="/">
              <img src="/cubby.png" class="h-16 w-24" alt="Cubby Logo" />
            </a>
            <div class="mx-4">
              <form action="/search">
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Search icon</span>
                  </div>
                  <input type="text" id="search-navbar" name="q" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Cubbies..." />
                </div>
              </form>
            </div>
            <a class="mx-4" href="/create">
              <button
                type="button"
                class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                New Cubby
              </button>
            </a>
          </div>
        </nav>
        <main class="m-4">
          <div class="m-2">
            {children}
          </div>
        </main>
      </body>
    </html >
  );
}
