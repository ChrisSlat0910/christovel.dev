'use client';

export default function Footer() {
  return (
    <footer className="w-full overflow-hidden bg-[#080808] flex justify-center items-end" style={{ height: '30vh', minHeight: '200px' }}>
      <h1 
        className="text-white text-[25vw] leading-none font-bold select-none text-center transform translate-y-[20%]"
        style={{ fontFamily: '"DM Serif Display", Georgia, serif', opacity: 0.95 }}
      >
        HIZKIA
      </h1>
    </footer>
  );
}
