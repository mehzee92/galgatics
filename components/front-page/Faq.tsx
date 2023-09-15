import { useState } from "react";

export default function Faq() {
  const [open, setOpen] = useState<null | Number>(0);

  const faq = [
    {
      q: "Is there a Discord?",
      a: "Yes, our Discord server is currently open to the general public but this will change after the mint day. Once all Inmates are minted out the Discord Server will transition to a NFT-gated server (you must hold an Inmate to enter).",
      color: "#D48A40",
    },
    {
      q: "Is there a guaranteed mint allowlist?",
      a: "Yes, everyone with the “Inmate” role in our discord will be allowed to mint an Inmate.",
      color: "#5D839B",
    },
    {
      q: "What are the maximum mints per wallet?",
      a: "One mint per wallet is allowed per “Inmate” winner.",
      color: "#834055",
    },
    {
      q: "Is there a roadmap?",
      a: "Yes, you can check out our Galactic Map in the section of our webpage for more information regarding the future plans.",
      color: "#C64E35",
    },
    {
      q: "What are the rewards for Locking my Inmate?",
      a: "You will earn a certain amount of our own custom Token for future uses. (More information about this coming soon).",
      color: "#D48A40",
    },
    {
      q: "How soon after mint will I be available to Lock my Inmate?",
      a: "The Lock function will launch a few days after the mint has completed.",
      color: "#8DB5D3",
    },
    {
      q: "Are there other benefits to Locking up my Inmate?",
      a: "Yes, more information about this coming soon.",
      color: "#C64E35",
    },
    {
      q: "What’s the percentage of royalties for the secondary market?",
      a: "5%",
      color: "#834055",
    },
  ];

  const handleClick = (i: number) => {
    if (open != i) {
      setOpen(i);
    } else {
      setOpen(null);
    }
  };

  return (
    <div className="max-w-screen-lg min-h-screen mx-auto px-4 md:px-12 py-24">
      <h2 className="text-7xl sm:text-9xl text-darkOrange mb-12">FAQ</h2>
      {faq.map((item, i) => {
        return (
          <div
            key={i}
            className={`flex flex-col mt-4 pb-4 border-b`}
            style={{ borderColor: item.color }}
          >
            <button
              className="flex justify-between items-center"
              onClick={() => handleClick(i)}
              style={{ color: item.color }}
            >
              <h2
                className={`text-left flex items-center text-xl md:text-2xl font-medium uppercase pr-4`}
              >
                {item.q}
              </h2>
              {open != i ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z"
                    fill="currentColor"
                  />
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
                    fill="currentColor"
                  />
                </svg>
              )}

              {/*<svg xmlns="http://www.w3.org/2000/svg" className={`transition-all h-5 w-5 sm:h-6 sm:w-6 ${open == i ? "text-secondary rotate-90" : "text-gray-700 rotate-0"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>*/}
            </button>
            <div className="accordion-content" aria-expanded={open != i}>
              <div className="text-lg text-white text-left mt-6">
                <div dangerouslySetInnerHTML={{ __html: item.a }} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
