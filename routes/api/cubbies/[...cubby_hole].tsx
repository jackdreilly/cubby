import { HandlerContext } from "$fresh/server.ts";
import { Cubby } from "../../../db.ts";
import { form } from "../../create.tsx";
import { redirect } from "../../cubbies/delete/[...cubby_hole].ts";
import { json } from "./search.ts";

export const handler = {
    async GET(
        _request: Request,
        context: HandlerContext,
    ): Promise<Response> {
        return json(await Cubby.find(context.params.cubby_hole));
    },
    async PATCH(
        request: Request,
        context: HandlerContext,
    ): Promise<Response> {
        const cubby = await Cubby.find(context.params.cubby_hole)
        cubby.stuff = JSON.stringify((await form<{ stuff: unknown }>(request)).stuff, null, '\t');
        await cubby.update();
        return json(cubby);
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