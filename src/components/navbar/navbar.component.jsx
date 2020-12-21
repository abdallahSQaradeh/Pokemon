import React from "react";
import NavItem from "../nav-item/nav-item.component";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import "./navbar.style.scss";

export default function NavBar() {
  const navItems = [
    { text: "home", id: "nav-home" },
    { text: "Pokédex", id: "nav-Pokédex" },
    { text: "Legendaries", id: "nav-Legendaries" },
    { text: "Documentation", id: "nav-Documentation" },
  ];

  return (
    <div className="navbar">
      <Logo />
      <ul className="nav-items">
        {navItems.map((item) => (
          <NavItem text={item.text} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
