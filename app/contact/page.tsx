"use client";

import PageHero from "@/components/PageHero";

export default function Contact() {
  return (
    <main>
      <PageHero
        eyebrow="AB PEINTURE — TOULOUSE"
        title="Contactez-"
        accent="nous."
        text="Une question, un chantier, une rénovation ? Échangeons sur votre projet."
        dark
      />

      <section className="contactMain">
        <div className="contactInfoPanel">
          <span className="sectionLabel">
            NOUS CONTACTER
          </span>

          <h2>
            Un projet ?
            <br />
            <em>Parlons-en.</em>
          </h2>

          <p>
            Décrivez-nous votre besoin. Nous pourrons ensuite échanger
            sur les travaux à prévoir.
          </p>

          <div className="contactDetails">
            <div>
              <span>01 — TÉLÉPHONE</span>
              <strong>06 XX XX XX XX</strong>
            </div>

            <div>
              <span>02 — EMAIL</span>
              <strong>contact@ab-peinture.fr</strong>
            </div>

            <div>
              <span>03 — ZONE</span>
              <strong>Toulouse &amp; Haute-Garonne</strong>
            </div>

            <div>
              <span>04 — HORAIRES</span>
              <strong>Lun — Ven · 08:00 — 18:00</strong>
            </div>
          </div>
        </div>

        <form
          className="contactForm"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <div className="formTitle">
            <span>DEMANDER UN DEVIS</span>

            <h3>Votre projet →</h3>
          </div>

          <div className="formGrid">
            <label>
              Nom
              <input
                required
                name="nom"
                placeholder="Votre nom"
              />
            </label>

            <label>
              Prénom
              <input
                name="prenom"
                placeholder="Votre prénom"
              />
            </label>

            <label>
              Téléphone
              <input
                required
                name="telephone"
                type="tel"
                placeholder="06..."
              />
            </label>

            <label>
              Email
              <input
                required
                name="email"
                type="email"
                placeholder="vous@email.fr"
              />
            </label>

            <label className="full">
              Type de projet

              <select
                name="projet"
                defaultValue=""
              >
                <option value="" disabled>
                  Sélectionner →
                </option>

                <option value="Peinture intérieure">
                  Peinture intérieure
                </option>

                <option value="Peinture extérieure">
                  Peinture extérieure
                </option>

                <option value="Façade">
                  Façade
                </option>

                <option value="Rénovation">
                  Rénovation
                </option>

                <option value="Autre">
                  Autre
                </option>
              </select>
            </label>

            <label className="full">
              Votre message

              <textarea
                name="message"
                rows={6}
                placeholder="Décrivez votre projet..."
              />
            </label>
          </div>

          <button
            className="greenButton"
            type="submit"
          >
            Envoyer ma demande <span>→</span>
          </button>
        </form>
      </section>

      <section className="mapSection">
        <div className="mapHeader">
          <span className="sectionLabel">
            NOUS TROUVER
          </span>

          <h2>
            Toulouse
            <br />
            <em>&amp; sa région.</em>
          </h2>
        </div>

        <div className="mapWrap">
          <iframe
            title="Carte Toulouse"
            src="https://www.openstreetmap.org/export/embed.html?bbox=1.330%2C43.555%2C1.505%2C43.650&layer=mapnik&marker=43.6047%2C1.4442"
            loading="lazy"
          />

          <div className="mapCard">
            <strong>AB Peinture</strong>

            <span>
              Toulouse &amp; Haute-Garonne
            </span>

            <b>
              Zone d’intervention →
            </b>
          </div>
        </div>
      </section>
    </main>
  );
}