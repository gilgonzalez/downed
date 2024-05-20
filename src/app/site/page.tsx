import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="h-full w-full relative flex items-center justify-start flex-col pt-36">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[#FFE25990] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px]"/>
          <p className="text-center font-semibold text-xl text-slate-400">Dummies web creator</p>
          <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
            <h1 className="text-9xl font-bold text-center md:text-[10rem]"> Downed </h1>
          </div>
      </section>
    </>

    
  );
}