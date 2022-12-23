import { ChevronDownIcon } from "@heroicons/react/outline";
import Link from "next/link";

export const DropDownMenu = ({
  isOpenDropDown,
  setIsOpenDropDown,
  isScroll,
}) => {
  return (
    <div className="px-4">
      <button
        onClick={() => setIsOpenDropDown((state) => !state)}
        className="inline-flex items-center gap-1"
      >
        <span
          className={`${
            isScroll
              ? "uppercase font-semibold text-black hover:text-black  "
              : "uppercase font-semibold text-white hover:text-white  "
          }`}
        >
          Our Product
        </span>
        <ChevronDownIcon
          className={`${
            isScroll
              ? "text-black h-5 font-semibold"
              : "text-white h-5 font-semibold"
          }`}
        />
      </button>
      {isOpenDropDown && (
        <ul className="absolute bg-white shadow-md  mt-4 p-2">
          <li className="hover:bg-black/10 p-2 ">
            <Link href="/beans/roasted-bean" passHref>
              <a className="uppercase font-semibold text-black hover:text-black">
                Roasted Bean
              </a>
            </Link>
          </li>
          <li className=" hover:bg-black/10 p-2 ">
            <Link href="/beans/green-bean" passHref>
              <a className="uppercase font-semibold text-black hover:text-black">
                Green Bean
              </a>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};
