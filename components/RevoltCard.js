// components/RevoltCard.js

import { cn } from "../lib/utils"; // Adjust if not using alias "@/"

export function RevoltCard({ title, description, href, className }) {
  return (
    <a
      href={href}
      className={cn(
        "group bg-card border border-border rounded-xl p-6 transition-all duration-300",
        "hover:border-revolt-brand hover:shadow-lg hover:shadow-revolt-brand/20",
        "transform hover:-translate-y-1",
        className
      )}
    >
      <h3 className="text-2xl font-semibold text-accent mb-2 group-hover:text-revolt-brand transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground">{description}</p>
    </a>
  );
}
