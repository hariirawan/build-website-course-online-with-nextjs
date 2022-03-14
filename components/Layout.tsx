import React, { Children } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout(props: any) {
  return (
    <>
      <Header />
      <main className="relative">{props.children}</main>
      <Footer />
    </>
  );
}
