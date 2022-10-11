import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#027879] py-10">
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
          href="mailto:yuliana.astuti@outlook.com?subject = Feedback&body = Message"
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
        <a target="_blank" rel="noreferrer" href="https://wa.me/681284137199">
          <img src="/assets/footer/wa.svg" className="w-10 h-10" />
        </a>
      </div>
      <div className="text-center text-white">
        &copy; 2022 Bandhawa Coffee Beans
      </div>
    </footer>
  );
}
