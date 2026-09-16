import Link from "next/link";
import PageHero from "@/components/PageHero";

const services = [
  {
    id: "interieur",
    n: "01",
    title: "Peinture intérieure",
    text: "Murs, plafonds, décoration et remise en peinture de vos espaces.",
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "exterieur",
    n: "02",
    title: "Peinture extérieure",
    text: "Portes, volets, boiseries et éléments extérieurs.",
    image:
      "https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "facades",
    n: "03",
    title: "Façades",
    text: "Rénovation, protection et mise en valeur des façades.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "renovation",
    n: "04",
    title: "Rénovation",
    text: "Préparation des supports et remise à neuf des espaces.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "revetements",
    n: "05",
    title: "Revêtements",
    text: "Sols et murs avec des solutions adaptées à chaque usage.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "platrerie",
    n: "06",
    title: "Plâtrerie",
    text: "Cloisons, faux plafonds et préparation des supports.",
    image:
      "https://images.unsplash.com/photo-1509399857125-0e9d8f6c0c35?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function Services() {
  return (
    <main>
      <PageHero
        eyebrow="AB PEINTURE — SAVOIR-FAIRE"
        title="Nos"
        accent="services."
        text="Des solutions pensées pour chaque projet, du rafraîchissement à la rénovation complète."
        dark
      />

      <section className="serviceRows">
        {services.map((service, index) => (
          <article
            id={service.id}
            className={`serviceRow ${
              index % 2 ? "reverse" : ""
            }`}
            key={service.id}
          >
            <div className="serviceRowImage">
              <img
                src={service.image}
                alt={service.title}
              />

              <span>{service.n}</span>
            </div>

            <div className="serviceRowCopy">
              <span className="sectionLabel">
                SERVICE {service.n}
              </span>

              <h2>{service.title}</h2>

              <p>{service.text}</p>

              <ul>
                <li>Préparation professionnelle →</li>
                <li>Application maîtrisée →</li>
                <li>Finitions soignées →</li>
              </ul>

              <Link
                className="greenButton"
                href="/contact"
              >
                Demander un devis <span>→</span>
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}