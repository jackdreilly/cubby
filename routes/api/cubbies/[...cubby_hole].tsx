import { HandlerContext } from "$fresh/server.ts";
import { Cubby } from "../../../db.ts";
import { form } from "../../create.tsx";
import { json } from "./search.ts";

export const handler = {
    async GET(
        _request: Request,
        context: HandlerContext,
    ): Promise<Response> {
        return json(await Cubby.find(context.params.cubby_hole));
    },
    async DELETE(
        _request: Request,
        context: HandlerContext,
    ): Promise<Response> {
        return json(await Cubby.deleteById(context.params.cubby_hole));
    },
    async POST(
        request: Request,
        context: HandlerContext,
    ): Promise<Response> {
        const cubby_hole = context.params.cubby_hole;
        const stuff = JSON.stringify((await form<{ stuff: unknown }>(request)).stuff, null, '\t');
        return json(await Cubby.create({ cubby_hole, stuff }));
    },
}