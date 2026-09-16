import Link from "next/link";

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link
      href="/"
      className={`logo ${dark ? "logoDark" : ""}`}
      aria-label="AB Peinture"
    >
      <span className="logoVisual" aria-hidden="true">
        <span className="logoArc logoArcRed" />
        <span className="logoArc logoArcGreen" />
        <span className="logoDrop" />
      </span>

      <span className="logoWords">
        <b>AB</b>
        <span>Peinture</span>
      </span>
    </Link>
  );
}