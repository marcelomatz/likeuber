import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function AppCta() {
  return (
    <section className="w-full flex flex-col bg-background py-10 px-10">
      <div className="w-full max-w-7xl mx-auto gap-10 sm:grid-cols-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <section className="bg-background h-20 px-4 py-3 items-center w-full flex-1 flex justify-between hover:bg-foreground hover:text-background hover:cursor-pointer duration-300">
            <div className="flex gap-4 items-center">
              <div className="flex flex-col">
                <h2 className="font-medium text-xl">
                  Cadastre-se para dirigir
                </h2>
              </div>
            </div>
            <div>
              <ArrowRight />
            </div>
          </section>
          <section className="bg-background h-20 px-4 py-3 items-center w-full flex-1 flex justify-between hover:bg-foreground hover:text-background hover:cursor-pointer duration-300">
            <div className="flex gap-4 items-center">
              <div className="flex flex-col">
                <h2 className="font-medium text-xl">Cadastre-se para viajar</h2>
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
