import { HandlerContext, PageProps } from "$fresh/server.ts";
import CubbyTable from "../components/cubby_table.tsx";
import Template from "../components/template.tsx";
import { Cubby } from "../db.ts";

export function queryParam(r: Request, q: string): string | undefined {
  return new URL(r.url).searchParams.get(q) as string;
}

export const handler = {
  async GET(request: Request, context: HandlerContext) {
    return context.render({ cubbies: await Cubby.where('cubby_hole', 'like', `%${queryParam(request, "q")}%`).all() });
  }
}

export default function Search({ data: { cubbies } }: PageProps<{ cubbies: Cubby[] }>) {
  return <Template title="Search">
    <div class="relative overflow-x-auto">
      <h2 class="m-4">Search Results</h2>
      <CubbyTable cubbies={cubbies} />
    </div>
  </Template>
}
