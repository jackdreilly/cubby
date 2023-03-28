import { HandlerContext, PageProps } from "https://deno.land/x/fresh@1.1.4/server.ts";
import Template from "../../../components/template.tsx";
import { Cubby } from "../../../db.ts";



export const handler = {
    async GET(_: Request, context: HandlerContext) {
        return context.render({ cubby: await Cubby.find(context.params.cubby_hole) });
    }
}

export default function Page({ data: { cubby } }: PageProps<{ cubby?: Cubby }>) {
    return <Template title={cubby?.cubby_hole?.toString()}>
        <h2>Cubby for <span class="font-mono font-bold">{cubby?.cubby_hole}</span></h2>
        <pre class="m-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">{JSON.stringify(cubby?.stuff, null, '\t')}</pre>
        <form method="POST" action={`/cubbies/delete/${cubby?.cubby_hole}`}>
            <input type="submit" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" value="Delete" />
        </form>
        <form action={`/cubbies/edit/${cubby?.cubby_hole}`}>
            <input type="submit" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" value="Edit" />
        </form>
    </Template>
}