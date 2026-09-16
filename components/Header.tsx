"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  const results = [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Réalisations", href: "/realisations" },
    { name: "Avant / Après", href: "/avant-apres" },
    { name: "À propos", href: "/a-propos" },
    { name: "Contact", href: "/contact" },
    { name: "Peinture intérieure", href: "/services" },
    { name: "Peinture extérieure", href: "/services" },
    { name: "Façades", href: "/services" },
    { name: "Rénovation", href: "/services" },
  ];

  const filteredResults = results.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <header className="siteHeader">
        <Link href="/" className="brand" onClick={() => setMenuOpen(false)}>
          <span className="brandIcon">
            <span className="brandArc red" />
            <span className="brandArc green" />
            <span className="brandHouse">
              <i />
              <b />
            </span>
          </span>

          <span className="brandName">
            <strong>AB</strong>
            <span>Peinture</span>
          </span>
        </Link>

        <nav className={`mainNav ${menuOpen ? "open" : ""}`}>
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Accueil
          </Link>

          <Link href="/services" onClick={() => setMenuOpen(false)}>
            Services
          </Link>

          <Link href="/realisations" onClick={() => setMenuOpen(false)}>
            Réalisations
          </Link>

          <Link href="/avant-apres" onClick={() => setMenuOpen(false)}>
            Avant / Après
          </Link>

          <Link href="/a-propos" onClick={() => setMenuOpen(false)}>
            À propos
          </Link>

          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </nav>

        <div className="headerActions">
          <button
            className={`searchButton ${searchOpen ? "active" : ""}`}
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Rechercher"
          >
            <span />
          </button>

          <Link href="/contact" className="headerCta">
            Demander un devis
            <b>↗</b>
          </Link>

          <button
            className="mobileMenu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <i />
            <i />
            <i />
          </button>
        </div>
      </header>

      {searchOpen && (
        <div className="searchPanel">
          <div className="searchBox">
            <span className="searchIcon" />

            <input
              autoFocus
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Rechercher..."
            />

            <button onClick={() => setSearchOpen(false)}>×</button>
          </div>

          {search.length > 0 && (
            <div className="searchResults">
              {filteredResults.length > 0 ? (
                filteredResults.map((result) => (
                  <Link
                    href={result.href}
                    key={`${result.href}-${result.name}`}
                    onClick={() => {
                      setSearchOpen(false);
                      setSearch("");
                    }}
                  >
                    <span>{result.name}</span>
                    <b>↗</b>
                  </Link>
                ))
              ) : (
                <p>Aucun résultat trouvé.</p>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}