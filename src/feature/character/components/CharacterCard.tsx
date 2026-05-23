import type { Character } from "../character.entity";

interface CharacterCardProps {
  character: Character;
}

const statusColor: Record<Character["status"], string> = {
  Alive: "bg-green-500",
  Dead: "bg-red-500",
  Unknown: "bg-gray-400",
};

export const CharacterCard = ({ character }: CharacterCardProps) => {
  const { name, image, status, gender, type, createdAt } = character;

  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="group overflow-hidden rounded-2xl bg-gray-800 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Status badge */}
        <span className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-gray-900/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          <span className={`inline-block h-2 w-2 rounded-full ${statusColor[status]}`} />
          {status}
        </span>
      </div>

      {/* Body */}
      <div className="space-y-3 p-5">
        <h3 className="truncate text-lg font-bold tracking-wide text-white">
          {name}
        </h3>

        <div className="space-y-1.5 text-sm text-gray-400">
          <DetailRow label="Gender" value={gender} />
          <DetailRow label="Type" value={type || "N/A"} />
          <DetailRow label="Created" value={formattedDate} />
        </div>
      </div>
    </div>
  );
};

const DetailRow = ({ label, value }: { label: string; value: string }) => (
  <p className="flex justify-between">
    <span className="font-medium text-gray-500">{label}</span>
    <span className="text-gray-300">{value}</span>
  </p>
);