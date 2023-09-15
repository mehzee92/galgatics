export default function About() {
  return (
    <div className="max-w-screen-2xl px-4 sm:px-12 mx-auto min-h-screen flex flex-col md:flex-row justify-center items-center py-24">
      <div className="md:w-1/2">
        <h2 className="text-orange text-4xl sm:text-5xl mb-6 font-bold">
          Project description
        </h2>
        <p className="text-lg sm:text-2xl text-white">
          Galactic Inmates is an exclusive animated collection of 1,500
          utility-driven art pieces living in the Ethereum blockchain. Each
          Inmate grants a membership to a private holders-only community in
          addition to several other benefits such as the possibility to “Lock”
          your Inmate to earn our own custom Token for future uses.
        </p>
      </div>
      <img src="/assets/img/walk-min.png" className="md:w-1/3" alt="" />
    </div>
  );
}
