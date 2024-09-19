import React from 'react'
import Link from 'next/link'
import NavLink from "./NavLink";
import Image from 'next/image';

const navLinks = [
{
    title: "About",
    path: "#about",

},
{
    title: "Projects",
    path: "#projects",
},
{
    title:"Contact",
    path: "contacts",
}
]
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4">
      <div> 
    <Image
            src="/images/logo.png"
            alt ="hero"
            className="rounded-full object cover"
            width={50}
            height={50}
            />
    </div>


        <ul>
           <li><Link href={"#about"} className="block py-2 pl-33 pr-4 ml-auto text-[ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">About</Link></li>
           <li></li>
        </ul>
 </nav>
  );
};

export default Navbar;
