interface SectionLabelProps {
  label: string;
  color?: string;
}

export function SectionLabel({ label, color = "text-[#4d8eff]" }: SectionLabelProps) {
  return (
    <p className={`font-mono text-[11px] uppercase tracking-widest mb-3 ${color}`}>
      {label}
    </p>
  );
}
