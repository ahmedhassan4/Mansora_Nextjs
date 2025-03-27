"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "rooms", path: "/rooms" },
  { name: "account", path: "/account" },
  { name: "about", path: "/about" },
];

export default function Navigation() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        {navItems.map(({ name, path }) => (
          <li key={name}>
            <Link
              href={path}
              className={
                pathname === path
                  ? "text-teal-400"
                  : "hover:text-teal-400 transition-colors text-white"
              }
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
