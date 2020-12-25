import React from "react";
import "./loader.style.scss";

export default function Loader() {
  return (
    <article
      style={{
        margin: "auto",
        marginTop: "100px",
      }}
    >
      <div className="o-pokeball c-loader  u-flash animate__animated animate__flash" />
      <p className="u-text-center u-pulse">loading..</p>
    </article>
  );
}
