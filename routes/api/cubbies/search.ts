import { HandlerContext } from "$fresh/server.ts";
import { Cubby } from "../../../db.ts";
import { queryParam } from "../../create.tsx";

// deno-lint-ignore no-explicit-any
export function json(pl: any) {
  return new Response(JSON.stringify(pl), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export const handler = async (
  _req: Request,
  _ctx: HandlerContext,
): Promise<Response> => {
  return json(
    (await Cubby.where(
      "cubby_hole",
      "like",
      queryParam(_req, "cubby_hole_prefix") + "%",
    ).all()).map(({ cubby_hole }) => cubby_hole),
  );
};
