"use client";

import { CheckCircle2, ExternalLink } from "lucide-react";

export interface Step {
  id: number;
  title: string;
  description: string;
  buttonLabel: string;
  link?: string;
  badge?: string;
  highlight?: React.ReactNode;
}

interface StepCardProps {
  step: Step;
  completed: boolean;
  onComplete: (id: number) => void;
}

export function StepCard({ step, completed, onComplete }: StepCardProps) {
  function handleClick() {
    onComplete(step.id);
    if (step.link) {
      window.open(step.link, "_blank", "noopener,noreferrer");
    }
  }

  if (completed) {
    return (
      <div className="relative rounded-xl border border-green-500/30 bg-[rgba(34,197,94,0.04)] overflow-hidden transition-all duration-500">
        {/* Barra superior concluída */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-green-400/60 to-transparent" />

        <div className="flex items-center gap-4 px-5 py-4 sm:px-6">
          <CheckCircle2 size={24} className="text-green-500/70 shrink-0" strokeWidth={2} />
          <div className="flex-1 min-w-0 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="font-semibold text-sm text-slate-600 line-through">
              {step.title}
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase bg-green-500/10 text-green-600/70 border border-green-500/20">
              <CheckCircle2 size={9} />
              Concluído
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative rounded-xl overflow-hidden transition-all duration-300 group">
      {/* Borda neon com glow */}
      <div className="absolute inset-0 rounded-xl border border-[rgba(34,197,94,0.35)] group-hover:border-[rgba(74,222,128,0.6)] transition-colors duration-300 pointer-events-none z-10" />
      {/* Glow externo sutil */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
        style={{ boxShadow: "0 0 20px rgba(34,197,94,0.12), inset 0 0 20px rgba(34,197,94,0.04)" }}
      />

      {/* Fundo com gradiente sutil */}
      <div className="relative z-[1] bg-[#111111] group-hover:bg-[#131a13] transition-colors duration-300">
        {/* Faixa lateral esquerda neon */}
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-green-400/80 via-green-500/50 to-green-400/20 rounded-l-xl" />

        <div className="flex items-start gap-4 pl-6 pr-5 py-5 sm:pl-7 sm:pr-6 sm:py-6">
          {/* Número com glow */}
          <div className="shrink-0 mt-0.5 relative">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm text-black"
              style={{
                background: "linear-gradient(135deg, #22c55e, #4ade80)",
                boxShadow: "0 0 12px rgba(34,197,94,0.5), 0 0 24px rgba(34,197,94,0.2)",
              }}
            >
              {step.id}
            </div>
          </div>

          <div className="flex-1 min-w-0">
            {/* Título + badge */}
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h3 className="font-bold text-base sm:text-lg text-white leading-snug">
                {step.title}
              </h3>
              {step.badge && (
                <span
                  className="inline-block px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase text-black"
                  style={{
                    background: "linear-gradient(90deg, #16a34a, #22c55e)",
                    boxShadow: "0 0 8px rgba(34,197,94,0.4)",
                  }}
                >
                  {step.badge}
                </span>
              )}
            </div>

            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              {step.description}
            </p>

            {step.highlight && (
              <div
                className="mb-4 px-4 py-2.5 rounded-lg text-sm text-green-300/90 border"
                style={{
                  background: "rgba(34,197,94,0.06)",
                  borderColor: "rgba(34,197,94,0.25)",
                  boxShadow: "inset 0 0 12px rgba(34,197,94,0.04)",
                }}
              >
                {step.highlight}
              </div>
            )}

            {/* Botão */}
            <button
              onClick={handleClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-black cursor-pointer transition-all duration-200 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #22c55e, #4ade80)",
                boxShadow: "0 0 16px rgba(34,197,94,0.4), 0 2px 8px rgba(0,0,0,0.3)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 0 28px rgba(74,222,128,0.6), 0 2px 8px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 0 16px rgba(34,197,94,0.4), 0 2px 8px rgba(0,0,0,0.3)";
              }}
            >
              {step.buttonLabel}
              {step.link && <ExternalLink size={13} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
