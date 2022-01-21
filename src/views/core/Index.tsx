import AppLayout from "@/components/app/AppLayout";
import { Outlet } from "react-router";

export default function AppIndex() {
  return (
    <AppLayout layout="app">
      <Outlet />
    </AppLayout>
  );
}
