export default function Sneakpeeks() {

  const videos = [1,4,7,5,10,8,2,3,9]

  return (
    <div className="relative min-h-screen text-center flex w-full items-center justify-center py-24">

    <video
        autoPlay
        loop
        playsInline
        muted
        poster="/assets/img/hero-poster-opt.jpg"
        className="object-cover w-full h-full absolute top-0 left-0 opacity-20"
      >
        <source src="/assets/video/sneakpeeks-opt.mp4" />
      </video>
      <div className="w-full relative">
        <h2 className="text-6xl sm:text-8xl mb-12">
          <span className="text-beige">SNEAK</span>{" "}
          <span className="text-ltBlue">PEEKS</span>
        </h2>
        <div className="max-w-screen-md px-8 mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {videos.map((item, i) => {
            return(
              <video
              autoPlay
              loop
              playsInline
              muted
              className="w-full aspect-square rounded-lg"
              key={i}
            >
              <source src={"/assets/video/sneakpeeks/"+item+".mp4"} />
            </video>
            )
          })}
        </div>
      </div>
    </div>
  );
}
