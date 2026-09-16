"use client";

import { useState } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";

const projects = [
  [
    "Rénovation intérieure",
    "Maison",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=90",
  ],
  [
    "Façade contemporaine",
    "Façades",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=90",
  ],
  [
    "Appartement moderne",
    "Appartement",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=90",
  ],
  [
    "Bureaux professionnels",
    "Bureaux",
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=90",
  ],
  [
    "Rénovation complète",
    "Maison",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=90",
  ],
  [
    "Maison individuelle",
    "Extérieur",
    "https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=1400&q=90",
  ],
  [
    "Cuisine rénovée",
    "Appartement",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=90",
  ],
  [
    "Local professionnel",
    "Bureaux",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=90",
  ],
];

export default function Realisations() {
  const [filter, setFilter] = useState("Tous");

  const filters = [
    "Tous",
    "Maison",
    "Appartement",
    "Bureaux",
    "Façades",
    "Extérieur",
  ];

  const visible =
    filter === "Tous"
      ? projects
      : projects.filter((project) => project[1] === filter);

  return (
    <main>
      <PageHero
        eyebrow="AB PEINTURE — PROJETS"
        title="Nos"
        accent="réalisations."
        text="Découvrez une sélection de projets et le soin apporté à chaque finition."
        dark
      />

      <section className="gallerySection">
        <div className="filterBar">
          {filters.map((item) => (
            <button
              className={filter === item ? "active" : ""}
              key={item}
              onClick={() => setFilter(item)}
            >
              {item}
              <span>→</span>
            </button>
          ))}
        </div>

        <div className="projectGrid">
          {visible.map(
            ([title, category, image], index) => (
              <article
                className={`projectCard ${
                  index % 3 === 0 ? "wide" : ""
                }`}
                key={title}
              >
                <img
                  src={image}
                  alt={title}
                />

                <div className="projectOverlay">
                  <span>{category}</span>

                  <h2>{title}</h2>

                  <b>→</b>
                </div>
              </article>
            )
          )}
        </div>

        <div className="galleryCta">
          <span>VOUS AVEZ UN PROJET ?</span>

          <h2>
            Faisons-le <em>ensemble.</em>
          </h2>

          <Link
            className="greenButton"
            href="/contact"
          >
            Demander un devis →
          </Link>
        </div>
      </section>
    </main>
  );
}