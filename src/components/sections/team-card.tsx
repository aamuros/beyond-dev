interface TeamCardProps {
  name: string;
  role: string;
  bio?: string;
  avatarUrl?: string;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function TeamCard({ name, role, avatarUrl }: TeamCardProps) {
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="w-full aspect-square mb-5 overflow-hidden rounded-lg bg-surface-raised">
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-surface-raised border border-border">
            <span className="text-3xl font-semibold text-text-muted">
              {getInitials(name)}
            </span>
          </div>
        )}
      </div>

      <h3 className="text-base font-medium text-text-primary">{name}</h3>
      <p className="text-sm text-text-secondary mt-1">{role}</p>
    </div>
  );
}
