import { type ReactElement } from "react";
import LoginForm from "../ui/loginForm";

export interface pageProps {}

export default function page({}: pageProps): ReactElement {
  return (
    <main className=" bg-black bg-dot-white/[0.2]  h-screen w-full flex justify-center items-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <LoginForm />
    </main>
  );
}
