import Template from "../components/template.tsx";
import { Cubby } from "../db.ts";
import { redirect } from "./cubbies/delete/[...cubby_hole].ts";
export function queryParam(r: Request, q: string): string | undefined {
    return new URL(r.url).searchParams.get(q) as string;
}

export function form<T>(r: Request): Promise<T> {
    return r.formData().then((f) => {
        // deno-lint-ignore no-explicit-any
        const obj: any = {};
        for (const [key, value] of f.entries()) {
            obj[key] = value;
        }
        return obj as T;
    });
}

export const handler = {
    async POST(request: Request) {
        const { cubby_hole } = await Cubby.create(await form<{ stuff: string, cubby_hole: string }>(request));
        return redirect(`/cubbies/cubby/${cubby_hole}`, 303, "Redirecting to new cubby page");
    }
}

export default function Create() {
    return <Template title="Create Cubby">
        <form method="POST">
            <div class="mb-6">
                <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cubby Hole</label>
                <input type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="slash/separated" required name="cubby_hole" />
            </div>
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stuff</label>
            <textarea id="message" rows={4} class="font-mono block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Valid JSON..." required name="stuff"></textarea>
            <input type="submit" class="my-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" />
        </form>
    </Template >
}
