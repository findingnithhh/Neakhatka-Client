'use client'
import React, {useState} from "react";
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
import { Button } from "@/components/ui/button";
import Image from "next/legacy/image";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { text: "Home", link: "/home" },
    { text: "Favorite", link: "/favorite" },
    { text: "Contact Us", link: "/contact_us" },
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
          <Link href="/home">
            <Image src="/logo.svg" alt="logo" width={45} height={45} />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link size="sm" color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link size="sm" color="foreground" href="favorite">
            Favorite
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link size="sm" color="foreground" href="contact_us">
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="ml-16" justify="end">
        <NavbarItem className="hidden sm:flex">
          <Link href="/login" className="text-gray-800">Login</Link>
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
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href={item.link}
              size="lg"
            >
              {item.text}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
