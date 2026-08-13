function Marquee({ text = '3 YEARS EXPERIENCE     10+ DELIVERIES    99% POSITIVE REVIEWS', items, speed = 20 }) {
  const renderItems = items
    ? Array.from({ length: 4 }).flatMap((_, repeatIndex) =>
        items.map((item, index) => (
          <div
            key={`${item.label}-${repeatIndex}-${index}`}
            className="mr-10 flex items-center gap-3"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 p-2 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <img
                src={item.source}
                alt={item.label}
                className="h-full w-full object-contain"
              />
            </div>
            <span className="text-white font-semibold text-[clamp(0.9rem,1.5vw,1.1rem)]">
              {item.label}
            </span>
          </div>
        ))
      )
    : Array.from({ length: 10 }).map((_, i) => (
        <span
          key={i}
          className="mx-4 text-white font-semibold text-[clamp(1rem,2.5vw,2rem)] flex items-center"
        >
          {text}
        </span>
      ));

  return (
    <div className="relative w-full overflow-hidden bg-transparent py-6">
      <div
        className="flex items-center whitespace-nowrap"
        style={{ animation: `marquee ${speed}s linear infinite` }}
      >
        {renderItems}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

export default Marquee;