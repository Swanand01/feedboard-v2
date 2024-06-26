import { useOutletContext } from "@remix-run/react";
import Boards from "~/components/project/boards";
import Roadmaps from "~/components/project/roadmaps";
import { projectLoader } from "./project.$projectSlug";

export default function Page() {
  const { slug, description, categories } = useOutletContext<projectLoader>();
  return (
    <div className="flex flex-col gap-8 mt-8">
      <p className="mb-0 prose dark:prose-invert">{description}</p>
      <div className="flex flex-col gap-4">
        <div className="prose dark:prose-invert">
          <h3>Boards</h3>
        </div>
        <Boards categories={categories} />
      </div>
      <div className="flex flex-col gap-4">
        <Roadmaps categories={categories} projectSlug={slug} />
      </div>
    </div>
  );
}
