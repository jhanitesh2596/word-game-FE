import WordlyGame from "@/components/wordly/WordlyGame";
import WordlyHeader from "@/components/wordly/WordlyHeader";
import React from "react";

function Wordly() {
  return (
    <div>
      <WordlyHeader />
      <section className="w-full flex justify-center items-center">
        <WordlyGame />
      </section>
    </div>
  );
}

export default Wordly;
