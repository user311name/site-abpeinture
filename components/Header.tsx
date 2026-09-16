"use client";

import { useEffect, useState } from "react";
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

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((current) => !current);
    setSearchOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setSearchOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      <header className="siteHeader">
        <Link
          href="/"
          className="brand"
          onClick={closeMenu}
          aria-label="AB Peinture - Accueil"
        >
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

        <nav
          id="mobile-navigation"
          className={`mainNav ${menuOpen ? "open" : ""}`}
          aria-label="Navigation principale"
        >
          <Link href="/" onClick={closeMenu}>
            <span>Accueil</span>
            <b>→</b>
          </Link>

          <Link href="/services" onClick={closeMenu}>
            <span>Services</span>
            <b>→</b>
          </Link>

          <Link href="/realisations" onClick={closeMenu}>
            <span>Réalisations</span>
            <b>→</b>
          </Link>

          <Link href="/avant-apres" onClick={closeMenu}>
            <span>Avant / Après</span>
            <b>→</b>
          </Link>

          <Link href="/a-propos" onClick={closeMenu}>
            <span>À propos</span>
            <b>→</b>
          </Link>

          <Link href="/contact" onClick={closeMenu}>
            <span>Contact</span>
            <b>→</b>
          </Link>

          <Link
            href="/contact"
            className="mobileNavCta"
            onClick={closeMenu}
          >
            <span>Demander un devis</span>
            <b>→</b>
          </Link>
        </nav>

        <div className="headerActions">
          <button
            type="button"
            className={`searchButton ${searchOpen ? "active" : ""}`}
            onClick={() => {
              setSearchOpen((current) => !current);
              setMenuOpen(false);
            }}
            aria-label="Rechercher"
            aria-expanded={searchOpen}
          >
            <span />
          </button>

          <Link
            href="/contact"
            className="headerCta"
            onClick={closeMenu}
          >
            Demander un devis
            <b>→</b>
          </Link>

          <button
            type="button"
            className={`mobileMenuButton ${
              menuOpen ? "active" : ""
            }`}
            onClick={toggleMenu}
            aria-label={
              menuOpen ? "Fermer le menu" : "Ouvrir le menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {menuOpen && (
        <button
          type="button"
          className="mobileMenuOverlay"
          onClick={closeMenu}
          aria-label="Fermer le menu"
        />
      )}

      {searchOpen && (
        <div className="searchPanel">
          <div className="searchBox">
            <span className="searchIcon" />

            <input
              autoFocus
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Rechercher..."
              aria-label="Rechercher"
            />

            <button
              type="button"
              onClick={() => {
                setSearchOpen(false);
                setSearch("");
              }}
              aria-label="Fermer la recherche"
            >
              ×
            </button>
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
                      setMenuOpen(false);
                    }}
                  >
                    <span>{result.name}</span>
                    <b>→</b>
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