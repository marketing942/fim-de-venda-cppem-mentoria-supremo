import { ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 pt-12 pb-8">
      {/* Badge */}
      <div className="flex justify-center mb-6">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(34,197,94,0.35)] bg-[rgba(34,197,94,0.08)] text-green-400 text-xs font-semibold tracking-widest uppercase">
          <ShieldCheck size={13} className="shrink-0" />
          CPPEM Concursos · Mentoria Plano de Combate Supremo
        </span>
      </div>

      {/* Título */}
      <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-4">
        Parabéns pela sua decisão!{" "}
        <span className="text-green-400">
          Agora você faz parte da elite do CPPEM.
        </span>
      </h1>

      {/* Subtítulo */}
      <p className="text-center text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
        Você escolheu caminhar pelo caminho certo, com direção,
        acompanhamento e estratégia. Siga os próximos passos para acessar sua
        mentoria e iniciar sua preparação da forma correta.
      </p>
    </section>
  );
}
