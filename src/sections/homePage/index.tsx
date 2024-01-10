import React from "react";
import HomeHero from "./Hero";
import FilmList from "./FilmList";

export default function HomePage({ films }: any) {
  return (
    <>
      <HomeHero title="May the films be with you"
       subtitle="a list of the currently exsiting starwars movies"
       btnText="Show Me"
       btnTarget="#films" />
      <FilmList films={films} />
    </>
  );
};
