import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";

export default function ModalBeans({ isOpen, setIsOpen }) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 overflow-hidden"
          onClose={() => setIsOpen(!isOpen)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-30" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto ">
            <div className="flex min-h-full items-center justify-center p-4 text-center md:pt-56 pt-40">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full md:max-w-lg max-w-sm  transform overflow-hidden rounded-lg bg-white p-6  align-middle shadow-xl transition-all">
                  <div className="text-center py-5">
                    <h5 className="md:text-xl text-lg font-medium ">
                      Choose Your Beans
                    </h5>
                  </div>
                  <div className="flex items-center gap-4 justify-center">
                    <Link href="/beans/green-bean" passHref>
                      <button className="lg:text-lg text-sm bg-[#101B49] gap-3 inline-flex px-4 py-2 rounded-full items-center justify-between text-white cursor-pointer hover:scale-105">
                        Green Beans
                      </button>
                    </Link>
                    <Link href="/beans/roasted-bean" passHref>
                      <button className="lg:text-lg text-sm bg-[#101B49] gap-3 inline-flex px-4 py-2 rounded-full items-center justify-between text-white cursor-pointer hover:scale-105">
                        Roasted Beans
                      </button>
                    </Link>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
