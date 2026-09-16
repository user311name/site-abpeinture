type PaintRollerProps = {
  className?: string;
  color?: "green" | "red" | "white";
};

export default function PaintRoller({
  className = "",
  color = "green",
}: PaintRollerProps) {
  return (
    <div className={`paintRoller ${className}`}>
      <div className={`rollerNap roller-${color}`} />
      <div className="rollerFrame" />
      <div className="rollerGrip" />
    </div>
  );
}