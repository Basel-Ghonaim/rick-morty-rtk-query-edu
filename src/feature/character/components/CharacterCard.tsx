import type { Character } from "../character.entity";

interface CharacterCardProps {
  character: Character;
}

const statusClass: Record<string, string> = {
  Alive: "status-dot--alive",
  Dead: "status-dot--dead",
  unknown: "status-dot--unknown",
  Unknown: "status-dot--unknown",
};

export const CharacterCard = ({ character }: CharacterCardProps) => {
  const { name, image, status, gender, type } = character;

  // API returns "created" not "createdAt" — use created as a fallback
  const rawDate = character.createdAt ?? character.created;
  const formattedDate =
    rawDate && !isNaN(Date.parse(String(rawDate)))
      ? new Date(String(rawDate)).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      : "N/A";

  return (
    <div className="card">
      {/* Image */}
      <div className="card-image-wrapper">
        <img src={image} alt={name} className="card-image" />

        {/* Status badge */}
        <span className="status-badge">
          <span
            className={`status-dot ${statusClass[status] ?? "status-dot--unknown"}`}
          />
          {status}
        </span>
      </div>

      {/* Body */}
      <div className="card-body">
        <h3 className="card-name">{name}</h3>

        <div className="card-details">
          <DetailRow label="Gender" value={gender} />
          <DetailRow label="Type" value={type || "N/A"} />
          <DetailRow label="Created" value={formattedDate} />
        </div>
      </div>
    </div>
  );
};

const DetailRow = ({ label, value }: { label: string; value: string }) => (
  <div className="detail-item">
    <span className="detail-label">{label}</span>
    <span className="detail-value">{value}</span>
  </div>
);