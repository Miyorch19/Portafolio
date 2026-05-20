interface MarqueeBandProps {
  variant?: "light" | "dark";
}

const MARQUEE_TEXT =
  "DESARROLLO WEB ✦ NEXT.JS ✦ DISEÑO ✦ REACT ✦ TYPESCRIPT ✦ MÉXICO ✦ ";

export default function MarqueeBand({ variant = "light" }: MarqueeBandProps) {
  const repeated = MARQUEE_TEXT.repeat(10);

  return (
    <div
      className={`overflow-hidden py-4 border-y ${
        variant === "dark"
          ? "bg-ink text-white border-white/10"
          : "bg-paper text-ink border-ink/10"
      }`}
      aria-hidden="true"
    >
      <div className="marquee-track text-[11px] font-black tracking-[0.25em] uppercase whitespace-nowrap select-none">
        <span>{repeated}</span>
        <span>{repeated}</span>
      </div>
    </div>
  );
}
