import React from "react";
import { NavLink } from "react-router-dom";
import NavItem from "../nav-item/nav-item.component";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import "./navbar.style.scss";

export default function NavBar() {
  const navItems = [
    { text: "Home", id: "nav-home", link: "/" },
    { text: "Pokédex", id: "nav-Pokédex", link: "/pokedex" },
    { text: "Legendaries", id: "nav-Legendaries", link: "/legendaries" },
    { text: "Documentation", id: "nav-Documentation", link: "/documentation" },
  ];

  return (
    <div className="navbar">
      <Logo />
      <ul className="nav-items">
        {navItems.map((item) => (
          <NavLink key={item.id} exact to={item.link}>
            <NavItem text={item.text} />
          </NavLink>
        ))}
      </ul>
    </div>
  );
}
