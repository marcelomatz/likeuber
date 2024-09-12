import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function AppDownload() {
  return (
    <section className="w-full flex flex-col bg-appAreaBackground py-10 px-10">
      <div className="w-full max-w-7xl mx-auto gap-10 sm:grid-cols-2">
        <div className="flex-1">
          <article className="self-start mb-8">
            <h1 className="font-bold text-2xl">É mais fácil pelo app</h1>
          </article>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <section className="bg-background px-4 py-3 items-center w-full flex-1 flex justify-between hover:bg-foreground hover:text-background hover:cursor-pointer duration-300">
            <div className="flex gap-4 items-center">
              <Image
                src={"/qrcode1.png"}
                alt="Baixe o App"
                width={75}
                height={75}
                className="sr-only sm:not-sr-only"
              />
              <div className="flex flex-col">
                <h2 className="font-medium text-xl">Baixe o app da Uber</h2>
                <h3 className="text-xs">Leia o código QR para baixar o app</h3>
              </div>
            </div>
            <div>
              <ArrowRight />
            </div>
          </section>
          <section className="bg-background px-4 py-3 items-center w-full flex-1 flex justify-between hover:bg-foreground hover:text-background hover:cursor-pointer duration-300">
            <div className="flex gap-4 items-center">
              <Image
                src={"/qrcode2.png"}
                alt="Baixe o App"
                width={75}
                height={75}
                className="sr-only sm:not-sr-only"
              />
              <div className="flex flex-col">
                <h2 className="font-medium text-xl">Baixe o app de Parceiro</h2>
                <h3 className="text-xs">Leia o código QR para baixar o app</h3>
              </div>
            </div>
            <div>
              <ArrowRight />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
