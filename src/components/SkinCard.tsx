import { skinColors } from "@/data/skins";
import { Check } from "lucide-react";

const SkinCard = ({
  id,
  label,
  active,
  onSelect,
}: {
  id: string;
  label: string;
  active: boolean;
  onSelect: () => void;
}) => {
  const c = skinColors[id];
  return (
    <button
      onClick={onSelect}
      className={`group relative flex flex-col items-start gap-1.5 p-2.5 rounded-md border-2 transition-all duration-150 text-left w-full ${
        active
          ? "border-primary bg-primary/10"
          : "border-border hover:border-primary/50 hover:bg-primary/5"
      }`}
    >
      <div className="flex items-center gap-1 w-full">
        <div className="flex-1 h-5 rounded-sm" style={{ background: c.primary }} />
        {c.accent !== c.primary && (
          <div className="flex-1 h-5 rounded-sm" style={{ background: c.accent }} />
        )}
      </div>
      <div className="flex items-center justify-between w-full">
        <span
          className={`font-['Ovo'] text-sm font-semibold ${
            active ? "text-primary" : "text-foreground"
          }`}
        >
          {label}
        </span>
      </div>
    </button>
  );
}

export default SkinCard;