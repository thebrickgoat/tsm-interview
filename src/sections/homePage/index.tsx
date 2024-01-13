import React from "react";
import Hero from "../Hero";
import FilmList from "./FilmList";

export default function HomePage({ films }: any) {
  return (
    <>
      <Hero
        title="May the films be with you"
        subtitle="a list of the currently exsiting starwars movies"
        btnText="Show Me"
        btnTarget="#films"
      />
      <div className="bg-slate-300">
        <div className="container mx-auto py-6">
          <FilmList films={films} />
        </div>
      </div>
    </>
  );
}
