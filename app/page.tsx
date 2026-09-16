import Link from "next/link";
import PaintRoller from "@/components/PaintRoller";

const services = [
  [
    "01",
    "Peinture intérieure",
    "Murs, plafonds, décoration et remise en peinture.",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
  ],
  [
    "02",
    "Peinture extérieure",
    "Façades, volets, portes et boiseries.",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",
  ],
  [
    "03",
    "Rénovation",
    "Préparation des supports et rénovation complète.",
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=85",
  ],
];

export default function Home() {
  return (
    <main>
      <section className="homeHero">
        <div className="homeHeroCopy">
          <span className="eyebrow">
            AB PEINTURE — TOULOUSE
          </span>

          <h1>
            Votre projet
            <br />
            prend une <strong>nouvelle dimension.</strong>
          </h1>

          <p>
            Peinture, rénovation et façades. Un savoir-faire professionnel
            pour transformer vos espaces avec précision.
          </p>

          <div className="heroActions">
            <Link className="greenButton" href="/contact">
              Demander un devis <span>→</span>
            </Link>

            <Link
              className="outlineLightButton"
              href="/realisations"
            >
              Voir nos réalisations →
            </Link>
          </div>
        </div>

        <div className="homeHeroVisual">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90"
            alt="Réalisation intérieure"
          />

          <div className="homeHeroShade" />

          <div className="heroTag">
            <span>AB PEINTURE</span>
            <b>Le détail fait la différence.</b>
          </div>

          <PaintRoller
            className="heroRoller"
            color="green"
          />
        </div>

        <div className="paintSwipe swipeGreen" />
        <div className="paintSwipe swipeRed" />
      </section>

      <section className="trustStrip">
        {[
          ["10+", "Années d’expérience"],
          ["31", "Haute-Garonne"],
          ["✓", "Garantie décennale"],
          ["100%", "Engagement qualité"],
        ].map(([big, small]) => (
          <div key={small}>
            <strong>{big}</strong>
            <span>{small}</span>
          </div>
        ))}
      </section>

      <section className="homeIntro sectionPad">
        <div>
          <span className="sectionLabel">
            01 — NOTRE SAVOIR-FAIRE
          </span>

          <h2>
            Une expertise
            <br />
            pensée pour <em>vos projets.</em>
          </h2>
        </div>

        <p>
          Découvrez notre univers, nos prestations et nos réalisations.
          Chaque besoin possède désormais son propre espace.
        </p>
      </section>

      <section className="homeServiceCards sectionPad">
        {services.map(([number, title, text, image]) => (
          <Link
            href="/services"
            className="homeServiceCard"
            key={number}
          >
            <div className="cardImage">
              <img src={image} alt={title} />
              <span>{number}</span>
            </div>

            <div className="cardBody">
              <h3>{title}</h3>

              <p>{text}</p>

              <b>
                Découvrir →
              </b>
            </div>
          </Link>
        ))}
      </section>

      <section className="homeFeature sectionPad">
        <div className="featureText">
          <span className="sectionLabel">
            02 — RÉALISATIONS
          </span>

          <h2>
            Des projets
            <br />
            <em>qui parlent.</em>
          </h2>

          <p>
            Un aperçu de notre travail. Retrouvez l’ensemble des réalisations
            dans notre galerie.
          </p>

          <Link
            className="greenButton"
            href="/realisations"
          >
            Voir la galerie <span>→</span>
          </Link>
        </div>

        <div className="featureImage">
          <img
            src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1300&q=90"
            alt="Réalisation AB Peinture"
          />

          <div className="featureNumber">
            01 / 06
          </div>
        </div>
      </section>

      <section className="greenBand">
        <div>
          <span>UN PROJET DE PEINTURE ?</span>

          <h2>
            Parlons-en <em>ensemble.</em>
          </h2>

          <Link
            className="darkButton"
            href="/contact"
          >
            Obtenir mon devis →
          </Link>
        </div>

        <PaintRoller
          className="bandRoller"
          color="white"
        />
      </section>
    </main>
  );
}