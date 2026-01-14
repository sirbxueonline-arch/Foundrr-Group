'use client';

export default function Background() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-900">
      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-aurora opacity-60">
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-[radial-gradient(circle_farthest-side_at_0_100%,#2e1065,transparent),radial-gradient(circle_farthest-side_at_100%_0,#0c4a6e,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#2e1065,transparent),radial-gradient(circle_farthest-side_at_0_0,#1e3a8a,#111827)]" />
      </div>
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full mix-blend-screen animate-float-slow" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-emerald-600/10 blur-[100px] rounded-full mix-blend-screen animate-float-delayed" />
    </div>
  );
}
