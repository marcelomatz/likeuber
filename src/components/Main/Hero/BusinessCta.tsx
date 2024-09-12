export default function BusinessCta() {
  return (
    <section className="w-full py-11 bg-city bg-no-repeat bg-cover bg-right px-11">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-5">
        <h1 className="text-xl font-bold w-full max-w-xl sm:text-3xl lg:text-4xl sm:max-w-2xl">
          A plataforma Uber que você conhece, reinventada para empresas.
        </h1>
        <h2 className="text-lg sm:text-xl max-w-xl font-medium">
          Uma plataforma simples para empresas de todos os portes administrarem
          suas viagens.
        </h2>
        <button className="bg-foreground font-medium self-start px-6 py-2 text-background rounded-full border-2 border-foreground hover:bg-background hover:border-foreground hover:text-foreground duration-300">
          Começar
        </button>
      </div>
    </section>
  );
}
