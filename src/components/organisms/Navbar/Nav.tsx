"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/legacy/image";
import { useCount } from "../../../contexts/CountContext";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { count } = useCount();

  const menuItems = [
    { text: "Home", link: "/" },
    { text: "Favorite", link: "/favorite" },
    { text: "Contact Us", link: "/contact_us" },
    { text: "About Us", link: "/about_us" },
    { text: "Sign Up", link: "/join" },
    { text: "Login", link: "/login" },
  ];

  return (
    <Navbar
      className="py-1"
      shouldHideOnScroll
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarBrand>
          <Link href="/">
            <Image src="/logo.svg" alt="logo" width={45} height={45} />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 ml-16" justify="center">
        <NavbarItem>
          <Link size="sm" color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link size="sm" color="foreground" href="favorite">
            Favorite
            {count > 0 && (
              <Badge variant="destructive" className="-mt-3">
                {count > 9 ? "9+" : count}
              </Badge>
            )}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link size="sm" color="foreground" href="contact_us">
            Contact Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link size="sm" color="foreground" href="about_us">
            About Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="ml-16" justify="end">
        <NavbarItem className="hidden sm:flex">
          <Link href="/login" className="text-gray-800">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/join">
            <Button className="bg-[#4B9960] hidden sm:flex">Sign Up</Button>
          </Link>
        </NavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>
      <NavbarMenu style={{ background: isMenuOpen ? "#fff" : "#fff" }}>
        {menuItems.map((item, index) => (
          <NavbarMenuItem className="mt-5" key={`${item}-${index}`}>
            <Link
              // color={
              //   index === 0
              //     // ? "primary"
              //     // : index === menuItems.length - 1
              //     ? "danger"
              //     : "foreground"
              // }
              color="foreground"
              className="w-full"
              href={item.link}
              size="lg"
            >
              {item.text}
              {item.text === "Favorite" && count > 0 && (
                <Badge variant="destructive" className="ml-2">
                  {count > 9 ? "9+" : count}
                </Badge>
              )}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
