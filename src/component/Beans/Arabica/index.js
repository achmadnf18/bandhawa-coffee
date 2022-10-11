import { ChevronRightIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useState } from "react";
// import ModalBeans from "../../ModalBeans";
export default function ArabicaBeans() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="flex items-center justify-center py-12"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        <div className="block p-10 max-w-xs py-20 ">
          <div className="md:-mt-28 -mt-24">
            <h5 className="uppercase my-4 text-center md:text-2xl text-xl font-medium leading-tight tracking-widest text-gray-900 ">
              Green Bean
            </h5>

            <div className="text-center py-6">
              <Link href="/beans/green-bean" passHref>
                <a>
                  <button
                    onClick={() => setIsOpen(true)}
                    className="inline-flex bg-transparent hover:scale-105 duration-150 ease-in-out transition-all  items-center justify-between gap-10  px-6 py-2.5 rounded-full text-[#027879]  text-[12px] border border-[#027879] w-full  "
                  >
                    SEE OUR BEANS
                    <ChevronRightIcon className="w-4 h-4  text-[#027879]" />
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
        {/* <ModalBeans isOpen={isOpen} setIsOpen={setIsOpen} /> */}
      </div>
    </>
  );
}

{
  /* <div className="flex items-center justify-center bg-fixed bg-center bg-cover arabica-img cursor-pointer">
<div className="bg-black/70 hover:bg-black/80  w-full">
  <div className="flex items-center justify-center align-middle py-24 ">
    <h4 className="text-2xl my-2 text-white ">Arabica</h4>
  </div>
</div>
</div> */
}
