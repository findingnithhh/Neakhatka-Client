"use client";
import React, { useEffect, useState } from "react";
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
interface MenuItem {
  text: string;
  link: string;
}


export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeLink, setActiveLink] = useState<string>("");
  const { count } = useCount();

  useEffect(() => {
    // Set the active link based on the current path
    setActiveLink(window.location.pathname);
  }, []);

  const menuItems: MenuItem[] = [
    { text: "Home", link: "/" },
    { text: "Favorite", link: "/favorite" },
    { text: "Contact Us", link: "/contact_us" },
    { text: "About Us", link: "/about_us" },
    { text: "Sign Up", link: "/join" },
    { text: "Login", link: "/login" },
  ];

  // const handleNavClick = (index: any) =>{
  //   setActiveIndex (index);
  // }

  return (
    <Navbar
      className="py-1"
      shouldHideOnScroll
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarBrand >
          <Link href="/">
            <Image src="/logo.svg" alt="logo" width={45} height={45} />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.slice(0, 4).map((item, index) => (
          <NavbarItem key={index}>
            <Link
              size="sm"
              color={activeLink === item.link ? "success" : "foreground"}
              href={item.link}
              
            >
              {item.text}
              {item.text === "Favorite" && count > 0 && (
                <Badge variant="destructive" className="-mt-3">
                  {count > 9 ? "9+" : count}
                </Badge>
              )}
            </Link>
          </NavbarItem>
        ))}
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
