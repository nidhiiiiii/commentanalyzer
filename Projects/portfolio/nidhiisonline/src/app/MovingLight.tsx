"use client";
import React, { useEffect, useRef, useState } from "react";

export default function MovingLight() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const overlayStyle: React.CSSProperties = {
    pointerEvents: "none",
    position: "fixed",
    inset: 0,
    zIndex: 10,
    background: `radial-gradient(600px at ${pos.x}px ${pos.y}px, rgba(96,165,250,0.18), transparent 80%)`,
    transition: "background 0.1s cubic-bezier(.4,0,.2,1)",
    mixBlendMode: "lighten",
  };

  return <div ref={overlayRef} style={overlayStyle} />;
} 