import NavItems from "../NavItem";

export default function Nav({ openMenu }) {
  return (
    <div>
      {/* Desktop */}
      <ul className="hidden sm:flex items-center opacity-100 ">
        <NavItems />
      </ul>
      {/* Mobile */}
      {openMenu && (
        <ul className="md:hidden z-[-1] absolute bg-white w-full left-0 text-black">
          <NavItems />
        </ul>
      )}
    </div>
  );
}
