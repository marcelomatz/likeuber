import { Home, NotepadTextDashed, Users, Waypoints } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <section className="w-full flex flex-col py-5 max-w-7xl px-10 xl:px-0 mx-auto">
      <div className="w-full mx-auto grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <article className="w-full flex flex-col flex-1 gap-4 justify-start hover:scale-95 duration-300">
          <Users className="text-foreground" />
          <h1 className="font-medium text-xl text-foreground">Quem somos</h1>
          <h2 className="text-foreground h-12 md:h-14 lg:h-20">
            Descubra como começamos e o que nos motiva a reimaginar a
            mobilidade.
          </h2>
          <Link
            href={"#"}
            className="border-b-2 self-start text-linkDefault hover:border-linkHover"
          >
            Saiba mais sobre a Uber
          </Link>
        </article>
        <article className="w-full flex flex-col flex-1 gap-4 justify-start hover:scale-95 duration-300">
          <NotepadTextDashed className="text-foreground" />
          <h1 className="font-medium text-xl text-foreground">Newsroom</h1>
          <h2 className="text-foreground h-12 md:h-14 lg:h-20">
            Confira as notícias mais recentes sobre lançamentos, iniciativas e
            parcerias.
          </h2>
          <Link
            href={"#"}
            className="border-b-2 self-start text-linkDefault hover:border-linkHover"
          >
            Leia as últimas notícias
          </Link>
        </article>
        <article className="w-full flex flex-col flex-1 gap-4 justify-start hover:scale-95 duration-300">
          <Home className="text-foreground" />
          <h1 className="font-medium text-xl text-foreground">
            Cidadania global
          </h1>
          <h2 className="text-foreground h-12 md:h-14 lg:h-20">
            Leia sobre nosso compromisso na geração de impacto no mundo.
          </h2>
          <Link
            href={"#"}
            className="border-b-2 self-start text-linkDefault hover:border-linkHover"
          >
            Veja o relatório de impacto
          </Link>
        </article>
        <article className="w-full flex flex-col flex-1 gap-4 justify-start hover:scale-95 duration-300">
          <Waypoints className="text-foreground" />
          <h1 className="font-medium text-xl text-foreground">Conectividade</h1>
          <h2 className="text-foreground h-12 md:h-14 lg:h-20">
            Veja como lidamos com os desafios de conectar diferentes
            continentes.
          </h2>
          <Link
            href={"#"}
            className="border-b-2 self-start text-linkDefault hover:border-linkHover"
          >
            Veja como nos conectamos
          </Link>
        </article>
      </div>
    </section>
  );
}
