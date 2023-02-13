import React from "react";

export default function Footer() {
  return (
    // bg-[#027879]
    <footer className=" bg-[#265A3F] py-10">
      <div className="flex items-center justify-center">
        <img
          src="/assets/footer-logo.png"
          className="w-[140px] h-[100px] mr-3"
        />
      </div>
      <div className="flex items-center justify-center pb-4 gap-4">
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:salesmarketing@bja-id.com"
        >
          <img src="/assets/footer/email.svg" className="w-10 h-10" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/bandhawa_coffee/"
        >
          <img src="/assets/footer/ig.svg" className="w-10 h-10" />
        </a>
        <a
          target="_blank"
          rel="noreferrer noopenner"
          href="https://wa.me/085290100080"
        >
          <img src="/assets/footer/wa.svg" className="w-10 h-10" />
        </a>
      </div>
      <div className="text-center text-white">
        &copy; 2022 Bandhawa Coffee Beans
      </div>
    </footer>
  );
}
