import React, { useState } from "react";
import data from "../../data/data.json";
import "./pokedex.style.scss";
import Search from "../../components/search/search.component";
import DropDownFilter from "../../components/drop-down-filter/drop-down-filter.component";
import Pokemons from "../../components/pagination-container/pagination-container.component";

export default function Pokedex() {
  const { title } = data.pokedex;
  const [search, setSearch] = useState("");
  return (
    <div className="pokedex-content">
      <h2 className="title">
        {title.titlePre}
        <span>{title.titleSuf}</span>
        {title.titlePost}
      </h2>
      <Search value={search} setValue={setSearch} />
      <div className="filters">
        <DropDownFilter />
        <DropDownFilter />
        <DropDownFilter />
      </div>
      <Pokemons />
    </div>
  );
}
