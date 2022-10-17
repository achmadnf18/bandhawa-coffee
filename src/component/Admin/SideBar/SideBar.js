import { AnnotationIcon, UserIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function SideBar() {
  const router = useRouter();
  return (
    <div className="rounded-lg shadow-lg px-5 py-4 sm:self-start sm:sticky sm:top-44">
      <div className="flex items-center justify-center bg-[#101B49] pt-2 border rounded-lg gap-4 py-3">
        <div className=" ">
          <h5 className="text-sm font-semibold text-white">Admin</h5>
        </div>
      </div>
      <div className="py-4">
        <div
          className={
            router.pathname == "/admin/dashboard"
              ? "flex items-center gap-2 py-2 bg-[#F3F4F5] rounded-md pl-5"
              : "flex items-center gap-2 py-2  pl-5 hover:underline"
          }
        >
          <Link href="/customer">
            <a className="text-sm font-medium inline-flex items-center gap-2 text-gray-700">
              <UserIcon
                className="w-5 h-5 mb-0.5 text-gray-700"
                aria-hidden="true"
              />
              Product
            </a>
          </Link>
        </div>

        <div
          className={
            router.pathname == "/admin/dashboard/teams"
              ? "flex items-center gap-2 py-2 bg-[#F3F4F5] rounded-md pl-5"
              : "flex items-center gap-2 py-2  pl-5 hover:underline"
          }
        >
          <Link href="/comingsoon/">
            <a className="text-sm font-medium inline-flex items-center gap-2 text-gray-700">
              <AnnotationIcon
                className="w-5 h-5 mb-0.5 text-gray-700"
                aria-hidden="true"
              />
              Our Teams
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
