export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <video
        autoPlay
        loop
        playsInline
        muted
        poster="/assets/img/hero-poster-opt.jpg"
        className="w-full "
        style={{width:"100%"}}
      >
        <source src="/assets/video/hero-opt.mp4" />
      </video>
    </div>
  );
}
