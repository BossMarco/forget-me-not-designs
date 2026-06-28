import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

/**
 * Scroll-reveal wrapper: fades + rises children into view on first sight.
 *
 * SSR-safe by design — the server renders the *final, visible* state. We only
 * switch to the "hidden, about-to-animate" state AFTER mount (client hydration),
 * and only when motion is allowed. So:
 *   - Server HTML / no-JS  → content is fully visible (never permanently hidden).
 *   - prefers-reduced-motion → no transform/opacity animation at all.
 *   - JS + motion OK         → starts hidden, reveals on intersection.
 */
type RevealProps = {
  children: ReactNode;
  /** Element to render. Defaults to a div. */
  as?: ElementType;
  className?: string;
  /** Stagger delay in ms. */
  delay?: number;
  /** Rise distance in px (12–20 is tasteful). */
  y?: number;
  once?: boolean;
  // Allow passing element-native props through (href, target, rel, id, etc.).
  [key: string]: unknown;
};

export function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  y = 16,
  once = true,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  // `armed` => we've mounted on the client and may animate (motion allowed).
  const [armed, setArmed] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return; // leave content in its visible server state — no animation.

    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setShown(true); // fail open: always visible if we can't observe.
      return;
    }

    // Anti-flash: if the element is already in view on mount (e.g. above the
    // fold), reveal it immediately so arming doesn't blink it hidden→shown.
    const rect = el.getBoundingClientRect();
    const inViewNow = rect.top < window.innerHeight && rect.bottom > 0;
    setArmed(true);
    if (inViewNow) setShown(true);

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            if (once) io.disconnect();
          } else if (!once) {
            setShown(false);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  // Until armed (server + first client paint), render the plain visible state.
  const animate = armed;
  const style = animate
    ? {
        transitionDelay: shown ? `${delay}ms` : "0ms",
        transform: shown ? "none" : `translateY(${y}px)`,
        opacity: shown ? 1 : 0,
      }
    : undefined;

  // `Tag` is polymorphic; cast to a permissive component so `ref` + arbitrary
  // element props type-check across div/article/a without per-element generics.
  const Component = Tag as ElementType;
  return (
    <Component
      ref={ref}
      data-reveal={animate ? (shown ? "in" : "out") : undefined}
      className={animate ? `reveal ${className}`.trim() : className}
      style={style}
      {...rest}
    >
      {children}
    </Component>
  );
}
