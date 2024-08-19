"use client";
import { type ReactElement } from "react";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";

export interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps): ReactElement {
  return (
    <>
      <Toaster richColors position="top-center" />
      <SessionProvider>{children}</SessionProvider>
    </>
  );
}
