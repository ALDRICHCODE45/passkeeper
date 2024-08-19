import { FloatingNav } from "@/components/navbar";
import { HomeIcon } from "lucide-react";

export interface RootLayoutProps {
  children: React.ReactNode;
}

const navItems = [
  {
    name: "Home",
    link: "/home",
    icon: <HomeIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <main className=" min-h-screen bg-black bg-dot-white/[0.2]">
        <FloatingNav navItems={navItems} />
        {children}
      </main>
    </>
  );
}
