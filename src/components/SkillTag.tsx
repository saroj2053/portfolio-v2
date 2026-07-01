const SkillTag = ({ tag, delayInMs }: { tag: string; delayInMs: string }) => {
  return (
    <span
                key={tag}
                className="font-['Ovo'] text-sm font-semibold rounded px-4 py-1 bg-background text-foreground"
                style={{ transitionDelay: delayInMs }}
              >
                {tag}
              </span>
    );
};

export default SkillTag;