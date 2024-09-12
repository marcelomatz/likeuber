import Image from "next/image";

export default function Footer() {
  return (
    <section className="w-full flex flex-col bg-foreground py-10 px-10 justify-center items-center">
      <div className="w-full max-w-7xl mx-auto gap-10 sm:grid-cols-2 items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <Image src={"/uberlogo.png"} alt="Logo Uber" width={40} height={30} />
          <h2 className="text-background text-xs font-light">
            2024 Marcelo Matz
          </h2>
        </div>
        <div className="flex items-center justify-center gap-4 py-4">
          <Image
            src={"/lojaapple.png"}
            alt="Loja Apple"
            width={100}
            height={75}
          />
          <Image
            src={"/playstore.png"}
            alt="Play Store"
            width={100}
            height={75}
          />
        </div>
      </div>
    </section>
  );
}
