import Link from "next/link";
import React from "react";

export default function PhylosophyComp() {
  return (
    <Link href="/phyloshophy" passHref>
      <a className="cursor-pointer ">
        <section className="phylo-image py-36 bg-cover bg-fixed bg-no-repeat bg-center ">
          {/* <div className="bg-fixed">
        <img src="/assets/background/hero-phylo.png" className="w-full" />
      </div> */}
          <div className="text-center uppercase font-medium text-2xl text-white tracking-[0.4rem]">
            Phylosophy
          </div>
        </section>
      </a>
    </Link>
  );
}
