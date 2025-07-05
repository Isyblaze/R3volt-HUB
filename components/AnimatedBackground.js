export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="w-full h-full bg-[radial-gradient(#93c5fd_1px,transparent_1px)] [background-size:16px_16px] opacity-10 animate-pulse"></div>
    </div>
  );
}
