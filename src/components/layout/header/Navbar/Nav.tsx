import Link from "next/link";
import NavItems, { NavInterface } from "./NavItems";
const Nav = () => {
  console.log({ NavItems });

  return (
    <>
      <ul className="menu lg:flex lg:items-center">
        {NavItems &&
          NavItems.map((item: NavInterface, i: number) => {
            return (
              <li className="list unstyled py-2 px-3">
                <Link href="#" className="flex items-center">
                  <span className="pr-1">
                    <item.Icon />
                  </span>
                  {item.title}
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Nav;
