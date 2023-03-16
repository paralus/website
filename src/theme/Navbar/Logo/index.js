import React from "react";
import Logo from "@theme/Logo";
export default function NavbarLogo() {
  return (
    <Logo
      className="navbar__brand mt-1"
      imageClassName="navbar__logo"
      titleClassName="navbar__title text--truncate"
    />
  );
}
