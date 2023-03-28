import { HandlerContext, PageProps } from "$fresh/server.ts";
import CubbyTable from "../components/cubby_table.tsx";
import Template from "../components/template.tsx";
import { Cubby } from "../db.ts";

export const handler = {
  async GET(_request: Request, context: HandlerContext) {
    return context.render({
      cubbies: await Cubby.orderBy("updated_at", "desc").all(),
    });
  },
};

export default function Home(
  { data: { cubbies } }: PageProps<{ cubbies: Cubby[] }>,
) {
  return (
    <Template title="Cubby">
      <div class="relative overflow-x-auto">
        <h2 class="m-4">Recent Cubbies</h2>
        <CubbyTable cubbies={cubbies} />
      </div>
    </Template>
  );
}