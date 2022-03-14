import React from "react";
import type { ReactElement } from "react";
import Layout from "../components/Layout";
import ListPrices from "../components/ListPrices";

export default function Prices() {
  return (
    <section>
      <ListPrices />
    </section>
  );
}
Prices.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
