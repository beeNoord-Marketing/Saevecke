export function WiggleGradient() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] bg-white/40 blur-3xl animate-lava-1" />
      <div className="absolute -bottom-32 -right-32 w-[44rem] h-[36rem] bg-white/30 blur-3xl animate-lava-2" />
      <div className="absolute top-1/3 left-1/2 w-[32rem] h-[40rem] bg-white/35 blur-3xl animate-lava-3" />
    </div>
  );
}
