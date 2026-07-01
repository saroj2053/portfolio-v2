const Footer = () => {
  return (
    <footer className="bg-primary-foreground py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-black text-4xl text-foreground ">
          SS<span className="text-primary">.</span>
        </div>

        <p className="font-['Ovo']  font-semibold text-[#6B6560] dark:text-[#A09890] text-center">
          © {new Date().getFullYear()} Saroj Sah. All rights reserved.
        </p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-['Ovo'] text-xs uppercase font-bold
           tracking-widest text-primary border-2 border-primary px-4 py-2 hover:bg-primary hover:text-cream transition-colors"
        >
          Back to Top ↑
        </button>
      </div>
    </footer>
  );
}

export default Footer;