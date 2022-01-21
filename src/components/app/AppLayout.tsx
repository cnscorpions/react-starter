import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { ApplicationLayout } from "@/application/enums/shared/ApplicationLayout";
import StackedLayout from "../layouts/StackedLayout";
import SidebarLayout from "../layouts/SidebarLayout";

interface Props {
  layout: "app" | "admin";
  children: ReactNode;
}

export default function AppLayout({ layout }: Props) {
  const currentWorkspaceId = useSelector((state: RootState): string => {
    return state.tenant.currentWorkspace?.id ?? "";
  });
  const currentLayout = useSelector((state: RootState): ApplicationLayout => {
    return state.app.layout;
  });

  return (
    <div key={currentWorkspaceId}>
      {(() => {
        if (currentLayout === ApplicationLayout.STACKED) {
          return (
            <StackedLayout layout={layout}>
              {/* {children} */}
              Your app views here
              <a
                href="https://alexandromg.gumroad.com/l/SaasFrontends-React?variant=Sandbox&_gl=1*9nq9fq*_ga*MTA3NDA3OTM4Ny4xNjQyMzU1ODQ3*_ga_6LJN6D94N6*MTY0MjM2NzI0OC40LjEuMTY0MjM2ODgzNS4w"
                className="text-xs underline text-gray-500"
              >
                (get the sandbox or essential editions for more views)
              </a>
            </StackedLayout>
          );
        } else {
          return (
            <SidebarLayout layout={layout}>
              {/* {children} */}
              Your app views here
              <a
                href="https://alexandromg.gumroad.com/l/SaasFrontends-React?variant=Sandbox&_gl=1*9nq9fq*_ga*MTA3NDA3OTM4Ny4xNjQyMzU1ODQ3*_ga_6LJN6D94N6*MTY0MjM2NzI0OC40LjEuMTY0MjM2ODgzNS4w"
                className="text-xs underline text-gray-500"
              >
                (get the sandbox or essential editions for more views)
              </a>
            </SidebarLayout>
          );
        }
      })()}
    </div>
  );
}
