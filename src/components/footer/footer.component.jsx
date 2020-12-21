import React from "react";
import "./footer.style.scss";
import { AiFillHeart } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        made with
        <AiFillHeart className="red" />
      </div>

      <div>Ours Team</div>
    </footer>
  );
}
