import React from "react";
import Hero from "../Hero";
import FilmList from "./FilmList";

export default function HomePage({ films }: any) {
  return (
    <>
      <Hero
        title="May the Films be with you."
        subtitle="An up to date list of the currently exsiting starwars feature films."
        btnText="Show Me"
        btnTarget="#films"
      />

      <FilmList films={films} />

    </>
  );
}
