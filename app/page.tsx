export default function Home() {
  return (
    <main className="min-h-screen bg-home-mobile bg-cover pt-[136px] text-menuColor px-6 md:bg-home-desktop">
      <div className="md:mt-48 md:grid md:grid-cols-2 md:items-end md:justify-items-center">
        <div className="text-center md:max-w-md">
          <h2 className="font-extraFont uppercase tracking-wider md:text-[28px]">
            So, you want to travel to Space
          </h2>
          <h1 className="font-titleFont uppercase text-[80px] md:text-[150px]">
            Space
          </h1>
          <p className="font-paragraphFont text-[15px] md:text-lg">
            Let's face it, if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="bg-white w-[150px] h-[150px] rounded-full flex items-center justify-center mt-20 mx-auto md:w-[274px] md:h-[274px] md:mt-0">
          <h2 className="text-techColor uppercase font-titleFont text-xl tracking-wide md:text-[32px]">
            Explore
          </h2>
        </div>
      </div>
    </main>
  );
}
