import Link from "next/link";
import PageHero from "@/components/PageHero";

export default function About() {
  return (
    <main>
      <PageHero
        eyebrow="AB PEINTURE — L’ENTREPRISE"
        title="À propos"
        accent="de nous."
        text="Une entreprise au service de vos projets de peinture, rénovation et finition."
        dark
      />

      <section className="aboutMain">
        <div className="aboutPhoto">
          <img
            src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1400&q=90"
            alt="Professionnel de la peinture"
          />

          <div className="aboutBadge">
            <strong>10+</strong>
            <span>ANS</span>
          </div>
        </div>

        <div className="aboutCopy">
          <span className="sectionLabel">
            NOTRE HISTOIRE
          </span>

          <h2>
            Le savoir-faire
            <br />
            avant <em>tout.</em>
          </h2>

          <p>
            AB Peinture accompagne particuliers, professionnels et
            collectivités dans leurs projets de peinture et de rénovation
            à Toulouse et dans la région.
          </p>

          <p>
            Préparation des supports, choix des solutions, application et
            finitions : chaque étape compte pour obtenir un résultat propre
            et durable.
          </p>

          <div className="aboutStats">
            <div>
              <strong>10+</strong>
              <span>Expérience</span>
            </div>

            <div>
              <strong>31</strong>
              <span>Département</span>
            </div>

            <div>
              <strong>✓</strong>
              <span>Qualité</span>
            </div>
          </div>

          <Link
            className="greenButton"
            href="/contact"
          >
            Parler de votre projet →
          </Link>
        </div>
      </section>

      <section className="valuesSection">
        <div>
          <span className="sectionLabel">
            NOS ENGAGEMENTS
          </span>

          <h2>
            Une méthode
            <br />
            <em>simple et précise.</em>
          </h2>
        </div>

        <div className="valueGrid">
          {[
            [
              "01",
              "Écoute",
              "Comprendre le besoin avant de commencer.",
            ],
            [
              "02",
              "Préparation",
              "Des supports préparés avec soin.",
            ],
            [
              "03",
              "Précision",
              "Une application régulière et maîtrisée.",
            ],
            [
              "04",
              "Finition",
              "Le détail qui fait la différence.",
            ],
          ].map(([number, title, description]) => (
            <article key={number}>
              <span>{number} →</span>

              <h3>{title}</h3>

              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}