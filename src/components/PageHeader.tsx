"use client";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}

export default function PageHeader({ title, subtitle, action }: PageHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 mb-8 border-b border-border-color">
      <div>
        <h1 className="text-3xl font-black tracking-tight text-cream">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-1.5 text-sm text-cream/65 font-medium max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
      {action && <div className="flex-shrink-0">{action}</div>}
    </div>
  );
}
