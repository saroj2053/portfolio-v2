import { skinList } from "@/data/skins";
import { useSkinStore } from "@/stores/skinStore";
import { navLinks } from "@/constant";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import SkinCard from "./SkinCard";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [skinPickerOpen, setSkinPickerOpen] = useState(false);
  const { skinId, setSkin } = useSkinStore();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) setSkinPickerOpen(false);
  }, [open]);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background border-b-2 border-border shadow-[0_2px_0_var(--header-shadow)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="font-['Ovo'] font-black text-xl text-foreground tracking-tight hover:text-primary transition-colors"
          >
            <span className="text-primary">&lt; Saroj /&gt;</span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`nav-link ${activeSection === link.href.replace("#", "") ? "active" : ""}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Tooltip>
                <TooltipTrigger>
              <button
                onClick={() => setSkinPickerOpen(!skinPickerOpen)}
                className="hidden md:flex items-center justify-center gap-1.5 px-4 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Switch skin"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M11.773 7.412c-.064.064-.27.249-1.017-.027-.75-.277-1.706-.928-2.695-1.918-.99-.99-1.64-1.945-1.918-2.695-.276-.747-.091-.953-.027-1.017s.27-.249 1.017.027q.14.052.29.121c.7.324 1.54.93 2.405 1.797.99.99 1.641 1.945 1.918 2.695.276.747.091.953.027 1.017M7 6.528c.85.85 1.738 1.535 2.581 1.972H1.694v-.027a1.3 1.3 0 0 1 .1-.507l2.802-4.33.172-.26C5.16 4.383 5.956 5.485 7 6.529m3.89-3.889c2.147 2.148 3.24 4.537 1.944 5.834a13 13 0 0 1-2.127 1.719L6.352 13.01s-1.945 1.296-4.537-1.296C-.778 9.12.518 7.176.518 7.176l2.818-4.355A13 13 0 0 1 5.056.694C6.351-.602 8.74.491 10.888 2.64M12.748 15c.966 0 1.75-.765 1.75-1.71 0-1.234-1.17-2.76-1.512-3.178a.3.3 0 0 0-.237-.111.31.31 0 0 0-.24.112c-.34.422-1.511 1.96-1.511 3.178 0 .944.784 1.71 1.75 1.71"/></svg>
                <span className="font-['Ovo'] text-xs font-semibold">Theme</span>
              </button>
              </TooltipTrigger>
              <TooltipContent className="bg-primary text-charcoal dark:text-cream">
                <p className="font-['Ovo'] text-sm font-semibold">Choose one of the skins</p>
              </TooltipContent>
              </Tooltip>

              {skinPickerOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setSkinPickerOpen(false)} />
                    
                  <div className="absolute right-0 top-12 z-50 w-56 border-2 border-border bg-background shadow-[4px_4px_0_var(--brutal-shadow)] p-3">
                    <div className="grid grid-cols-1 gap-2">
                      {skinList.map((s) => (
                        <SkinCard
                          key={s.id}
                          id={s.id}
                          label={s.label}
                          active={skinId === s.id}
                          onSelect={() => { setSkin(s.id as any); setSkinPickerOpen(false); }}
                        />
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              className="hidden md:inline-flex items-center brutal-btn bg-primary text-primary-foreground px-4 py-2"
            >
              Hire Me
            </a>
          </div>

          <button
            className="md:hidden p-2 border-2 border-border"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>
      

      {/* Mobile View */}
      {open && (
        <div className="fixed inset-0 z-40 bg-background flex flex-col pt-15 px-8 border-r-2 border-border md:hidden">
          <nav className="flex flex-col gap-6 mt-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left font-['Ovo'] text-2xl font-semibold text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
            className="mt-6 inline-flex items-center justify-center brutal-btn bg-primary text-primary-foreground px-6 py-3 text-sm"
          >
            Hire Me
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
