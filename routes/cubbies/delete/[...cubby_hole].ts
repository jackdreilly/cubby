import { HandlerContext } from "https://deno.land/x/fresh@1.1.4/server.ts";
import { Cubby } from "../../../db.ts";



export const handler = {
    async POST(_request: Request, context: HandlerContext) {
        await Cubby.deleteById(context.params.cubby_hole);
        return redirect("/", 303, "Deleted cubby");
    }
}

export function redirect(location: string, status: number, reason: string) {
    return new Response(reason, {
        status,
        headers: {
            Location: location,
        },
    });
}
