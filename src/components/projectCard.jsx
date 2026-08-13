function ProjectCard({ image, title, description, tag }) {
  return (
    <div>
      <img
        src={image}
        alt={title}
        className="w-full rounded-xl object-cover"
      />
      <p className="text-white font-agdasima font-bold text-[clamp(1rem,1.8vw,1.5rem)] mt-4">
        {title}
      </p>
      <p className="text-white/70 text-[clamp(0.75rem,1vw,0.95rem)] mt-1">
        {description}
      </p>
      {tag && (
        <span className="inline-block mt-3 text-[clamp(0.65rem,0.8vw,0.8rem)] text-white bg-blue-900/60 border border-blue-500/40 px-3 py-1 rounded-full">
          {tag}
        </span>
      )}
    </div>
  );
}
export default ProjectCard