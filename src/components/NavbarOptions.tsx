import { type ReactElement } from "react";
import { LogInIcon } from "lucide-react";
import Link from "next/link";

export interface NavbarOptionsProps {}

export async function NavbarOptions({}: NavbarOptionsProps): Promise<ReactElement> {
  return (
    <>
      {1 == 1 ? (
        <Link
          href="/"
          className=" border border-white/[0.2] rounded-full py-2 px-3 relative text-neutral-50 items-center flex space-x-1  hover:text-neutral-300 "
        >
          <LogInIcon className="block sm:hidden" />
          <span className="hidden sm:block text-normal">Logout</span>
          <span className="absolute w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </Link>
      ) : (
        <>
          <Link
            href="/"
            className=" border border-white/[0.2] rounded-full py-2 px-3 relative text-neutral-50 items-center flex space-x-1  hover:text-neutral-300 "
          >
            <LogInIcon className="block sm:hidden" />
            <span className="hidden sm:block text-normal">Signup</span>
            <span className="absolute w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
          </Link>
          <Link
            href="/"
            className=" border border-white/[0.2] rounded-full py-2 px-3 relative text-neutral-50 items-center flex space-x-1  hover:text-neutral-300 "
          >
            <LogInIcon className="block sm:hidden" />
            <span className="hidden sm:block text-normal">Login</span>
            <span className="absolute w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
          </Link>
        </>
      )}
    </>
  );
}
