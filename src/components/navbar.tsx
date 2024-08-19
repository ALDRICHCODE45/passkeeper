import { cn } from "@/lib/utils";
import Link from "next/link";
import { NavbarOptions } from "./NavbarOptions";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex max-w-fit  fixed top-10 inset-x-0 mx-auto border border-white/[0.2] rounded-full bg-black  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 px-4 py-4  items-center justify-center space-x-4",
        className
      )}
    >
      {navItems.map((navItem: any, idx: number) => (
        <Link
          key={`link=${idx}`}
          href={navItem.link}
          className={cn(
            " border border-white/[0.2] rounded-full py-2 px-3 relative text-neutral-50 items-center flex space-x-1  hover:text-neutral-300 "
          )}
        >
          <span className="block sm:hidden">{navItem.icon}</span>
          <span className="hidden sm:block text-normal">{navItem.name}</span>
          <span className="absolute w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </Link>
      ))}
      <NavbarOptions />
    </div>
  );
};
