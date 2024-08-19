"use client";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { type ReactElement } from "react";

interface DasboardLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: DasboardLayoutProps): ReactElement {
  const { data: user, status } = useSession();

  if (!user?.user || status !== "authenticated") {
    return redirect("/login");
  }
  console.log({ user });
  return (
    <>
      <DashboardSidebar children={children} />
    </>
  );
}
