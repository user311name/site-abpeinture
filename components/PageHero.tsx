import PaintRoller from "./PaintRoller";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  accent: string;
  text: string;
  dark?: boolean;
};

export default function PageHero({
  eyebrow,
  title,
  accent,
  text,
  dark = true,
}: PageHeroProps) {
  return (
    <section
      className={`pageHero ${
        dark ? "pageHeroDark" : "pageHeroGreen"
      }`}
    >
      <div className="pageHeroContent">
        <span className="eyebrow">{eyebrow}</span>

        <h1>
          {title}
          <br />
          <em>{accent}</em>
        </h1>

        <p>{text}</p>
      </div>

      <div className="pageHeroSplash" />

      <PaintRoller
        className="pageHeroRoller"
        color={dark ? "green" : "white"}
      />
    </section>
  );
}