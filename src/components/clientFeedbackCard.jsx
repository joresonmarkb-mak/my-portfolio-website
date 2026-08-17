function ClientFeedbackCard({ image, name, rate, description }) {
  return (
    <div className="snap-start shrink-0 w-[clamp(14rem,22vw,18rem)]  border border-white/80 rounded-4xl p-[clamp(1rem,1.5vw,1.5rem)] font-agdasima">
      
      {/* Top row: name + avatar */}
      <div className="flex items-center justify-between">
        <p className="text-white font-agdasima font-bold text-[clamp(0.9rem,1.2vw,1.1rem)]">
          {name}
        </p>
        <div className="rounded-full bg-gray-300 overflow-hidden w-[clamp(2rem,3vw,2.5rem)] h-[clamp(2rem,3vw,2.5rem)] shrink-0">
          {image && (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          )}
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-baseline gap-2 mt-4">
        <span className="text-white font-bold text-[clamp(1.8rem,3vw,3.5rem)] leading-none">
          {rate}
        </span>
        <span className="text-amber-400 text-[clamp(0.7rem,1.3vw,1.5rem)] tracking-tight">
          ★★★★★
        </span>
      </div>

      {/* Description */}
      <p className="text-white/60 text-[clamp(0.7rem,1vw,1.4rem)] leading-snug mt-4">
        {description}
      </p>
    </div>
  );
}

export default ClientFeedbackCard;