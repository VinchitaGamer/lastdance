/* app/ui-showroom/preview/page.tsx */
"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import MockPreview, { stylesData } from "../MockPreview";
import "../ShowcaseStyles.css";

function PreviewContent() {
  const searchParams = useSearchParams();
  const styleParam = searchParams.get("style");
  const modeParam = searchParams.get("mode");

  // Validate style parameter, fallback to glassmorphism
  const activeStyle = (styleParam && styleParam in stylesData) 
    ? (styleParam as keyof typeof stylesData) 
    : "glassmorphism";

  // Validate mode parameter, fallback to dark
  const colorMode = (modeParam === "light" || modeParam === "dark") 
    ? (modeParam as "light" | "dark") 
    : "dark";

  return <MockPreview activeStyle={activeStyle} colorMode={colorMode} />;
}

export default function PreviewPage() {
  return (
    <Suspense 
      fallback={
        <div className="flex h-screen w-screen items-center justify-center bg-zinc-950 text-zinc-500 font-mono text-[10px]">
          Cargando previsualización...
        </div>
      }
    >
      <PreviewContent />
    </Suspense>
  );
}
