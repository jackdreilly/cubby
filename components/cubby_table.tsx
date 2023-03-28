import { Cubby } from "../db.ts";

export default function CubbyTable({ cubbies }: { cubbies: Cubby[] }) {
    return !cubbies.length ? <p class="m-4">No results found.</p> : <table class="text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Cubby Hole
                </th>
                <th scope="col" class="px-6 py-3">
                    Stuff
                </th>
            </tr>
        </thead>
        <tbody>
            {cubbies.map(({ stuff, cubby_hole }) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                        scope="row"
                        class="font-bold px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                        <a
                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            href={`/cubbies/cubby/${cubby_hole}`}
                        >
                            <pre>{cubby_hole}</pre>
                        </a>
                    </th>
                    <td
                        scope="row"
                        class="px-6 py-4 font-medium whitespace-nowrap dark:text-white"
                    >
                        <pre>{JSON.stringify(stuff, null, "\t")}</pre>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>;
}
