import { useEffect, useRef } from "react";
export default function Cursor() {
  const outerRef = useRef(null);
  const innerRef = useRef(null);

  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const mouse = useRef({ x: pos.current.x, y: pos.current.y });
  const rafRef = useRef(null);
  const isTouch = typeof window !== "undefined" && "ontouchstart" in window;

  useEffect(() => {
    if (isTouch) return; // disable on touch devices

    const handleMove = (e) => {
      // support touch and mouse events defensively
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      mouse.current.x = clientX;
      mouse.current.y = clientY;
      // make the inner dot instantly move a little for snappy feel
      if (innerRef.current) {
        innerRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("touchmove", handleMove, { passive: true });

    // Smooth follow using lerp
    const ease = 0.15; // lower => slower, higher => snappier
    const loop = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * ease;
      pos.current.y += (mouse.current.y - pos.current.y) * ease;

      if (outerRef.current) {
        // translate with transform for GPU acceleration
        outerRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
    };
  }, [isTouch]);

  // Render - uses Tailwind utility classes plus inline styles for dynamic transform
  return (
    <>
      {!isTouch && (
        <div
          aria-hidden="true"
          ref={outerRef}
          className="fixed pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[9999]"
          style={{
            // initial position centered offscreen until moved
            top: 0,
            left: 0,
            width: 220,
            height: 220,
            borderRadius: "9999px",
            filter: "blur(36px)",
            background: "radial-gradient(circle at 30% 30%, rgba(20,184,166,0.28), rgba(20,184,166,0.12) 40%, rgba(0,0,0,0) 70%)",
            transform: `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`,
            transition: "opacity 200ms linear",
            opacity: 0.95,
            mixBlendMode: "screen",
            willChange: "transform",
          }}
        />
      )}

      {!isTouch && (
        // small inner dot for a precise pointer (optional)
        <div
          aria-hidden="true"
          ref={innerRef}
          className="fixed pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[10000]"
          style={{
            top: 0,
            left: 0,
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "rgba(20,184,166,0.95)", // teal-400 approximate
            boxShadow: "0 0 10px rgba(20,184,166,0.9), 0 0 22px rgba(20,184,166,0.35)",
            transform: `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`,
            willChange: "transform",
          }}
        />
      )}
    </>
  );
}
