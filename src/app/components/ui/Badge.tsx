// src/app/components/ui/Badge.tsx (Corrigé)
import * as React from "react";

// On utilise directement le type de React au lieu de créer une interface vide
export function Badge({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}
      {...props}
    />
  );
}