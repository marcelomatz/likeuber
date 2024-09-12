import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-transparent/95 h-14 sm:h-20 px-4 fixed flex top-0 shadow-2xl shadow-foreground">
      <div className="w-full flex items-center justify-between max-w-3xl sm:max-w-xl md:max-w-7xl mx-auto">
        <div className="flex items-center">
          <Image
            src={"/uberlogo.png"}
            alt="Uber Logo"
            width={60}
            height={60}
            className="mr-7 w-12 sm:w-full"
          />
          <nav className="flex items-center gap-3 sr-only sm:not-sr-only">
            <Link
              href={"#"}
              className="text-background font-medium px-3 py-1 hover:text-foreground hover:bg-background hover:rounded-full duration-300"
            >
              Empresa
            </Link>
            <Link
              href={"#"}
              className="text-background font-medium px-3 py-1 hover:text-foreground hover:bg-background hover:rounded-full duration-300"
            >
              Segurança
            </Link>
            <Link
              href={"#"}
              className="text-background font-medium px-3 py-1 hover:text-foreground hover:bg-background hover:rounded-full duration-300"
            >
              Ajuda
            </Link>
          </nav>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Link
            href={"#"}
            className="text-xs sm:text-sm text-background font-medium px-3 py-2 border-2 rounded-full hover:text-foreground hover:bg-background hover:rounded-full duration-300"
          >
            Login
          </Link>
          <Link
            href={"#"}
            className="text-xs sm:text-sm text-foreground font-medium bg-background px-3 py-2 rounded-full border-2 hover:border- hover:border-background hover:text-background hover:bg-transparent"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}
