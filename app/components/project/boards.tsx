import { Link } from "@remix-run/react";
import { Card, CardHeader, CardTitle } from "~/components/ui/card";

interface BoardsProps {
  categories: Array<{ id: string; title: string; slug: string }>;
}

function Boards({ categories }: BoardsProps) {
  return (
    <div className="flex flex-wrap justify-between gap-x-4 gap-y-4 not-prose">
      {categories.map((category) => {
        return (
          <Card key={category.id} className="w-full lg:w-[31%]">
            <Link to={`${category.slug}`}>
              <CardHeader>
                <CardTitle className="text-lg hover:opacity-70">
                  {category.title}
                </CardTitle>
              </CardHeader>
            </Link>
          </Card>
        );
      })}
    </div>
  );
}

export default Boards;
