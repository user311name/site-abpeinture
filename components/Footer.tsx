import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="footerPaint footerPaintOne" />
      <div className="footerPaint footerPaintTwo" />

      <div className="footerGrid">
        <div className="footerBrand">
          <Logo />

          <p>
            Peinture, rénovation et façades à Toulouse et dans la région.
            Une identité modernisée autour du savoir-faire AB Peinture.
          </p>

          <Link className="footerCta" href="/contact">
            Parler de votre projet <span>→</span>
          </Link>
        </div>

        <div className="footerCol">
          <h4>Navigation</h4>

          <Link href="/">Accueil →</Link>
          <Link href="/services">Services →</Link>
          <Link href="/realisations">Réalisations →</Link>
          <Link href="/avant-apres">Avant / Après →</Link>
          <Link href="/a-propos">À propos →</Link>
          <Link href="/contact">Contact →</Link>
        </div>

        <div className="footerCol">
          <h4>Prestations</h4>

          <Link href="/services#interieur">
            Peinture intérieure →
          </Link>

          <Link href="/services#exterieur">
            Peinture extérieure →
          </Link>

          <Link href="/services#facades">
            Façades →
          </Link>

          <Link href="/services#renovation">
            Rénovation →
          </Link>

          <Link href="/services#revetements">
            Revêtements →
          </Link>

          <Link href="/services#platrerie">
            Plâtrerie →
          </Link>
        </div>

        <div className="footerCol">
          <h4>Zone d’intervention</h4>

          <span>Toulouse</span>
          <span>Haute-Garonne</span>
          <span>Occitanie</span>

          <Link href="/contact">
            Nous contacter →
          </Link>
        </div>
      </div>

      <div className="footerBottom">
        <span>© 2026 AB Peinture</span>
        <span>Peinture • Rénovation • Façades</span>
        <span>Toulouse & région</span>
      </div>
    </footer>
  );
}