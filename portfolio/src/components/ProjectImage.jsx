import { FiImage } from 'react-icons/fi';

export function ProjectImage({ project }) {
  const accent = project.designSystem?.accent ?? '#3B82F6';

  if (project.image) {
    return (
      <div className="relative w-full aspect-video rounded-xl border border-card-border overflow-hidden group">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    );
  }

  return (
    <div
      className="relative w-full aspect-video rounded-xl border border-card-border overflow-hidden flex items-center justify-center"
      style={{
        background: `linear-gradient(135deg, ${accent}22 0%, #1E293B 60%)`,
      }}
    >
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
      <div className="relative flex flex-col items-center gap-2 text-ink-faint">
        <FiImage size={28} />
        <span className="font-mono text-xs">preview coming soon</span>
      </div>
      <span
        className="absolute top-3 left-3 w-2.5 h-2.5 rounded-full"
        style={{ background: accent }}
        aria-hidden
      />
    </div>
  );
}