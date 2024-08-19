import { Hero } from "@/components/Hero";

export interface pageProps {}
export default function page({}: pageProps) {
  return (
    <main className="">
      <Hero />
    </main>
  );
}
