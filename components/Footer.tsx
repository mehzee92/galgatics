import Link from "next/link";

export default function Footer() {
  const navLinks = [
    {
      text: "Home",
      href: "/",
      color: "#fff",
    },
    {
      text: "Team",
      href: "/#",
      color: "#fff",
    },
    {
      text: "Galactic map",
      href: "/#",
      color: "#D48A40",
    },
    {
      text: "Shop",
      href: "/#",
      color: "#fff",
    },
    {
      text: "The rock",
      href: "/#",
      color: "#5D839B",
    },
  ];

  return (
    <footer className="bg-black/5 flex flex-col items-center justify-center py-24 text-white">
      <img src="/logo.png" className="h-24 mb-6" alt="Galactic Inmates logo" />
      <h2 className="opacity-30 mb-6">&copy; GALACTIC INMATES 2022</h2>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
        {navLinks.map((link, i) => (
          <Link href={link.href} key={i}>
            <a className="transition-all duration-350 hover:opacity-60">
              {link.text}
            </a>
          </Link>
        ))}
      </div>
    </footer>
  );
}
