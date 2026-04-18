"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
  type Ref,
} from "react";

type AllowedTag =
  | "div"
  | "section"
  | "header"
  | "footer"
  | "article"
  | "li"
  | "span"
  | "p";

type Props = {
  children: ReactNode;
  delay?: number;
  as?: AllowedTag;
  className?: string;
  style?: CSSProperties;
  once?: boolean;
};

export default function Reveal({
  children,
  delay = 0,
  as = "div",
  className = "",
  style,
  once = true,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const inViewNow = rect.top < window.innerHeight && rect.bottom > 0;
    if (inViewNow) {
      setVisible(true);
      if (once) return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  const mergedStyle: CSSProperties = {
    ...style,
    ["--reveal-delay" as string]: `${delay}ms`,
  };
  const classes = `reveal ${visible ? "is-visible" : ""} ${className}`.trim();
  const elRef = ref as Ref<HTMLElement>;

  switch (as) {
    case "section":
      return (
        <section ref={elRef} className={classes} style={mergedStyle}>
          {children}
        </section>
      );
    case "header":
      return (
        <header ref={elRef} className={classes} style={mergedStyle}>
          {children}
        </header>
      );
    case "footer":
      return (
        <footer ref={elRef} className={classes} style={mergedStyle}>
          {children}
        </footer>
      );
    case "article":
      return (
        <article ref={elRef} className={classes} style={mergedStyle}>
          {children}
        </article>
      );
    case "li":
      return (
        <li
          ref={ref as Ref<HTMLLIElement>}
          className={classes}
          style={mergedStyle}
        >
          {children}
        </li>
      );
    case "span":
      return (
        <span
          ref={ref as Ref<HTMLSpanElement>}
          className={classes}
          style={mergedStyle}
        >
          {children}
        </span>
      );
    case "p":
      return (
        <p
          ref={ref as Ref<HTMLParagraphElement>}
          className={classes}
          style={mergedStyle}
        >
          {children}
        </p>
      );
    default:
      return (
        <div
          ref={ref as Ref<HTMLDivElement>}
          className={classes}
          style={mergedStyle}
        >
          {children}
        </div>
      );
  }
}
