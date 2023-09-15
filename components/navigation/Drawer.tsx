import Link from "next/link";

export default function Drawer({ links, drawerOpen, path }: any) {
  return (
    <div className={`relative`}>
      <div
        aria-hidden={!drawerOpen}
        className={`z-10 text-center text-white bg-background backdrop-blur-md top-0 flex flex-col items-center justify-center w-screen transition-all h-screen fixed ${
          drawerOpen ? "left-0" : "left-full"
        }`}
      >
        <div className="inline-block flex flex-col font-gang text-3xl">
          {links.map((item: any, i: any) => {
            return (
              <Link href={item.href} key={i}>
                <a className="mb-6" style={{ color: item.color }}>
                  {item.text}
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
