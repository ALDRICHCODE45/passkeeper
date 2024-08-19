import { type ReactElement } from "react";

export interface pageProps {}

export default function page({}: pageProps): ReactElement {
  return (
    <>
      <h1>Hola Mundo</h1>
    </>
  );
}
