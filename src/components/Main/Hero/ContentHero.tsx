import { CarFront, KeyRound, Signal } from "lucide-react";
import Link from "next/link";
const firstIcon = <Signal className="w-10 h-10" />;
const secoundIcon = <CarFront className="w-10 h-10" />;
const thirdIcon = <KeyRound className="w-10 h-10" />;

export default function ContentHero() {
  return (
    <section className="w-full flex max-w-7xl mx-auto items-center">
      <div className="bg-background max-w-2xl sm:max-w-lg w-full rounded-b">
        <div className="bg-slate-100 flex w-full items-center justify-between sm:rounded-xl">
          <section className="flex-1 p-2 flex flex-col items-center justify-center gap-2 bg-foreground text-background cursor-pointer duration-500">
            {firstIcon}
            <h2 className="text-center text-sm sm:text-base font-medium">
              Dirija na Uber
            </h2>
          </section>
          <section className="flex-1 p-2 flex flex-col items-center justify-center gap-2 hover:bg-foreground hover:text-background hover:cursor-pointer duration-500">
            {secoundIcon}
            <h2 className="text-center text-sm sm:text-base font-medium">
              Faça viagens
            </h2>
          </section>
          <section className="flex-1 p-2 flex flex-col items-center justify-center gap-2 hover:bg-foreground hover:text-background hover:cursor-pointer duration-500">
            {thirdIcon}
            <h2 className="text-center text-sm sm:text-base font-medium">
              Alugue seus carros
            </h2>
          </section>
        </div>
        <section className="flex flex-col gap-5 px-8 my-4">
          <h2 className="font-bold text-4xl max-w-sm">
            Torne-se motorista parceiro da Uber
          </h2>
          <h3 className="max-w-sm">
            Dirija na plataforma com a maior rede de usuários ativos.
          </h3>
          <button className="bg-foreground text-background px-4 py-2 border-2 border-foreground self-start rounded-full font-medium hover:bg-background hover:text-foreground hover:border-foreground duration-200">
            Cadastre-se para dirigir
          </button>
          <Link
            href={"#"}
            className="text-gray-700 mt-5 mb-4 border-b-2 self-start hover:border-gray-700 duration-200"
          >
            Saiba mais sobre como dirigir e fazer entregas
          </Link>
        </section>
      </div>
    </section>
  );
}
