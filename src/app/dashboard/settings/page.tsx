import { type ReactElement } from "react";

export interface pageProps {}

export default function page({}: pageProps): ReactElement {
  return (
    <section>
      <div className="w-screen h-screen mx-auto">
        <div className="flex flex-col gap-20 justify-center items-center">
          <h1 className="text-4xl font-normal text-white">User settings</h1>
          <h1 className="text-white">Hola</h1>
        </div>
      </div>
    </section>
  );
}
