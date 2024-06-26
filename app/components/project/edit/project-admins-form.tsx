import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { AddProjectAdmin } from "./add-project-admin";
import DeleteProjectAdminDialog from "./delete-project-admin-dialog";
import { cn } from "~/lib/utils";

interface ProjectAdmin {
  id: string;
  user: {
    username: string;
  };
}

interface ProjectAdminsFormProps {
  projectAdmins: ProjectAdmin[];
  projectId: string;
  className?: string;
}

export default function ProjectAdminsForm({
  projectAdmins,
  projectId,
  className,
}: ProjectAdminsFormProps) {
  return (
    <Card className={cn("h-fit", className)}>
      <CardHeader className="prose dark:prose-invert">
        <CardTitle>Edit Project Admins</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          {projectAdmins.length === 0 ? (
            <div className="text-sm mb-4">No Project Admins.</div>
          ) : (
            projectAdmins.map((admin) => (
              <div className="flex gap-4 mb-4" key={admin.id}>
                <div className="flex items-center w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors">
                  <p>{admin.user.username}</p>
                </div>
                <DeleteProjectAdminDialog projectAdminId={admin.id} />
              </div>
            ))
          )}
        </div>
        <AddProjectAdmin projectId={projectId} />
      </CardContent>
    </Card>
  );
}
