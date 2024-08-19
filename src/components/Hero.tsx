import { type ReactElement } from "react";
import { Grid } from "./grid";
import { Button } from "./ui/button";
import Link from "next/link";

export interface HeroProps {}

export function Hero({}: HeroProps): ReactElement {
  return (
    <>
      <section className="">
        <div className="h-screen w-full flex flex-col items-center justify-center overflow-hidden ">
          <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
            PassKeeper
          </h1>
          <div className="w-[40rem] h-40 relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
            <div className=" pt-10 flex justify-center items-center gap-4 ">
              <Button variant="outline" className="w-[150px] p-5" asChild>
                <Link href="/dashboard/settings">
                  <span className="font-mono font-bold">Comienza Ahora</span>
                </Link>
              </Button>
              <Button variant="outline" className="w-[150px] p-5">
                <Link href="/dashboard/settings">
                  <span className="font-mono font-bold">Descargar App</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div>
          <Grid />
        </div>
      </section>
    </>
  );
}
