
type SectionHeaderProps = {
  sectionLabel: string;
  sectionTitle: string;
  sectionSubtitle: string;
 
};

const SectionHeader = ({ sectionLabel, sectionTitle, sectionSubtitle }: SectionHeaderProps) => {
    return (
   <>
    {/* Section header */}
        <div className="reveal mb-16">
          <div className="section-label mb-3">{sectionLabel}</div>
          <div className="flex items-end gap-6">
            <h2 className="font-black text-[clamp(2rem,5vw,3.5rem)] text-foreground dark:text-foreground leading-tight">
              {sectionTitle} <br />{sectionSubtitle}
            </h2>
            <div className="hidden md:block h-0.5 bg-foreground dark:bg-foreground flex-1 mb-4 opacity-30" />
          </div>
        </div>
   </>
    );
}

export default SectionHeader;