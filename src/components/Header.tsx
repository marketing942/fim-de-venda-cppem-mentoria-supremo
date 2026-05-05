import Image from "next/image";

export function Header() {
  return (
    <header className="w-full border-b border-[rgba(34,197,94,0.12)] bg-[#0a0a0a]/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <Image
          src="https://raw.githubusercontent.com/marketing942/fotos-dos-bots/main/LOGO%20CPPEM.png"
          alt="CPPEM Concursos"
          width={160}
          height={56}
          className="object-contain h-11 w-auto shrink-0"
          priority
        />
        <span className="text-right text-xs text-green-400/70 font-medium italic leading-snug">
          Seu sonho,{" "}
          <span className="text-green-400 not-italic font-semibold">
            nosso objetivo!
          </span>
        </span>
      </div>
    </header>
  );
}
