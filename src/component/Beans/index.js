import React from "react";
import ArabicaBeans from "./Arabica";
import RobustaBeans from "./Robusta";

export default function BeansItem() {
  return (
    <section className="container mx-auto py-16 ">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <ArabicaBeans />
        <RobustaBeans />
      </div>
    </section>
  );
}
