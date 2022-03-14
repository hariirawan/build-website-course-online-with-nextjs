import React from "react";
import Image from "next/image";
import Analytic from "../assets/Analytic.png";

export default function ListPrices() {
  return (
    <section className="bg-#F0F4F9 py-14">
      <div className="container mx-auto max-w-5xl grid grid-cols-3 gap-6">
        <div>
          <div>Starter</div>
          <div>19.00</div>
          <div>A private limited is the most popular</div>
        </div>
        <div>
          <ul>
            <li>Access to 25 courses</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
