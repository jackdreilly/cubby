import { HandlerContext, PageProps } from "$fresh/server.ts";
import CubbyTable from "../components/cubby_table.tsx";
import Template from "../components/template.tsx";
import { Cubby } from "../db.ts";
import { HighLight, THEME } from "preact-highlight";

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
    <Template title="Cubby" >
      <div class="m-4 p-4 rounded-xl shadow-xl w-[fit-content]">
      <h2 class="text-xl m-2">Recent Cubbies</h2>
        <CubbyTable cubbies={cubbies} />
      </div>
      <div class="m-4 p-4 rounded-xl shadow-xl w-[fit-content]">
        <h2 class="text-xl m-2">Python Support!</h2>
        <pre class="bg-gray-100 rounded-xl m-5 p-5 text-xs">{`
# pip install cubby
import cubby
# create a cubby
cubby.myroot.mychild.put(dict(mycool=dict(nested="stuff")))
# Then hit tab on cubby object to get autocomplete!
cubby.myroot
# And again hit tab...
cubby.myroot.mychild
# Then take your stuff out!
my_cubby = cubby.myroot.take()
my_cubby.stuff
# Update it...
my_cubby.update(dict(simpler='stuff'))
# Or delete it...
my_cubby.delete()
# Check out your stuff online!
my_cubby.link
# or better, open in chrome!
my_cubby.web()
      `.trim()}</pre>
      </div>
    </Template >
  );
}