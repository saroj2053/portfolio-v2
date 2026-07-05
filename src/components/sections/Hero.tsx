import { ArrowDown } from "lucide-react";
import {LuGithub as Github, LuLinkedin as Linkedin} from "react-icons/lu";

const PORTRAIT_URL = "https://placehold.co/376x476";
const BG_TEXTURE_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663753371575/7XhrMebuYRmQUniDac4V8W/hero-bg-texture-Esxrhg7JLGqdSJWpgXBtvm.webp";

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-background dark:bg-background"
      style={{ paddingTop: "4rem" }}
    >
      {/* Background texture — very subtle */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url(${BG_TEXTURE_URL})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center min-h-[calc(100vh-4rem)]">

          {/* LEFT — Text content */}
          <div className="flex flex-col justify-center py-16 lg:py-0 lg:pr-12">
            {/* Label */}
            <div
              className="section-label mb-6"
              style={{ animationDelay: "0ms" }}
            >
              ✦ Full-Stack Developer
            </div>

            {/* Name */}
            <h1
              className="font-black text-[clamp(3rem,7vw,5.5rem)] leading-[0.95] text-foreground dark:text-foreground mb-6"
              style={{
                animation: "slideUp 0.7s cubic-bezier(0.23,1,0.32,1) 0.1s both",
              }}
            >
              Saroj
              <br />
              <span className="text-primary">Sah</span>
            </h1>

            {/* Tagline */}
            <p
              className="font-['Lato'] text-justify text-lg text-[#6B6560] dark:text-[#A09890] leading-relaxed max-w-md mb-8"
              style={{
                animation: "slideUp 0.7s cubic-bezier(0.23,1,0.32,1) 0.25s both",
              }}
            >
             I build fast, beautiful, and accessible websites—handling everything from the user interface to the back-end code.
            </p>

          
            {/* CTA buttons */}
            <div
              className="flex flex-wrap gap-4 mb-10"
              style={{
                animation: "slideUp 0.7s cubic-bezier(0.23,1,0.32,1) 0.45s both",
              }}
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="brutal-btn bg-primary  text-cream px-6 py-3"
              >
                View My Work
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="brutal-btn bg-cream dark:bg-[#3A3530] text-charcoal dark:text-cream px-6 py-3"
              >
                Get In Touch
              </a>
            </div>

            {/* Social links */}
            <div
              className="flex gap-4"
              style={{
                animation: "slideUp 0.7s cubic-bezier(0.23,1,0.32,1) 0.55s both",
              }}
            >
              {[
                { icon: Github, href: "https://github.com/saroj2053", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/sarojsah2053/", label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 border-2 border-primary  flex items-center justify-center hover:bg-primary  hover:text-cream transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT — Portrait */}
          <div
            className="relative flex items-center justify-center lg:justify-end"
            style={{
              animation: "slideUp 0.8s cubic-bezier(0.23,1,0.32,1) 0.2s both",
            }}
          >
            {/* Decorative background block */}
            <div className="absolute top-8 right-0 w-[85%] h-[90%] bg-primary  opacity-10 border-2 border-primary" />
            <div className="absolute top-4 right-4 w-[85%] h-[90%] bg-primary opacity-10 border-2 border-primary" />

            {/* Portrait image */}
            <div className="relative z-10 brutal-card overflow-hidden w-[320px] h-100 lg:w-95 lg:h-120">
              <img
                src={PORTRAIT_URL}
                alt="Saroj Sah — Full-Stack Developer"
                className="w-full h-full object-cover"
              />
              {/* Overlay label */}
              <div className="absolute bottom-0 left-0 right-0 bg-primary text-cream px-4 py-3">
                <div className="font-['Ovo'] text-xs font-semibold uppercase tracking-widest text-cream">
                  Available for hire
                </div>
                <div className="font-['Lato'] text-sm font-bold mt-0.5 tracking-wide">
                  Open to full-time & freelance
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-200 flex flex-col items-center gap-2 text-[#6B6560]  hover:text-primary transition-colors cursor-pointer"
        style={{ animation: "bounce 2s infinite" }}
        aria-label="Scroll down"
      >
        <span className="font-['Ovo'] text-xs font-semibold uppercase tracking-widest">Scroll</span>
        <ArrowDown size={16} color="currentColor" />
      </button>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </section>
  );
}
