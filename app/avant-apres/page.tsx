"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";

const items = [
  {
    title: "Rénovation d’une maison",
    before:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=90",
    after:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=90",
  },
  {
    title: "Transformation intérieure",
    before:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=90",
    after:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=90",
  },
  {
    title: "Modernisation d’un espace",
    before:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=90",
    after:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=90",
  },
];

export default function BeforeAfter() {
  const [position, setPosition] = useState(50);

  return (
    <main>
      <PageHero
        eyebrow="AB PEINTURE — TRANSFORMATIONS"
        title="Avant"
        accent="/ Après."
        text="La différence se voit. Comparez les espaces avant et après transformation."
        dark
      />

      <section className="beforeAfterPage">
        {items.map((item, index) => (
          <article
            className="beforeProject"
            key={item.title}
          >
            <div className="beforeHeading">
              <span>
                TRANSFORMATION{" "}
                {String(index + 1).padStart(2, "0")}
              </span>

              <h2>{item.title}</h2>
            </div>

            <div
              className="compare"
              style={
                {
                  "--split": `${position}%`,
                } as React.CSSProperties
              }
            >
              <div className="compareBase">
                <img
                  src={item.after}
                  alt={`Après ${item.title}`}
                />

                <span>APRÈS</span>
              </div>

              <div className="compareTop">
                <img
                  src={item.before}
                  alt={`Avant ${item.title}`}
                />

                <span>AVANT</span>
              </div>

              <div className="compareLine">
                <b>↔</b>
              </div>
            </div>

            <input
              className="compareRange"
              type="range"
              min="0"
              max="100"
              value={position}
              onChange={(event) =>
                setPosition(Number(event.target.value))
              }
              aria-label={`Comparer ${item.title}`}
            />
          </article>
        ))}
      </section>
    </main>
  );
}