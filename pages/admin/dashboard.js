import React, { useState } from "react";

import TableProduct from "@/component/Admin/TableProduct/TableProduct";
import AddProduct from "@/component/Admin/AddProduct/AddProduct";
import SideBar from "@/component/Admin/SideBar/SideBar";
import Layout from "@/layout";

export default function AdminDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Layout>
      <section className="container mx-auto my-10">
        <center>
          <h3 className="md:text-2xl sm:text-xl text-lg font-semibold">
            Welcome to Admin Dashboard
          </h3>
        </center>

        <div className=" grid md:grid-cols-12 grid-cols-1 gap-3">
          <div title="sidebar" className="md:col-span-3">
            <SideBar />
          </div>
          <div title="admin-header" className="md:col-span-9">
            <h5 className="md:text-xl sm:text-lg text-sm">All Product</h5>
            <a
              className="text-xs bg-[#101B49] gap-3 inline-flex px-10 py-2 rounded-lg mb-2 items-center justify-between text-white"
              onClick={() => setIsOpen(true)}
            >
              Add Product
            </a>
            <AddProduct onClose={() => setIsOpen(false)} isOpen={isOpen} />
            <TableProduct />
          </div>
        </div>
      </section>
    </Layout>
  );
}
