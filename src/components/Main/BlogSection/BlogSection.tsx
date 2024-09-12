import Image from "next/image";

export default function BlogSection() {
  return (
    <section className="w-full flex flex-col max-w-7xl px-10 sm:px-10 xl:px-0 mx-auto">
      <div className="w-full flex flex-col mt-10 mb-10">
        <h1 className="font-bold text-2xl sm:text-3xl w-full max-w-lg">
          Preocupados com a sua segurança, onde quer que você vá
        </h1>
      </div>
      <section className="flex flex-col sm:flex-row w-full gap-8">
        <div className="w-full flex-1 hover:cursor-pointer hover:text-blue-900 duration-300 mt-2">
          <Image src={"/post1.png"} alt="Post" width={700} height={460} />

          <div className="mt-3">
            <h1 className="font-medium text-md sm:text-2xl">
              Sua segurança é a nossa prioridade
            </h1>
            <p className="text-xs mt-2 sm:text-lg">
              Com todos os recursos de segurança e todas as normas do nosso
              Código da Comunidade Uber, estamos comprometidos em ajudar a criar
              um ambiente seguro para nossos usuários.
            </p>
          </div>
        </div>
        <div className="w-full flex-1 hover:cursor-pointer hover:text-blue-900 duration-300 mt-2">
          <Image src={"/post2.png"} alt="Post" width={700} height={460} />

          <div className="mt-3">
            <h1 className="font-medium text-md sm:text-2xl">
              Colocamos mais de 10.000 cidades em movimento{" "}
            </h1>
            <p className="text-xs mt-2 sm:text-lg">
              O app está disponível em milhares de cidades no mundo todo para
              que você possa solicitar uma viagem mesmo longe de casa.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
